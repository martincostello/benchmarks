window.BENCHMARK_DATA = {
  "lastUpdate": 1723623762264,
  "repoUrl": "https://github.com/martincostello/openapi-extensions",
  "entries": {
    "OpenAPI Extensions": [
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
          "id": "79fa5eaa6ec3d92ab933fe55f07a5a0825db9989",
          "message": "Add continuous benchmarks\n\nAdd GitHub Actions workflow to run continuous benchmarks and publish to a tracking website.",
          "timestamp": "2024-08-10T17:40:10+01:00",
          "tree_id": "7248c3df126dc928237bd4e9ad228a2e83336aa6",
          "url": "https://github.com/martincostello/openapi-extensions/commit/79fa5eaa6ec3d92ab933fe55f07a5a0825db9989"
        },
        "date": 1723308111048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 15953174,
            "unit": "ns",
            "range": "± 941682.6056633275"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 15498431.166666666,
            "unit": "ns",
            "range": "± 2636097.273566227"
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
          "id": "3d2bd5330a83ead9b339a9f992c2b08e3aaa1b4b",
          "message": "Update .NET SDK\n\nUpdate to the latest build of .NET 9 preview 7.",
          "timestamp": "2024-08-10T17:48:13+01:00",
          "tree_id": "752738e44679ecd043466a431868af4e67ee0219",
          "url": "https://github.com/martincostello/openapi-extensions/commit/3d2bd5330a83ead9b339a9f992c2b08e3aaa1b4b"
        },
        "date": 1723308600347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 12716391.276041666,
            "unit": "ns",
            "range": "± 577333.2546882937"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 18830381.552083332,
            "unit": "ns",
            "range": "± 8689869.982274253"
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
          "id": "5a7cd2895f721a643df449c55de542dd52f21fa7",
          "message": "Bump actions/attest-build-provenance from 1.4.0 to 1.4.1 (#39)\n\nBumps [actions/attest-build-provenance](https://github.com/actions/attest-build-provenance) from 1.4.0 to 1.4.1.\n- [Release notes](https://github.com/actions/attest-build-provenance/releases)\n- [Changelog](https://github.com/actions/attest-build-provenance/blob/main/RELEASE.md)\n- [Commits](https://github.com/actions/attest-build-provenance/compare/210c1913531870065f03ce1f9440dd87bc0938cd...310b0a4a3b0b78ef57ecda988ee04b132db73ef8)\n\n---\nupdated-dependencies:\n- dependency-name: actions/attest-build-provenance\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-10T16:55:06Z",
          "tree_id": "a423b59d2cce5e6c959e87bb225b61711188a28b",
          "url": "https://github.com/martincostello/openapi-extensions/commit/5a7cd2895f721a643df449c55de542dd52f21fa7"
        },
        "date": 1723309021587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 10720756.9375,
            "unit": "ns",
            "range": "± 780136.884365944"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 17346339.583333332,
            "unit": "ns",
            "range": "± 4681293.386804324"
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
          "id": "0140004bd1935ebdb71a904b21acf78633901a6e",
          "message": "Simplify benchmarks name\n\nRemove \"Benchmarks\" suffix.",
          "timestamp": "2024-08-11T12:28:44+01:00",
          "tree_id": "2d7ca1e4a260a44e2d8bdded41ff895617085751",
          "url": "https://github.com/martincostello/openapi-extensions/commit/0140004bd1935ebdb71a904b21acf78633901a6e"
        },
        "date": 1723375825807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 10513627.864583334,
            "unit": "ns",
            "range": "± 991735.9894923745"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 19070350.645833332,
            "unit": "ns",
            "range": "± 8475679.382457627"
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
          "id": "f0010da64c4f5e6586775f074f7811b0c27962f0",
          "message": "Benchmark .NET vNext\n\n- Run benchmarks for pushes to the vNext branches.\n- Remove concurrency.",
          "timestamp": "2024-08-12T12:29:35+01:00",
          "tree_id": "d1d3805f503cf58df5335e79f9bf3c432a8f59d2",
          "url": "https://github.com/martincostello/openapi-extensions/commit/f0010da64c4f5e6586775f074f7811b0c27962f0"
        },
        "date": 1723462277638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 11509323.677083334,
            "unit": "ns",
            "range": "± 937823.8862177653"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 21473568.572916668,
            "unit": "ns",
            "range": "± 13088260.204097757"
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
          "id": "5f97deacf73c0a3aed026621aeb7616f9f4c681d",
          "message": "Link to the branch\n\nLink to the same branch's results.",
          "timestamp": "2024-08-12T12:39:58+01:00",
          "tree_id": "19085996ff80fa1dc9e1ea56384771b2014c912d",
          "url": "https://github.com/martincostello/openapi-extensions/commit/5f97deacf73c0a3aed026621aeb7616f9f4c681d"
        },
        "date": 1723462898945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 10688909.1875,
            "unit": "ns",
            "range": "± 726285.6424746973"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 18024279.052083332,
            "unit": "ns",
            "range": "± 1230125.2203317152"
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
          "id": "67c4e85a1369f6b9943e2efe9aa81a47e18a4c01",
          "message": "Bump Verify.Xunit\n\nBump Verify.Xunit to the latest version.",
          "timestamp": "2024-08-13T10:36:27+01:00",
          "tree_id": "1957a18933821ec01cfa2f1d48687fc23ebe163a",
          "url": "https://github.com/martincostello/openapi-extensions/commit/67c4e85a1369f6b9943e2efe9aa81a47e18a4c01"
        },
        "date": 1723541890595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 11102847.515625,
            "unit": "ns",
            "range": "± 730283.5122310501"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 18912805.114583332,
            "unit": "ns",
            "range": "± 2023696.203548265"
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
          "id": "adf2803e9816910cd993b520b1e3f98408468c37",
          "message": "Use stable NuGet packages\n\nUse stable NuGet packages for .NET 9 preview 7.",
          "timestamp": "2024-08-13T14:52:58+01:00",
          "tree_id": "9debaae7b1306a86324b0a4ee0aae0e97dc7387b",
          "url": "https://github.com/martincostello/openapi-extensions/commit/adf2803e9816910cd993b520b1e3f98408468c37"
        },
        "date": 1723557291781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 17602095.322916668,
            "unit": "ns",
            "range": "± 2177439.345694364"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 17748716.296875,
            "unit": "ns",
            "range": "± 954047.4294432168"
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
          "id": "f846e8a2ab5781e11f0c54363828c6747182c562",
          "message": "Bump github/codeql-action from 3.26.0 to 3.26.1 (#49)\n\nBumps [github/codeql-action](https://github.com/github/codeql-action) from 3.26.0 to 3.26.1.\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/eb055d739abdc2e8de2e5f4ba1a8b246daa779aa...29d86d22a34ea372b1bbf3b2dced2e25ca6b3384)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-14T05:08:54Z",
          "tree_id": "424b6284a93ed5adad733e61376c6e80ab50c6fb",
          "url": "https://github.com/martincostello/openapi-extensions/commit/f846e8a2ab5781e11f0c54363828c6747182c562"
        },
        "date": 1723612246576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 11019377.916666666,
            "unit": "ns",
            "range": "± 1055930.5998794697"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 13656855.197916666,
            "unit": "ns",
            "range": "± 732593.7833334985"
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
          "id": "51722bc83944297bbe1cb9b97aa3974050210352",
          "message": "Bump anchore/sbom-action from 0.17.0 to 0.17.1 (#50)",
          "timestamp": "2024-08-14T06:34:36+01:00",
          "tree_id": "64993d1a9c3b601b5e19f561fc51369158cb80f8",
          "url": "https://github.com/martincostello/openapi-extensions/commit/51722bc83944297bbe1cb9b97aa3974050210352"
        },
        "date": 1723613774133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 12830994.765625,
            "unit": "ns",
            "range": "± 1512227.9774261073"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 19372677.979166668,
            "unit": "ns",
            "range": "± 1384545.239720458"
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
          "id": "6b5b0a4b85cc5135fcc00377ce4d4d2f0f55470c",
          "message": "Support .NET 9 rc.1\n\nReact to changes from dotnet/aspnetcore#57253 to support consuming CI builds in applications targeting .NET 9 rc.1 nightly builds.",
          "timestamp": "2024-08-14T09:20:07+01:00",
          "tree_id": "84c7bb682702f49b3f9dfd391d5f982bf10793af",
          "url": "https://github.com/martincostello/openapi-extensions/commit/6b5b0a4b85cc5135fcc00377ce4d4d2f0f55470c"
        },
        "date": 1723623761949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentJson",
            "value": 15827296.072916666,
            "unit": "ns",
            "range": "± 1325759.496281517"
          },
          {
            "name": "MartinCostello.OpenApi.OpenApiBenchmarks.GetOpenApiDocumentYaml",
            "value": 18589607.020833332,
            "unit": "ns",
            "range": "± 1440957.3038466373"
          }
        ]
      }
    ]
  }
}