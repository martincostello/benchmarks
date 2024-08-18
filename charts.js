'use strict';
(async function () {
  async function init() {
    function collectBenchesPerTestCase(entries) {
      const map = new Map();
      for (const entry of entries) {
        const { commit, date, tool, benches } = entry;
        for (const bench of benches) {
          const result = { commit, date, tool, bench };
          const values = map.get(bench.name);
          if (values === undefined) {
            map.set(bench.name, [result]);
          } else {
            values.push(result);
          }
        }
      }
      return map;
    }

    // Get the raw data for this repository and optional branch
    const segments = window.location.pathname.split('/');
    const path = segments[segments.length - 2];
    const branch = new URLSearchParams(window.location.search).get('branch') || 'main';
    const dataUrl = `https://raw.githubusercontent.com/martincostello/benchmarks/${branch}/${path}/data.json`;

    // Fetch the data and parse it as JSON
    const response = await fetch(dataUrl, { cache: 'no-cache' });
    const data = await response.json();

    // Render header
    document.getElementById('branch-name').textContent = branch;
    document.getElementById('last-update').textContent = new Date(data.lastUpdated).toLocaleString();
    const repoLink = document.getElementById('repository-link');
    repoLink.href = data.repoUrl;
    repoLink.textContent = data.repoUrl;

    // Render footer
    document.getElementById('download-json').onclick = () => {
      const jsonString = JSON.stringify(data, null, 2);
      // See https://developer.mozilla.org/docs/Glossary/Base64#the_unicode_problem
      const encoder = new TextEncoder();
      const bytes = encoder.encode(jsonString);
      const binaryString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');
      const jsonAsBase64 = btoa(binaryString);
      const dataUrl = `data:text/json;base64,${jsonAsBase64}`;
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'benchmark-data.json';
      link.click();
    };

    // Prepare data points for charts
    return Object.keys(data.entries).map(name => ({
      name,
      dataSet: collectBenchesPerTestCase(data.entries[name]),
    }));
  }

  function renderAllCharts(dataSets) {

    function renderGraph(parent, name, dataset) {
      const canvas = document.createElement('canvas');
      canvas.className = 'benchmark-chart';
      parent.appendChild(canvas);

      dataset.sort((a, b) => a.date - b.date);

      const memoryAxis = 'y2';
      const memoryColor = '#e34c26';
      const timeAxis = 'y';
      const timeColor = '#178600';

      const data = {
        labels: dataset.map(d => d.commit.sha.slice(0, 7)),
        datasets: [
          {
            label: 'Time',
            data: dataset.map(d => d.bench.value),
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
              text: dataset.length > 0 ? `t (${dataset[0].bench.unit})` : '',
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
            text: name,
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
                if (memory && item && item.bench.bytesAllocated !== undefined) {
                  label = item.bench.bytesAllocated.toString();
                  label += item.bench.memoryUnit;
                } else {
                  label = item.bench.value.toString();
                  const { range, unit } = item.bench;
                  label += unit;
                  if (range) {
                    label += ` (${range})`;
                  }
                }
                return label;
              },
              afterLabel: context => {
                const { extra } = dataset[context.dataIndex].bench;
                return extra ? `\n${extra}` : '';
              }
            },
          },
        },
      };

      const hasMemory = dataset.some(d => d.bench.bytesAllocated !== undefined);
      if (hasMemory) {
        const memoryUnit = dataset.find(d => d.bench.bytesAllocated !== undefined)?.bench.memoryUnit ?? '';
        data.datasets.push({
          label: 'Memory',
          data: dataset.map(d => d.bench.bytesAllocated),
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

      new Chart(canvas, {
        type: 'line',
        data,
        options,
      });
    }

    function renderBenchSet(name, benchSet, main) {
      const setElement = document.createElement('div');
      setElement.className = 'benchmark-set';
      main.appendChild(setElement);

      const nameElement = document.createElement('h1');
      nameElement.className = 'benchmark-title';
      nameElement.textContent = name;
      setElement.appendChild(nameElement);

      const graphsElement = document.createElement('div');
      graphsElement.className = 'benchmark-graphs';
      setElement.appendChild(graphsElement);

      for (const [benchName, benches] of benchSet.entries()) {
        renderGraph(graphsElement, benchName, benches)
      }
    }

    const main = document.getElementById('main');
    for (const { name, dataSet } of dataSets) {
      // Adjust the values' units to improve readability
      dataSet.forEach(items => {
        if (items.length > 0) {
          let minValue = items.length === 1 ? items[0].bench.value : Number.POSITIVE_INFINITY;

          if (items.length > 1) {
            for (const item of items) {
              minValue = Math.min(minValue, item.bench.value);
            };
          }

          const factor = 1e-3;
          const timeUnits = ['µs', 'ms', 's'];
          for (let i = 0; i < timeUnits.length; i++) {
            if (minValue < 1000) {
              break;
            }
            minValue *= factor;
            for (let j = 0; j < items.length; j++) {
              const item = items[j];
              item.bench.value *= factor;
              item.bench.unit = timeUnits[i];
              item.bench.range = `± ${parseFloat(item.bench.range.substring(2), 10) * factor}`;
            };
          }

          const hasMemory = items.some(item => item.bench.bytesAllocated !== undefined);
          if (hasMemory) {
            minValue = items.length === 1 ? items[0].bench.bytesAllocated : Number.POSITIVE_INFINITY;

            if (items.length > 1) {
              for (const item of items) {
                if (item.bench.bytesAllocated !== undefined) {
                  minValue = Math.min(minValue, item.bench.bytesAllocated);
                }
              };
            }

            const memoryUnits = ['KB', 'MB'];
            for (let i = 0; i < memoryUnits.length; i++) {
              if (minValue < 1000) {
                break;
              }
              minValue *= factor;
              for (let j = 0; j < items.length; j++) {
                const item = items[j];
                if (item.bench.bytesAllocated !== undefined) {
                  item.bench.bytesAllocated *= factor;
                  item.bench.memoryUnit = memoryUnits[i];
                }
              };
            }
          }
        }
      });

      renderBenchSet(name, dataSet, main);
    }
  }

  renderAllCharts(await init());
})();
