'use strict';
(function () {
  const repos = [
    'adventofcode',
    'api',
    'aspnetcore-openapi',
    'costellobot',
    'openapi-extensions',
    'project-euler',
    'website',
  ];
  const tableBody = document.getElementById('table-body');
  for (const repo of repos) {
    const row = document.createElement('tr');

    const repoColumn = document.createElement('td');

    const repoIcon = document.createElement('span');
    repoIcon.classList.add('fa-brands');
    repoIcon.classList.add('fa-github');
    repoIcon.setAttribute('aria-hidden', 'true');

    const repoLink = document.createElement('a');
    repoLink.href = `https://github.com/martincostello/${repo}`;
    repoLink.target = '_blank';
    repoLink.appendChild(repoIcon);
    repoLink.appendChild(document.createTextNode(repo));

    repoColumn.appendChild(repoLink);
    row.appendChild(repoColumn);

    const resultsColumn = document.createElement('td');

    const resultsIcon = document.createElement('span');
    resultsIcon.classList.add('fa-solid');
    resultsIcon.classList.add('fa-chart-line');
    resultsIcon.classList.add('d-none');
    resultsIcon.classList.add('d-lg-inline');
    resultsIcon.setAttribute('aria-hidden', 'true');

    const resultsLink = document.createElement('a');
    resultsLink.href = `${repo}`;
    resultsLink.role = 'button';
    resultsLink.classList.add('btn');
    resultsLink.classList.add('btn-primary');
    resultsLink.appendChild(resultsIcon);
    resultsLink.appendChild(document.createTextNode(' Results \u00bb'));

    resultsColumn.appendChild(resultsLink);
    row.appendChild(resultsColumn);

    tableBody.appendChild(row);
  }
})();
