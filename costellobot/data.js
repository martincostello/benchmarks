window.BENCHMARK_DATA = {
  "lastUpdate": 1723621086937,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a6e727a4ce128b4b2b4698fae2f3b80a9a5a2d7",
          "message": "Bump github/codeql-action from 3.26.0 to 3.26.1 (#1621)\n\nBumps [github/codeql-action](https://github.com/github/codeql-action) from 3.26.0 to 3.26.1.\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/eb055d739abdc2e8de2e5f4ba1a8b246daa779aa...29d86d22a34ea372b1bbf3b2dced2e25ca6b3384)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-14T07:16:39Z",
          "tree_id": "130534bdce2df8cff043a4cb2c6ee7477789e3d0",
          "url": "https://github.com/martincostello/costellobot/commit/3a6e727a4ce128b4b2b4698fae2f3b80a9a5a2d7"
        },
        "date": 1723619980858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 595691.5676618303,
            "unit": "ns",
            "range": "± 2794.997048659147"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 257382.4613560268,
            "unit": "ns",
            "range": "± 1553.8729712946763"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 304458.8606770833,
            "unit": "ns",
            "range": "± 1379.652052651942"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f00f395c582aeb9e3ee1d385638a085ef7717e40",
          "message": "Remove Microsoft.AspNetCore.DataProtection (#1622)\n\nRemove explicit package version for Microsoft.AspNetCore.DataProtection and replace with System.Drawing.Common instead to resolve vulnerability.",
          "timestamp": "2024-08-14T07:34:47Z",
          "tree_id": "51436bb92c6b71e9200348df232183d15e9c575b",
          "url": "https://github.com/martincostello/costellobot/commit/f00f395c582aeb9e3ee1d385638a085ef7717e40"
        },
        "date": 1723621086471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 598789.04609375,
            "unit": "ns",
            "range": "± 1168.970323899377"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 257920.5017578125,
            "unit": "ns",
            "range": "± 2277.4717870312907"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 309335.91796875,
            "unit": "ns",
            "range": "± 1940.3501360153095"
          }
        ]
      }
    ]
  }
}