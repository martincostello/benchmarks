'use strict';
(function () {
  function init() {
    function collectBenchesPerTestCase(entries) {
      const map = new Map();
      for (const entry of entries) {
        const { commit, date, tool, benches } = entry;
        for (const bench of benches) {
          const result = { commit, date, tool, bench };
          const arr = map.get(bench.name);
          if (arr === undefined) {
            map.set(bench.name, [result]);
          } else {
            arr.push(result);
          }
        }
      }
      return map;
    }

    const data = window.BENCHMARK_DATA;

    // Render header
    document.getElementById('last-update').textContent = new Date(data.lastUpdate).toLocaleString();
    const repoLink = document.getElementById('repository-link');
    repoLink.href = data.repoUrl;
    repoLink.textContent = data.repoUrl;

    // Render footer
    document.getElementById('dl-button').onclick = () => {
      const dataUrl = `data:,${JSON.stringify(data, null, 2)}`;
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'benchmark-data.json';
      a.click();
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

      const color = '#178600';
      const data = {
        labels: dataset.map(d => d.commit.id.slice(0, 7)),
        datasets: [
          {
            label: name,
            data: dataset.map(d => d.bench.value),
            borderColor: color,
            backgroundColor: `${color}60`, // Add alpha for #rrggbbaa
          }
        ],
      };
      const options = {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Commit',
              },
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: dataset.length > 0 ? `t (${dataset[0].bench.unit})` : '',
              },
              ticks: {
                beginAtZero: true,
              }
            }
          ],
        },
        tooltips: {
          callbacks: {
            afterTitle: items => {
              const { index } = items[0];
              const data = dataset[index];
              return `\n${data.commit.message}\n\n${data.commit.timestamp} committed by @${data.commit.author.username}\n`;
            },
            label: item => {
              let label = item.value;
              const { range, unit } = dataset[item.index].bench;
              label += ` ${unit}`;
              if (range) {
                label += ` (${range})`;
              }
              return label;
            },
            afterLabel: item => {
              const { extra } = dataset[item.index].bench;
              return extra ? `\n${extra}` : '';
            }
          }
        },
        onClick: (_mouseEvent, activeElems) => {
          if (activeElems.length === 0) {
            return;
          }
          const index = activeElems[0]._index;
          const url = dataset[index].commit.url;
          window.open(url, '_blank');
        },
      };

      new Chart(canvas, {
        type: 'line',
        data,
        options,
      });
    }

    function renderBenchSet(name, benchSet, main) {
      const setElem = document.createElement('div');
      setElem.className = 'benchmark-set';
      main.appendChild(setElem);

      const nameElem = document.createElement('h1');
      nameElem.className = 'benchmark-title';
      nameElem.textContent = name;
      setElem.appendChild(nameElem);

      const graphsElem = document.createElement('div');
      graphsElem.className = 'benchmark-graphs';
      setElem.appendChild(graphsElem);

      for (const [benchName, benches] of benchSet.entries()) {
        renderGraph(graphsElem, benchName, benches)
      }
    }

    const main = document.getElementById('main');
    for (const { name, dataSet } of dataSets) {
      renderBenchSet(name, dataSet, main);
    }
  }

  renderAllCharts(init());
})();
