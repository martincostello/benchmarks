window.BENCHMARK_DATA = {
  "lastUpdate": 1723403221147,
  "repoUrl": "https://github.com/martincostello/website",
  "entries": {
    "Website": [
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
          "id": "c3b2faa9c3bcd635d801f3986caf64cbd2b67cd1",
          "message": "Add continuous benchmarks\n\nAdd GitHub Actions workflow to run continuous benchmarks and publish to a tracking website.",
          "timestamp": "2024-08-11T19:51:17+01:00",
          "tree_id": "16b098f3a6ab7f82356f434bc038fd0cdc8c020f",
          "url": "https://github.com/martincostello/website/commit/c3b2faa9c3bcd635d801f3986caf64cbd2b67cd1"
        },
        "date": 1723402496165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Root",
            "value": 357282.72691127233,
            "unit": "ns",
            "range": "± 2040.5396756827827"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.About",
            "value": 363987.29952566966,
            "unit": "ns",
            "range": "± 1214.6813098482532"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Projects",
            "value": 426331.0557154605,
            "unit": "ns",
            "range": "± 7598.8265487841745"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Tools",
            "value": 397010.9130859375,
            "unit": "ns",
            "range": "± 3186.389732625971"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Version",
            "value": 235822.171875,
            "unit": "ns",
            "range": "± 1336.4069834061825"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "martin@martincostello.com",
            "name": "Martin Costello",
            "username": "martincostello"
          },
          "committer": {
            "email": "martin@martincostello.com",
            "name": "Martin Costello",
            "username": "martincostello"
          },
          "distinct": true,
          "id": "d1895da44f19ca851a0921e787a051b48fe88ca5",
          "message": "Fix benchmarks name\n\nFix copy-pasta name.",
          "timestamp": "2024-08-11T20:03:33+01:00",
          "tree_id": "bc049a450638eac49c07003e3f98d1c78cfc231f",
          "url": "https://github.com/martincostello/website/commit/d1895da44f19ca851a0921e787a051b48fe88ca5"
        },
        "date": 1723403220632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Root",
            "value": 359526.1261268029,
            "unit": "ns",
            "range": "± 1304.7691424072787"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.About",
            "value": 369322.86822916666,
            "unit": "ns",
            "range": "± 1371.9491516697972"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Projects",
            "value": 433646.763671875,
            "unit": "ns",
            "range": "± 7881.5391299285475"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Tools",
            "value": 402674.20647321426,
            "unit": "ns",
            "range": "± 3928.8380300259378"
          },
          {
            "name": "MartinCostello.Website.Benchmarks.WebsiteBenchmarks.Version",
            "value": 242700.7021484375,
            "unit": "ns",
            "range": "± 1147.5628145886112"
          }
        ]
      }
    ]
  }
}