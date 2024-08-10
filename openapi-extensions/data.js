window.BENCHMARK_DATA = {
  "lastUpdate": 1723308600630,
  "repoUrl": "https://github.com/martincostello/openapi-extensions",
  "entries": {
    "OpenAPI Extensions Benchmarks": [
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
      }
    ]
  }
}