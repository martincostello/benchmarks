﻿// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

namespace MartinCostello.Benchmarks;

/// <summary>
/// A class representing the configuration options for the dashboard.
/// </summary>
public sealed class DashboardOptions
{
    /// <summary>
    /// Gets or sets the colors to use for the chart data sets.
    /// </summary>
    public IDictionary<string, string> DataSetColors { get; set; } = new Dictionary<string, string>();

    /// <summary>
    /// Gets or sets the URI to use for the GitHub API.
    /// </summary>
    public Uri GitHubApiUrl { get; set; } = new("https://api.github.com");

    /// <summary>
    /// Gets or sets the GitHub API version to use for requests.
    /// </summary>
    public string GitHubApiVersion { get; set; } = "2022-11-28";

    /// <summary>
    /// Gets or sets the URI to use for the GitHub data.
    /// </summary>
    public Uri GitHubDataUrl { get; set; } = new("https://raw.githubusercontent.com");

    /// <summary>
    /// Gets or sets the URI to use for the GitHub server.
    /// </summary>
    public Uri GitHubServerUrl { get; set; } = new("https://github.com");

    /// <summary>
    /// Gets or sets the owner of the dashboard repository.
    /// </summary>
    public string RepositoryOwner { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the name of the dashboard repository.
    /// </summary>
    public string RepositoryName { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the names of the repositories to show charts for.
    /// </summary>
    public IList<string> Repositories { get; set; } = [];

    /// <summary>
    /// Gets or sets the GitHub token scope(s) to request.
    /// </summary>
    public IList<string> TokenScopes { get; set; } = ["public_repo"];
}
