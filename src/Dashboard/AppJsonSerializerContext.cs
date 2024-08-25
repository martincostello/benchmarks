// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;
using MartinCostello.Benchmarks.Models;

namespace MartinCostello.Benchmarks;

[ExcludeFromCodeCoverage]
[JsonSerializable(typeof(BenchmarkData))]
[JsonSerializable(typeof(IList<GitHubBranch>))]
[JsonSerializable(typeof(GitHubRepository))]
[JsonSerializable(typeof(GitHubUser))]
[JsonSourceGenerationOptions(PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase)]
public sealed partial class AppJsonSerializerContext : JsonSerializerContext;
