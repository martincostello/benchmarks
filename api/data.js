window.BENCHMARK_DATA = {
  "lastUpdate": 1723214682922,
  "repoUrl": "https://github.com/martincostello/api",
  "entries": {
    "API Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "martin@martincostello.com",
            "name": "martincostello",
            "username": "martincostello"
          },
          "committer": {
            "email": "martin@martincostello.com",
            "name": "martincostello",
            "username": "martincostello"
          },
          "distinct": true,
          "id": "25a0476e55faa1cd75c95e3eff9820c94f98bf2c",
          "message": "Add continuous benchmarks\n\nAdd GitHub Actions workflow to run continuous benchmarks and publish to a tracking website.",
          "timestamp": "2024-08-09T15:42:07+01:00",
          "tree_id": "23a8c1cd65bce3a52088218f8377ce1e0dd910b7",
          "url": "https://github.com/martincostello/api/commit/25a0476e55faa1cd75c95e3eff9820c94f98bf2c"
        },
        "date": 1723214682504,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Api.Benchmarks.ApiBenchmarks.Hash",
            "value": 255766.32094029017,
            "unit": "ns",
            "range": "± 1742.057726760239"
          },
          {
            "name": "MartinCostello.Api.Benchmarks.ApiBenchmarks.Time",
            "value": 214591.23509114582,
            "unit": "ns",
            "range": "± 1060.276687499065"
          }
        ]
      }
    ]
  }
}