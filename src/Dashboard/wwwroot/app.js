'use strict';

window.scrollToActiveChart = () => {
  if (window.location.hash) {
    const focus = window.location.hash.substring(1);
    let element = document.getElementById(focus);
    if (!element) {
      element = document.getElementById(decodeURIComponent(focus));
    }
    if (element) {
      element.scrollIntoView(false);
    }
  }
};

window.configureToolTips = () => {
  const tooltips = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
  tooltips.map((element) => new bootstrap.Tooltip(element));
};

const canvases = new Map();
window.renderChart = (canvasId, configString) => {
  const config = JSON.parse(configString);

  const memoryAxis = 'y2';
  const memoryColor = config.colors.memory;
  const timeAxis = 'y';
  const timeColor = config.colors.time;

  const { dataset } = config;

  const data = {
    labels: dataset.map(d => d.commit.sha.slice(0, 7)),
    datasets: [
      {
        label: 'Time',
        data: dataset.map(d => d.result.value),
        borderColor: timeColor,
        backgroundColor: `${timeColor}60`,
        fill: true,
        tension: 0.4,
        yAxisID: timeAxis,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Commit',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: dataset.length > 0 ? `t (${dataset[0].result.unit})` : '',
        },
      },
    },
    onClick: (_, elements) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        const url = dataset[index].commit.url;
        window.open(url, '_blank');
      }
    },
    plugins: {
      title: {
        display: true,
        text: config.name,
      },
      tooltip: {
        callbacks: {
          afterTitle: items => {
            const data = dataset[items[0].dataIndex];
            return `\n${data.commit.message}\n\n${data.commit.timestamp} authored by @${data.commit.author.username}\n`;
          },
          label: context => {
            const item = dataset[context.dataIndex];
            const memory = context.datasetIndex === 1;
            let label;
            if (memory && item && item.result.bytesAllocated !== undefined) {
              label = item.result.bytesAllocated.toString();
              label += item.result.memoryUnit ?? ' bytes';
            } else {
              label = item.result.value.toString();
              const { range, unit } = item.result;
              label += unit;
              if (range) {
                label += ` (${range})`;
              }
            }
            return label;
          },
          afterLabel: context => {
            const { extra } = dataset[context.dataIndex].result;
            return extra ? `\n${extra}` : '';
          }
        },
      },
    },
  };

  const hasMemory = dataset.some(d => d.result.bytesAllocated !== undefined);
  if (hasMemory) {
    const memoryUnit = dataset.find(d => d.result.bytesAllocated !== undefined)?.result.memoryUnit ?? 'bytes';
    data.datasets.push({
      label: 'Memory',
      data: dataset.map(d => d.result.bytesAllocated),
      borderColor: memoryColor,
      backgroundColor: `${memoryColor}60`,
      fill: false,
      pointStyle: 'triangle',
      tension: 0.4,
      yAxisID: memoryAxis,
    });
    options.scales[memoryAxis] = {
      beginAtZero: true,
      position: 'right',
      title: {
        display: hasMemory,
        text: memoryUnit,
      },
    };
  }

  const previous = canvases.get(canvasId);
  if (previous) {
    previous.destroy();
  }

  const chart = new Chart(document.getElementById(canvasId), {
    type: 'line',
    data,
    options,
  });

  canvases.set(canvasId, chart);
};
