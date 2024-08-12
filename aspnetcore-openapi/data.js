window.BENCHMARK_DATA = {
  "lastUpdate": 1723468591682,
  "repoUrl": "https://github.com/martincostello/aspnetcore-openapi",
  "entries": {
    "ASP.NET Core OpenAPI": [
      {
        "commit": {
          "author": {
            "email": "martin@martincostello.com",
            "name": "martincostello",
            "username": "martincostello"
          },
          "committer": {
            "email": "martin@martincostello.com",
            "name": "Martin Costello",
            "username": "martincostello"
          },
          "distinct": true,
          "id": "fd5d79a12deeeda3abc10b61a80f2568bd38b381",
          "message": "Add continuous benchmarks\n\nAdd GitHub Actions workflow to run continuous benchmarks and publish to a tracking website.",
          "timestamp": "2024-08-12T13:39:14+01:00",
          "tree_id": "cddf6280d24cf54fafcdf274cdaac40f25e0cb94",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/fd5d79a12deeeda3abc10b61a80f2568bd38b381"
        },
        "date": 1723466484879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 10987633.947916666,
            "unit": "ns",
            "range": "± 730071.6069783703"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12268927.479166666,
            "unit": "ns",
            "range": "± 124743.00958132806"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 7988972.505208333,
            "unit": "ns",
            "range": "± 377021.0010923228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102549341+costellobot@users.noreply.github.com",
            "name": "costellobot",
            "username": "costellobot"
          },
          "committer": {
            "email": "martin@martincostello.com",
            "name": "martincostello",
            "username": "martincostello"
          },
          "distinct": true,
          "id": "915f06508c053944c6098e6bb647411117b13065",
          "message": "Update .NET SDK (#33)\n\nUpdate .NET SDK to version 9.0.100-preview.7.24407.12.\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Sdk\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>",
          "timestamp": "2024-08-12T13:14:18Z",
          "tree_id": "cb242a9f6df5dfc761982aa77be2a951d1588555",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/915f06508c053944c6098e6bb647411117b13065"
        },
        "date": 1723468591358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 20620449.614583332,
            "unit": "ns",
            "range": "± 1861237.2573721346"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12020844.890625,
            "unit": "ns",
            "range": "± 421710.81264950696"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 8270415.270833333,
            "unit": "ns",
            "range": "± 297281.1188451132"
          }
        ]
      }
    ]
  }
}