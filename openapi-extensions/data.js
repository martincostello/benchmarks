window.BENCHMARK_DATA = {
  "lastUpdate": 1723375826055,
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
      }
    ]
  }
}