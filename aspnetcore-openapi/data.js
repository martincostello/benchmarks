window.BENCHMARK_DATA = {
  "lastUpdate": 1723588098528,
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
            "email": "102549341+costellobot@users.noreply.github.com",
            "name": "costellobot",
            "username": "costellobot"
          },
          "committer": {
            "email": "martin@martincostello.com",
            "name": "martincostello",
            "username": "martincostello"
          },
          "distinct": true,
          "id": "915f06508c053944c6098e6bb647411117b13065",
          "message": "Update .NET SDK (#33)\n\nUpdate .NET SDK to version 9.0.100-preview.7.24407.12.\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Sdk\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>",
          "timestamp": "2024-08-12T13:14:18Z",
          "tree_id": "cb242a9f6df5dfc761982aa77be2a951d1588555",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/915f06508c053944c6098e6bb647411117b13065"
        },
        "date": 1723468591358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 20620449.614583332,
            "unit": "ns",
            "range": "± 1861237.2573721346"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12020844.890625,
            "unit": "ns",
            "range": "± 421710.81264950696"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 8270415.270833333,
            "unit": "ns",
            "range": "± 297281.1188451132"
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
          "id": "100eb411b18a0d14e2685d891e21901c8ce01962",
          "message": "Consume .NET nightly builds\n\nConsume the latest nightly builds of .NET 9.",
          "timestamp": "2024-08-13T15:09:39+01:00",
          "tree_id": "85f2108b89d53b67c946691690304917089b5b1e",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/100eb411b18a0d14e2685d891e21901c8ce01962"
        },
        "date": 1723558314589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 15572718.59375,
            "unit": "ns",
            "range": "± 1491041.0911661123"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12350084.848958334,
            "unit": "ns",
            "range": "± 654924.679706373"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 6428876.286458333,
            "unit": "ns",
            "range": "± 97117.56119290275"
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
          "id": "c22d1b858ed67cfd78c4dac88db9d1697882a86d",
          "message": "Update .NET SDK to 9.0.100-rc.1.24413.1 (#37)\n\n* Update .NET SDK\n\nUpdate .NET SDK to version 9.0.100-rc.1.24413.1.\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Sdk\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>\n\n* Bump .NET NuGet packages\n\nBumps .NET dependencies to their latest versions for the .NET 9.0.100-rc.1.24413.1 SDK.\n\nBumps Microsoft.AspNetCore.Mvc.Testing from 9.0.0-preview.7.24406.2 to 9.0.0-rc.1.24413.4.\nBumps Microsoft.AspNetCore.OpenApi from 9.0.0-preview.7.24406.2 to 9.0.0-rc.1.24413.4.\nBumps Microsoft.EntityFrameworkCore.Sqlite from 9.0.0-preview.7.24405.3 to 9.0.0-rc.1.24402.2.\nBumps Microsoft.Extensions.ApiDescription.Server from 9.0.0-preview.7.24406.2 to 9.0.0-rc.1.24413.4.\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.AspNetCore.Mvc.Testing\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n- dependency-name: Microsoft.AspNetCore.OpenApi\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n- dependency-name: Microsoft.EntityFrameworkCore.Sqlite\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n- dependency-name: Microsoft.Extensions.ApiDescription.Server\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>\n\n---------\n\nSigned-off-by: costellobot <102549341+costellobot@users.noreply.github.com>",
          "timestamp": "2024-08-13T21:01:56Z",
          "tree_id": "89084b8e42ff645e630d8c03fd1353c120681960",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/c22d1b858ed67cfd78c4dac88db9d1697882a86d"
        },
        "date": 1723583057854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 2980366.3736979165,
            "unit": "ns",
            "range": "± 883544.0625413307"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 12119190.192708334,
            "unit": "ns",
            "range": "± 174056.90920371245"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 7797526.869791667,
            "unit": "ns",
            "range": "± 191327.18880866194"
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
          "id": "70740b57a00ee44c3be59f28e39e89fe3f804373",
          "message": "Fix TODO\n\nRemove usage of short job.",
          "timestamp": "2024-08-13T23:24:42+01:00",
          "tree_id": "fd7d33f256e9f27785b72b76825fc201a9580136",
          "url": "https://github.com/martincostello/aspnetcore-openapi/commit/70740b57a00ee44c3be59f28e39e89fe3f804373"
        },
        "date": 1723588098240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "TodoApp.OpenApiBenchmarks.AspNetCore",
            "value": 1064135.1499720982,
            "unit": "ns",
            "range": "± 45738.29314461833"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.NSwag",
            "value": 4528481.5693359375,
            "unit": "ns",
            "range": "± 115085.91846860523"
          },
          {
            "name": "TodoApp.OpenApiBenchmarks.Swashbuckle",
            "value": 2780569.3795572915,
            "unit": "ns",
            "range": "± 109107.35891289059"
          }
        ]
      }
    ]
  }
}