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
    const dataUrl = `https://raw.githubusercontent.com/martincostello/benchmarks/${branch}/${path}/data.js`;

    // Fetch the data, trim the prefix and parse it as JSON
    const response = await fetch(dataUrl);
    const dataText = await response.text();
    const data = JSON.parse(dataText.slice('window.BENCHMARK_DATA = '.length));

    // Render header
    document.getElementById('branch-name').textContent = branch;
    document.getElementById('last-update').textContent = new Date(data.lastUpdate).toLocaleString();
    const repoLink = document.getElementById('repository-link');
    repoLink.href = data.repoUrl;
    repoLink.textContent = data.repoUrl;

    // Render footer
    document.getElementById('download-json').onclick = () => {
      const dataUrl = `data:,${JSON.stringify(data, null, 2)}`;
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

      const color = '#178600';
      const data = {
        labels: dataset.map(d => d.commit.id.slice(0, 7)),
        datasets: [
          {
            label: name,
            data: dataset.map(d => d.bench.value),
            borderColor: color,
            backgroundColor: `${color}60`, // Add alpha for #rrggbbaa
            fill: true,
            tension: 0.4,
          }
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
          tooltip: {
            callbacks: {
              afterTitle: items => {
                const data = dataset[items[0].dataIndex];
                return `\n${data.commit.message}\n\n${data.commit.timestamp} committed by @${data.commit.author.username}\n`;
              },
              label: context => {
                const item = dataset[context.dataIndex];
                let label = item.bench.value.toString();
                const { range, unit } = item.bench;
                label += unit;
                if (range) {
                  label += ` (${range})`;
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
          const units = ['µs', 'ms', 's'];
          for (let i = 0; i < units.length; i++) {
            if (minValue < 1000) {
              break;
            }
            minValue *= factor;
            for (let j = 0; j < items.length; j++) {
              const item = items[j];
              item.bench.value *= factor;
              item.bench.unit = units[i];
              item.bench.range = `± ${parseFloat(item.bench.range.substring(2), 10) * factor}`;
            };
          }
        }
      });

      renderBenchSet(name, dataSet, main);
    }
  }

  renderAllCharts(await init());
})();
