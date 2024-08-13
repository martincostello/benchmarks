window.BENCHMARK_DATA = {
  "lastUpdate": 1723557788771,
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
          "id": "57eae15e2f13af00a9af9e670eea047016def2da",
          "message": "Bump dependencies\n\nUpdate Microsoft.Playwright and Verify.Xunit to their latest versions.",
          "timestamp": "2024-08-13T10:36:12+01:00",
          "tree_id": "481540913706dc4944204797fda2d3e02937c1d3",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/57eae15e2f13af00a9af9e670eea047016def2da"
        },
        "date": 1723541904148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 11872583.333333334,
            "unit": "ns",
            "range": "± 523728.78378956195"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 13229548.036458334,
            "unit": "ns",
            "range": "± 397949.0227714181"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 7968058.833333333,
            "unit": "ns",
            "range": "± 93049.31423533752"
          }
        ]
      },
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
          "id": "2e9e0fcbb40c115838d0326b2574c3c2a1024c2b",
          "message": "Use official NuGet packages\n\n- Use official NuGet packages for .NET 9 preview 7.\n- Update .NET SDK.",
          "timestamp": "2024-08-13T15:00:50+01:00",
          "tree_id": "f6b78e91970b7fe36350355ae9003e00e1d9d45e",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/2e9e0fcbb40c115838d0326b2574c3c2a1024c2b"
        },
        "date": 1723557788468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 11252371.192708334,
            "unit": "ns",
            "range": "± 761672.9975225849"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 11280290.432291666,
            "unit": "ns",
            "range": "± 178517.69915195563"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 8120505.114583333,
            "unit": "ns",
            "range": "± 553127.4568499891"
          }
        ]
      }
    ]
  }
}