'use strict';
(async function () {
  const hideClass = 'd-none';

  const config = window.DASHBOARD_CONFIG;
  if (!config) {
    throw new Error('Dashboard configuration not found.');
  }

  const githubApiUrl = config.githubApiUrl;
  const githubDataUrl = config.githubDataUrl;
  const githubServerUrl = config.githubServerUrl;
  const isGitHubEnterprise = githubServerUrl !== 'https://github.com';

  const description = encodeURIComponent(`${config.dashboardRepositoryOwner} benchmarks`);
  const scopes = encodeURIComponent(config.tokenScopes.join(','));

  document.getElementById('new-token-link').href = `${githubServerUrl}/settings/tokens/new?description=${description}&scopes=${scopes}`;
  document.getElementById('repo-link').href = `${githubServerUrl}/${config.dashboardRepositoryOwner}/${config.dashboardRepositoryName}`;

  document.getElementById('token-mismatch').textContent =
    isGitHubEnterprise ?
    'The token is for GitHub.com not GitHub Enterprise' :
    'The token is not for GitHub.com';

  const githubType = isGitHubEnterprise ? 'GitHub Enterprise' : 'GitHub';
  const githubNameElements = document.querySelectorAll('.github-name');
  githubNameElements.forEach(element => element.setAttribute('data-github-type', githubType));

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

    const tokenKey = 'github-token';
    let token = localStorage.getItem(tokenKey);

    const headers = {
      'Accept': 'application/vnd.github+json',
      'Authorization': `token ${token}`,
      'X-GitHub-Api-Version': config.githubApiVersion,
    }

    let tokenValid = undefined;

    if (token) {
      try {
        const response = await fetch(`${githubApiUrl}/user`, {
          headers,
        });
        tokenValid = response.ok;
        if (tokenValid) {
          const user = await response.json();
          const userInfo = document.getElementById('user-name');
          userInfo.setAttribute('data-bs-title', `Signed in as @${user.login} (${user.name})`);
          userInfo.setAttribute('data-github-user-login', user.login);
        }
      }
      catch (error) {
        tokenValid = false;
      }

      if (!tokenValid) {
        localStorage.removeItem(tokenKey);
        token = null;
      }
    }

    const tooltips = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
    tooltips.map(element => new bootstrap.Tooltip(element));

    if (!token) {
      const tokenValue = document.getElementById('github-token');
      if (tokenValue) {
        document.getElementById('save-token').addEventListener('click', () => {
          const token = tokenValue.value;
          if (token.length > 0) {
            document.getElementById('load-data').disabled = true;
            document.getElementById('spinner').classList.remove(hideClass);
            localStorage.setItem(tokenKey, token);
            location.reload();
          }
        });
        document.getElementById('token-prompt').classList.remove(hideClass);
        if (tokenValid === false) {
          const alert = document.getElementById('token-invalid');
          alert.classList.remove(hideClass);
        }
        tokenValue.focus();
        return null;
      }
    }

    ['download-json', 'header', 'main'].forEach(id => document.getElementById(id).classList.remove(hideClass));

    if (token) {
      headers['Authorization'] = `token ${token}`;
      const signOut = document.getElementById('sign-out');
      signOut.addEventListener('click', () => {
        localStorage.removeItem(tokenKey);
        location.reload();
      });
      signOut.classList.remove(hideClass);
    }

    const dashboardOwner = config.dashboardRepositoryOwner;
    const dashboardName = config.dashboardRepositoryName;
    const repositories = config.repositories;

    const parameters = new URLSearchParams(window.location.search);
    const repo = parameters.get('repo') || repositories[0];

    let branch = parameters.get('branch');
    let publicRepo = false;

    const repositorySelect = document.getElementById('repository');
    for (const item of repositories) {
      const option = document.createElement('option');
      option.selected = item === repo;
      option.textContent = item;
      option.value = item;
      repositorySelect.appendChild(option);
    }

    repositorySelect.value = repo;

    const branchSelect = document.getElementById('branch');

    const hydrateBranches = async (_) => {
      let repoName = repositorySelect.value;
      if (repoName.length === 0) {
        repoName = repo;
      }
      const repoUrl = `${githubApiUrl}/repos/${dashboardOwner}/${repoName}`;
      const repoResponse = await fetch(repoUrl, {
        headers,
      });

      if (!repoResponse.ok) {
        throw new Error(`Failed to get repository ${dashboardOwner}/${repoName}`);
      }

      const repository = await repoResponse.json();
      publicRepo = repository.visibility === 'public';

      let branchName = branch;

      if (!branchName || branchName.length === 0) {
        branchName = repository.default_branch;
      }

      const branchesUrl = `${githubApiUrl}/repos/${repository.full_name}/branches`;
      const branchesResponse = await fetch(branchesUrl, {
        headers,
      });

      if (!branchesResponse.ok) {
        throw new Error(`Failed to get branches for repository ${dashboardOwner}/${repoName}`);
      }

      const branches = await branchesResponse.json();

      branches.sort((a, b) => {
        if (a.name === repository.default_branch) {
          return -1;
        } else if (b.name === repository.default_branch) {
          return 1;
        }
        return a.name.localeCompare(b.name);
      });

      const branchSelect = document.getElementById('branch');

      while (branchSelect.firstChild) {
        branchSelect.removeChild(branchSelect.firstChild);
      }

      for (const branch of branches) {
        const option = document.createElement('option');
        option.selected = branch.name === branchName;
        option.textContent = branch.name;
        option.value = branch.name;
        branchSelect.appendChild(option);
      }

      if (branch === null) {
        branch = branchName;
      }
    };

    await hydrateBranches();

    branchSelect.value = branch;

    repositorySelect.addEventListener('change', async () => {
      await hydrateBranches();
    });

    const fileName = 'data.json';
    const useApi = isGitHubEnterprise || !publicRepo;
    const dataUrl =
      useApi ?
      `${githubApiUrl}/repos/${dashboardOwner}/${dashboardName}/contents/${repo}/${fileName}?ref=${branch}` :
      `${githubDataUrl}/${dashboardOwner}/${dashboardName}/${branch}/${repo}/${fileName}`;

    const fetchOptions = {
      cache: 'no-cache',
    };

    if (useApi) {
      fetchOptions.headers = {
        ...headers,
        'Accept': 'application/vnd.github.v3.raw',
      };
    }

    const response = await fetch(dataUrl, fetchOptions);

    let data = null;

    if (response.ok) {
      try {
        data = await response.json();
      }
      catch (error) {
        return null;
      }
    }

    if (!data) {
      document.getElementById('header').classList.add(hideClass);
      document.getElementById('error').classList.remove(hideClass);
      return null;
    }

    const lastUpdatedElement = document.getElementById('last-update');
    const lastUpdated = new Date(data.lastUpdated);
    lastUpdatedElement.textContent = lastUpdated.toLocaleString();
    lastUpdatedElement.title = lastUpdated.toISOString();

    const repoLink = document.getElementById('repository-link');
    repoLink.href = data.repoUrl;
    repoLink.textContent = data.repoUrl;

    const branchLink = document.getElementById('branch-link');
    branchLink.href = `${data.repoUrl}/tree/${branch}`;
    branchLink.textContent = branch;

    let commitSha = undefined;
    const suiteNames = Object.keys(data.entries);
    if (suiteNames.length === 1) {
      const benchmarks = data.entries[suiteNames[0]];
      if (benchmarks && benchmarks.length > 0) {
        commitSha = benchmarks[benchmarks.length - 1].commit.sha;
      }
    }

    const commitLink = document.getElementById('commit-link');
    commitLink.href = commitSha ? `${data.repoUrl}/commits/${commitSha}` : '';
    commitLink.textContent = commitSha ?? '';

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

    return Object.keys(data.entries).map(name => ({
      name,
      dataSet: collectBenchesPerTestCase(data.entries[name]),
    }));
  }

  function renderAllCharts(dataSets) {

    function renderGraph(parent, name, dataset) {
      const container = document.createElement('div');
      container.classList.add('benchmark-chart-container');
      container.classList.add('col');
      parent.appendChild(container);

      const canvas = document.createElement('canvas');
      canvas.classList.add('benchmark-chart');
      container.appendChild(canvas);

      dataset.sort((a, b) => a.date - b.date);

      const memoryAxis = 'y2';
      const memoryColor = config.colors.memory;
      const timeAxis = 'y';
      const timeColor = config.colors.time;

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
                  label += item.bench.memoryUnit ?? ' bytes';
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
        const memoryUnit = dataset.find(d => d.bench.bytesAllocated !== undefined)?.bench.memoryUnit ?? 'bytes';
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
      setElement.classList.add('benchmark-set');
      main.appendChild(setElement);

      const nameElement = document.createElement('h2');
      nameElement.classList.add('benchmark-title');
      nameElement.textContent = name;
      setElement.appendChild(nameElement);

      const graphsElement = document.createElement('div');
      graphsElement.classList.add('benchmark-graphs');
      graphsElement.classList.add('row');
      graphsElement.classList.add('row-cols-1');
      graphsElement.classList.add('row-cols-sm-2');
      setElement.appendChild(graphsElement);

      for (const [benchName, benches] of benchSet.entries()) {
        renderGraph(graphsElement, benchName, benches)
      }
    }

    const main = document.getElementById('main');
    for (const { name, dataSet } of dataSets) {
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

  const dataSets = await init();
  if (dataSets) {
    renderAllCharts(dataSets);
    document.getElementById('spinner').classList.add(hideClass);
  }
})();
