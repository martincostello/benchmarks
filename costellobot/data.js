window.BENCHMARK_DATA = {
  "lastUpdate": 1723568809523,
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
            "email": "102549341+costellobot@users.noreply.github.com",
            "name": "costellobot",
            "username": "costellobot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36d72c5ec00b996cb2a245a33c84693cb5b52e7e",
          "message": "Update .NET SDK to 8.0.400 (#1619)\n\n* Update .NET SDK\n\nUpdate .NET SDK to version 8.0.400.\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Sdk\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>\n\n* Bump .NET NuGet packages\n\nBumps .NET dependencies to their latest versions for the .NET 8.0.400 SDK.\n\nBumps Microsoft.AspNetCore.AzureAppServices.HostingStartup from 8.0.7 to 8.0.8.\nBumps Microsoft.AspNetCore.Mvc.Testing from 8.0.7 to 8.0.8.\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.AspNetCore.AzureAppServices.HostingStartup\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n- dependency-name: Microsoft.AspNetCore.Mvc.Testing\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>\n\n---------\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>",
          "timestamp": "2024-08-13T17:01:54Z",
          "tree_id": "3f50bf81d45ee0710834b72a7949360f5f1bb064",
          "url": "https://github.com/martincostello/costellobot/commit/36d72c5ec00b996cb2a245a33c84693cb5b52e7e"
        },
        "date": 1723568809240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 595959.3607271635,
            "unit": "ns",
            "range": "± 1451.6032241480434"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 256387.15455729168,
            "unit": "ns",
            "range": "± 4083.1629576802397"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 304830.7643229167,
            "unit": "ns",
            "range": "± 6295.365453356996"
          }
        ]
      }
    ]
  }
}