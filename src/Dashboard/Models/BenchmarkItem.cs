// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

namespace MartinCostello.Benchmarks.Models;

/// <summary>
/// A class representing a single benchmark item. This class cannot be inherited.
/// </summary>
public sealed record BenchmarkItem(
    GitCommit Commit,
    BenchmarkResult Result);
