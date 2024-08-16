window.BENCHMARK_DATA = {
  "lastUpdate": 1723789543148,
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
          "id": "f2eb177fdbb48b0d6a776d0576ed0625309736a8",
          "message": "Remove workaround\n\nRemove workaround for install issue with .NET 9.",
          "timestamp": "2024-08-13T16:25:52+01:00",
          "tree_id": "ec0d4947931af3b0e6e7cb4cc16e834e009ae08d",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/f2eb177fdbb48b0d6a776d0576ed0625309736a8"
        },
        "date": 1723562883813,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 12518909.942708334,
            "unit": "ns",
            "range": "± 941163.1279215236"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12944988.588541666,
            "unit": "ns",
            "range": "± 871510.9146429443"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 6664691.135416667,
            "unit": "ns",
            "range": "± 373940.896517167"
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
          "id": "f3c8b171cf37a60aece50c056baea75ba3416ec4",
          "message": "Bump the typescript-eslint group in /src/TodoApp with 2 updates (#42)\n\nBumps the typescript-eslint group in /src/TodoApp with 2 updates: [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin) and [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser).\n\n\nUpdates `@typescript-eslint/eslint-plugin` from 8.0.1 to 8.1.0\n- [Release notes](https://github.com/typescript-eslint/typescript-eslint/releases)\n- [Changelog](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/CHANGELOG.md)\n- [Commits](https://github.com/typescript-eslint/typescript-eslint/commits/v8.1.0/packages/eslint-plugin)\n\nUpdates `@typescript-eslint/parser` from 8.0.1 to 8.1.0\n- [Release notes](https://github.com/typescript-eslint/typescript-eslint/releases)\n- [Changelog](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/CHANGELOG.md)\n- [Commits](https://github.com/typescript-eslint/typescript-eslint/commits/v8.1.0/packages/parser)\n\n---\nupdated-dependencies:\n- dependency-name: \"@typescript-eslint/eslint-plugin\"\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n  dependency-group: typescript-eslint\n- dependency-name: \"@typescript-eslint/parser\"\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n  dependency-group: typescript-eslint\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-16T04:27:37Z",
          "tree_id": "a89f8b810d1277a20a74a085a5dcb6062366f67d",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/f3c8b171cf37a60aece50c056baea75ba3416ec4"
        },
        "date": 1723782590542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 23370265.885416668,
            "unit": "ns",
            "range": "± 11607851.24278598"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 13250592.427083334,
            "unit": "ns",
            "range": "± 838287.1778660287"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 7232485.734375,
            "unit": "ns",
            "range": "± 225770.2228751772"
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
          "id": "2d1ade78ae2bb8c873809f169b7daea9315715b5",
          "message": "Bump eslint from 9.8.0 to 9.9.0 in /src/TodoApp (#43)\n\nBumps [eslint](https://github.com/eslint/eslint) from 9.8.0 to 9.9.0.\n- [Release notes](https://github.com/eslint/eslint/releases)\n- [Changelog](https://github.com/eslint/eslint/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/eslint/eslint/compare/v9.8.0...v9.9.0)\n\n---\nupdated-dependencies:\n- dependency-name: eslint\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-16T04:34:00Z",
          "tree_id": "aef32bb88dc5634184c15969737e4b346bc9d1ff",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/2d1ade78ae2bb8c873809f169b7daea9315715b5"
        },
        "date": 1723782973454,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 20992101.78125,
            "unit": "ns",
            "range": "± 9694525.149855155"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12318400.625,
            "unit": "ns",
            "range": "± 426517.65876675985"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 6779591.161458333,
            "unit": "ns",
            "range": "± 291187.4382918129"
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
          "id": "eee30b569f6cc768518be095c49335e25d11bcee",
          "message": "Bump elliptic from 6.5.6 to 6.5.7 in /src/TodoApp (#45)",
          "timestamp": "2024-08-16T07:00:11+01:00",
          "tree_id": "9bec64024a94bf9331aa2b41803a4262e0b7dde0",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/eee30b569f6cc768518be095c49335e25d11bcee"
        },
        "date": 1723788154271,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 13899868.098958334,
            "unit": "ns",
            "range": "± 2498143.020168193"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 13021479.713541666,
            "unit": "ns",
            "range": "± 434524.6674870423"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 6830258.296875,
            "unit": "ns",
            "range": "± 331930.56392246776"
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
          "id": "459b9cbc7079dd60ccabde497731b4cea439930e",
          "message": "Bump @stylistic/eslint-plugin from 2.6.2 to 2.6.4 in /src/TodoApp (#44)",
          "timestamp": "2024-08-16T07:23:21+01:00",
          "tree_id": "c8bee0f6f8786e780eceaa669950c690a76ed782",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/459b9cbc7079dd60ccabde497731b4cea439930e"
        },
        "date": 1723789542970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 10922779.463541666,
            "unit": "ns",
            "range": "± 267831.58065678267"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12987174.049479166,
            "unit": "ns",
            "range": "± 664172.2654064536"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 6530649.447916667,
            "unit": "ns",
            "range": "± 370554.36688909295"
          }
        ]
      }
    ]
  }
}