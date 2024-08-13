window.BENCHMARK_DATA = {
  "lastUpdate": 1723566830875,
  "repoUrl": "https://github.com/martincostello/costellobot",
  "entries": {
    "Costellobot": [
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
          "id": "03f70e83ef763e164f9e6976da070b43df8de456",
          "message": "Add continuous benchmarks\n\nAdd GitHub Actions workflow to run continuous benchmarks and publish to a tracking website.",
          "timestamp": "2024-08-13T09:53:25+01:00",
          "tree_id": "ae883c9eb3b092ed2fc0a1c1e98f93cc84e729ff",
          "url": "https://github.com/martincostello/costellobot/commit/03f70e83ef763e164f9e6976da070b43df8de456"
        },
        "date": 1723539389479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 601435.3134114583,
            "unit": "ns",
            "range": "± 1927.044880768751"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 259888.67486979166,
            "unit": "ns",
            "range": "± 2338.1744706240843"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 313472.8818359375,
            "unit": "ns",
            "range": "± 1887.878185704217"
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
            "name": "martincostello",
            "username": "martincostello"
          },
          "distinct": true,
          "id": "64192cdb119c79bbec5ac4e8e519bdc4cbc6f6c7",
          "message": "Update benchmarks to .NET 9\n\nUpdate benchmarks project to target .NET 9.",
          "timestamp": "2024-08-13T10:01:13+01:00",
          "tree_id": "8c3c22363e08d8241e752ef3413f2f9e69eced66",
          "url": "https://github.com/martincostello/costellobot/commit/64192cdb119c79bbec5ac4e8e519bdc4cbc6f6c7"
        },
        "date": 1723539870385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 548289.9983258928,
            "unit": "ns",
            "range": "± 4022.4388246594167"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 240114.36009114582,
            "unit": "ns",
            "range": "± 1338.201086369378"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 312419.3388671875,
            "unit": "ns",
            "range": "± 1548.9010606076988"
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
          "id": "023895373d24a0f32dd4a04c338e6891f63f17b5",
          "message": "Fix package version\n\nFix incorrect package version for Microsoft.AspNetCore.DataProtection.",
          "timestamp": "2024-08-13T17:30:50+01:00",
          "tree_id": "31093dfc10f2784a3082f3fc058c55ef83bc5cd4",
          "url": "https://github.com/martincostello/costellobot/commit/023895373d24a0f32dd4a04c338e6891f63f17b5"
        },
        "date": 1723566830683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 541644.503766741,
            "unit": "ns",
            "range": "± 2778.5479151034165"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 238233.03201729912,
            "unit": "ns",
            "range": "± 1395.1149448133654"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 307724.99029947916,
            "unit": "ns",
            "range": "± 1073.5613371317415"
          }
        ]
      }
    ]
  }
}