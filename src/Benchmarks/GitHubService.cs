// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using Blazored.LocalStorage;

namespace MartinCostello.Benchmarks;

/// <summary>
/// A class representing a service for interacting with GitHub.
/// </summary>
public sealed class GitHubService(ISyncLocalStorageService localStorage)
{
    /// <summary>
    /// Gets a value indicating whether the user is authenticated with GitHub.
    /// </summary>
    public bool IsAuthenticated => !string.IsNullOrEmpty(GetToken());

    private string? GetToken()
        => localStorage.GetItemAsString("github-token");
}
