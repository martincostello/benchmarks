window.BENCHMARK_DATA = {
  "lastUpdate": 1723794419446,
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
          "id": "0d74bca0360e809fab625583a34f5bcd7e6096d5",
          "message": "Bump NuGet.Versioning from 6.10.2 to 6.11.0 (#1624)\n\nBumps [NuGet.Versioning](https://github.com/NuGet/NuGet.Client) from 6.10.2 to 6.11.0.\n- [Release notes](https://github.com/NuGet/NuGet.Client/releases)\n- [Commits](https://github.com/NuGet/NuGet.Client/commits)\n\n---\nupdated-dependencies:\n- dependency-name: NuGet.Versioning\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-14T08:06:06Z",
          "tree_id": "906517ef0764d48460cfaed0febfdf36c120bb5b",
          "url": "https://github.com/martincostello/costellobot/commit/0d74bca0360e809fab625583a34f5bcd7e6096d5"
        },
        "date": 1723622970794,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 600789.6826923077,
            "unit": "ns",
            "range": "± 2312.738215293822"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 256569.0170200893,
            "unit": "ns",
            "range": "± 2228.488852579106"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 309714.3108723958,
            "unit": "ns",
            "range": "± 2573.3975771112373"
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
          "id": "0752bdfd3a7a1e8b3cdb77f4e3c414564a5a3e45",
          "message": "Bump the microsoft-extensions group with 2 updates (#1623)\n\nBumps the microsoft-extensions group with 2 updates: [Microsoft.Extensions.Http.Resilience](https://github.com/dotnet/extensions) and [Microsoft.Extensions.TimeProvider.Testing](https://github.com/dotnet/extensions).\n\n\nUpdates `Microsoft.Extensions.Http.Resilience` from 8.7.0 to 8.8.0\n- [Release notes](https://github.com/dotnet/extensions/releases)\n- [Commits](https://github.com/dotnet/extensions/commits)\n\nUpdates `Microsoft.Extensions.TimeProvider.Testing` from 8.7.0 to 8.8.0\n- [Release notes](https://github.com/dotnet/extensions/releases)\n- [Commits](https://github.com/dotnet/extensions/commits)\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.Extensions.Http.Resilience\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: microsoft-extensions\n- dependency-name: Microsoft.Extensions.TimeProvider.Testing\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: microsoft-extensions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-14T08:07:22Z",
          "tree_id": "a8db73dd6221f2fb30cecd43bf75fb426dd3cf7b",
          "url": "https://github.com/martincostello/costellobot/commit/0752bdfd3a7a1e8b3cdb77f4e3c414564a5a3e45"
        },
        "date": 1723623039954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 601960.9610877404,
            "unit": "ns",
            "range": "± 4277.741764134576"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 257566.57156808037,
            "unit": "ns",
            "range": "± 1371.3740396057385"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 310408.57875279017,
            "unit": "ns",
            "range": "± 1211.8963601256407"
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
          "id": "aadf1b0d8eb582ee144a15b8c858823424bf162f",
          "message": "Bump elliptic\n\nBump elliptic to 6.5.7 to resolve vulnerability alert.",
          "timestamp": "2024-08-14T13:16:36+01:00",
          "tree_id": "f00493df073f576c06fe86ec265689b6f172cde3",
          "url": "https://github.com/martincostello/costellobot/commit/aadf1b0d8eb582ee144a15b8c858823424bf162f"
        },
        "date": 1723637986089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 611694.9244791666,
            "unit": "ns",
            "range": "± 4738.155316903917"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 258587.957421875,
            "unit": "ns",
            "range": "± 1746.7923763279168"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 309741.393484933,
            "unit": "ns",
            "range": "± 1238.6226978464335"
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
          "id": "bf5321af872a431b3d3ed914a66b88b7a646ee60",
          "message": "Bump github/codeql-action from 3.26.1 to 3.26.2 (#1629)\n\nBumps [github/codeql-action](https://github.com/github/codeql-action) from 3.26.1 to 3.26.2.\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/29d86d22a34ea372b1bbf3b2dced2e25ca6b3384...429e1977040da7a23b6822b13c129cd1ba93dbb2)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-15T07:46:31Z",
          "tree_id": "28c630f8197d3f43cc17277b6e94e4971ae4a1e9",
          "url": "https://github.com/martincostello/costellobot/commit/bf5321af872a431b3d3ed914a66b88b7a646ee60"
        },
        "date": 1723708187465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 606462.0576822917,
            "unit": "ns",
            "range": "± 2755.8217769363832"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 259578.75425502233,
            "unit": "ns",
            "range": "± 1413.685888794243"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 311330.88131510414,
            "unit": "ns",
            "range": "± 1232.697185293149"
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
          "id": "adb2e21e419da3a09571681b514df15b8862920e",
          "message": "Update .NET SDK (#1631)\n\nUpdate .NET SDK to version 8.0.401.\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Sdk\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>",
          "timestamp": "2024-08-15T17:40:41Z",
          "tree_id": "e04517e3c173a0f252ee27133471876946b181d3",
          "url": "https://github.com/martincostello/costellobot/commit/adb2e21e419da3a09571681b514df15b8862920e"
        },
        "date": 1723744119837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 608951.6825520833,
            "unit": "ns",
            "range": "± 2297.4509249569937"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 258540.09284319196,
            "unit": "ns",
            "range": "± 1309.635526010714"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 312812.22400841344,
            "unit": "ns",
            "range": "± 1675.7312659385664"
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
          "id": "96551696b0552812e38529d0508637a5110b7d58",
          "message": "Bump stylelint from 16.8.1 to 16.8.2 in /src/Costellobot (#1632)\n\nBumps [stylelint](https://github.com/stylelint/stylelint) from 16.8.1 to 16.8.2.\n- [Release notes](https://github.com/stylelint/stylelint/releases)\n- [Changelog](https://github.com/stylelint/stylelint/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/stylelint/stylelint/compare/16.8.1...16.8.2)\n\n---\nupdated-dependencies:\n- dependency-name: stylelint\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-16T07:21:40Z",
          "tree_id": "c582ee3be869667235c48dfcc0540c724c59feef",
          "url": "https://github.com/martincostello/costellobot/commit/96551696b0552812e38529d0508637a5110b7d58"
        },
        "date": 1723793085264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 598277.7582632211,
            "unit": "ns",
            "range": "± 1102.1335751277982"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 254520.17727864583,
            "unit": "ns",
            "range": "± 3124.453091857121"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 307825.39481026784,
            "unit": "ns",
            "range": "± 1078.995551078075"
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
          "id": "f16d51e86d3af40c0b7a800b3440c3b35a59eaf5",
          "message": "Bump @stylistic/eslint-plugin from 2.6.2 to 2.6.4 in /src/Costellobot (#1633)\n\nBumps [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic/tree/HEAD/packages/eslint-plugin) from 2.6.2 to 2.6.4.\n- [Release notes](https://github.com/eslint-stylistic/eslint-stylistic/releases)\n- [Changelog](https://github.com/eslint-stylistic/eslint-stylistic/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/eslint-stylistic/eslint-stylistic/commits/v2.6.4/packages/eslint-plugin)\n\n---\nupdated-dependencies:\n- dependency-name: \"@stylistic/eslint-plugin\"\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-16T07:21:57Z",
          "tree_id": "72015fe7b9c76a578a400862476e1564e9179f9a",
          "url": "https://github.com/martincostello/costellobot/commit/f16d51e86d3af40c0b7a800b3440c3b35a59eaf5"
        },
        "date": 1723793105897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 598524.220703125,
            "unit": "ns",
            "range": "± 3643.097557174953"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 253395.69223257212,
            "unit": "ns",
            "range": "± 1390.4671325591223"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 307664.32979910716,
            "unit": "ns",
            "range": "± 1247.1051516282973"
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
          "id": "4e14e03e9d8c9f033500cbafe419714c4463ef0f",
          "message": "Bump Azure.Extensions.AspNetCore.Configuration.Secrets (#1634)\n\nBumps [Azure.Extensions.AspNetCore.Configuration.Secrets](https://github.com/Azure/azure-sdk-for-net) from 1.3.1 to 1.3.2.\n- [Release notes](https://github.com/Azure/azure-sdk-for-net/releases)\n- [Commits](https://github.com/Azure/azure-sdk-for-net/compare/Azure.Extensions.AspNetCore.Configuration.Secrets_1.3.1...Azure.Extensions.AspNetCore.Configuration.Secrets_1.3.2)\n\n---\nupdated-dependencies:\n- dependency-name: Azure.Extensions.AspNetCore.Configuration.Secrets\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-16T07:40:19Z",
          "tree_id": "c0c85ccdcacf2d08c83f29f7091199d16841995b",
          "url": "https://github.com/martincostello/costellobot/commit/4e14e03e9d8c9f033500cbafe419714c4463ef0f"
        },
        "date": 1723794204962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 608068.39453125,
            "unit": "ns",
            "range": "± 2728.923299457412"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 258685.08224051338,
            "unit": "ns",
            "range": "± 2206.380939414659"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 313690.0068359375,
            "unit": "ns",
            "range": "± 3800.305843810426"
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
          "id": "7adf1e5825599371549a9a3f6f49f0dfb48c251e",
          "message": "Bump Azure.Extensions.AspNetCore.DataProtection.Keys from 1.2.3 to 1.2.4 (#1635)\n\nBumps [Azure.Extensions.AspNetCore.DataProtection.Keys](https://github.com/Azure/azure-sdk-for-net) from 1.2.3 to 1.2.4.\r\n- [Release notes](https://github.com/Azure/azure-sdk-for-net/releases)\r\n- [Commits](https://github.com/Azure/azure-sdk-for-net/compare/Azure.Extensions.AspNetCore.DataProtection.Keys_1.2.3...Azure.Extensions.AspNetCore.DataProtection.Keys_1.2.4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Azure.Extensions.AspNetCore.DataProtection.Keys\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-16T08:43:39+01:00",
          "tree_id": "85dd7c6366e964e99123c6ea8dcb00ca9b517a94",
          "url": "https://github.com/martincostello/costellobot/commit/7adf1e5825599371549a9a3f6f49f0dfb48c251e"
        },
        "date": 1723794418950,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Root",
            "value": 613290.8079044118,
            "unit": "ns",
            "range": "± 8561.49630290271"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Version",
            "value": 259329.24759114583,
            "unit": "ns",
            "range": "± 1423.2117998345634"
          },
          {
            "name": "MartinCostello.Costellobot.Benchmarks.AppBenchmarks.Webhook",
            "value": 310945.9404296875,
            "unit": "ns",
            "range": "± 1522.2205339473885"
          }
        ]
      }
    ]
  }
}