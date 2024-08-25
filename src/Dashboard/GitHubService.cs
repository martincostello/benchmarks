// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using Blazored.LocalStorage;
using MartinCostello.Benchmarks.Models;

namespace MartinCostello.Benchmarks;

/// <summary>
/// A class representing a service for interacting with GitHub.
/// </summary>
public sealed class GitHubService(
    GitHubClient client,
    ISyncLocalStorageService localStorage)
{
    private const string TokenKey = "github-token";

    private bool _invalidToken;

    /// <summary>
    /// Raised when the GitHub user changes.
    /// </summary>
    public event EventHandler<GitHubUserChangedEventArgs>? OnUserChanged;

    /// <summary>
    /// Gets the current GitHub user, if any.
    /// </summary>
    public GitHubUser? CurrentUser { get; private set; }

    /// <summary>
    /// Gets a value indicating whether has a GitHub token configured.
    /// </summary>
    public bool HasToken => !string.IsNullOrEmpty(localStorage.GetItemAsString(TokenKey));

    /// <summary>
    /// Gets a value indicating whether the token is invalid.
    /// </summary>
    public bool InvalidToken => _invalidToken;

    /// <summary>
    /// Signs in the user with the specified GitHub token as an asynchronous operation.
    /// </summary>
    /// <param name="token">The GitHub token to sign in with.</param>
    /// <param name="cancellationToken">The optional <see cref="CancellationToken"/> to use.</param>
    /// <returns>
    /// A <see cref="Task"/> representing the asynchronous operation to sign in that returns
    /// <see langword="true"/> if the specified token is valid; otherwise <see langword="false"/>.
    /// </returns>
    public async Task<bool> SignInAsync(string token, CancellationToken cancellationToken = default)
    {
        localStorage.SetItemAsString(TokenKey, token);

        if (await VerifyTokenAsync(cancellationToken))
        {
            OnUserChanged?.Invoke(this, new(CurrentUser));
            return true;
        }

        return false;
    }

    /// <summary>
    /// Signs out the user as an asynchronous operation.
    /// </summary>
    /// <param name="cancellationToken">The optional <see cref="CancellationToken"/> to use.</param>
    /// <returns>
    /// A <see cref="Task"/> representing the asynchronous operation to sign out.
    /// </returns>
    public async Task SignOutAsync(CancellationToken cancellationToken = default)
    {
        // TODO Make this async with async local storage
        cancellationToken.ThrowIfCancellationRequested();

        localStorage.SetItemAsString(TokenKey, string.Empty);

        CurrentUser = null;
        OnUserChanged?.Invoke(this, new(null));

        await Task.CompletedTask;
    }

    /// <summary>
    /// Verifies the current user's access token as an asynchronous operation.
    /// </summary>
    /// <param name="cancellationToken">The optional <see cref="CancellationToken"/> to use.</param>
    /// <returns>
    /// A <see cref="Task"/> representing the asynchronous operation to verify the token
    /// that returns <see langword="true"/> if the token is valid; otherwise <see langword="false"/>.
    /// </returns>
    public async Task<bool> VerifyTokenAsync(CancellationToken cancellationToken = default)
    {
        bool result;

        try
        {
            CurrentUser = await client.GetUserAsync(cancellationToken);
            result = true;
        }
        catch (HttpRequestException)
        {
            await SignOutAsync(cancellationToken);
            result = false;
        }

        _invalidToken = !result;
        return result;
    }
}
