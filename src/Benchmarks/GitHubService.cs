// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using Blazored.LocalStorage;

namespace MartinCostello.Benchmarks;

/// <summary>
/// A class representing a service for interacting with GitHub.
/// </summary>
public sealed class GitHubService(ISyncLocalStorageService localStorage)
{
    private const string TokenKey = "github-token";

    /// <summary>
    /// Gets a value indicating whether the user is authenticated with GitHub.
    /// </summary>
    public bool IsAuthenticated => !string.IsNullOrEmpty(GetToken());

    /// <summary>
    /// Stores the specified GitHub token for the current user as an asynchronous operation.
    /// </summary>
    /// <param name="token">The token to store.</param>
    /// <param name="cancellationToken">The optional <see cref="CancellationToken"/> to use.</param>
    /// <returns>
    /// A <see cref="Task"/> representing the asynchronous operation to store the token.
    /// </returns>
    public async Task StoreTokenAsync(string token, CancellationToken cancellationToken = default)
    {
        // TODO Make this async with async local storage
        cancellationToken.ThrowIfCancellationRequested();

        localStorage.SetItemAsString(TokenKey, token);

        await Task.CompletedTask;
    }

    private string? GetToken()
        => localStorage.GetItemAsString(TokenKey);
}
