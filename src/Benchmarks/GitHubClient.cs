// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json.Serialization.Metadata;
using Blazored.LocalStorage;
using MartinCostello.Benchmarks.Models;
using Microsoft.Extensions.Options;

namespace MartinCostello.Benchmarks;

/// <summary>
/// A class representing a GitHub client. This class cannot be inherited.
/// </summary>
public sealed class GitHubClient(
    HttpClient client,
    ILocalStorageService localStorage,
    IOptions<DashboardOptions> options)
{
    /// <summary>
    /// Gets the current GitHub user as an asynchronous operation.
    /// </summary>
    /// <param name="cancellationToken">The optional <see cref="CancellationToken"/> to use.</param>
    /// <returns>
    /// A <see cref="Task"/> representing the asynchronous operation to get the login and name of the authenticated user.
    /// </returns>
    public async Task<GitHubUser> GetUserAsync(CancellationToken cancellationToken = default)
    {
        return (await GetAsync<GitHubUser>(
            "user",
            AppJsonSerializerContext.Default.GitHubUser,
            cancellationToken))!;
    }

    private async Task<T?> GetAsync<T>(
        string url,
        JsonTypeInfo<T> jsonTypeInfo,
        CancellationToken cancellationToken)
    {
        var requestUri = new Uri(options.Value.GitHubApiUrl, url);

        using var message = new HttpRequestMessage(HttpMethod.Get, requestUri);
        await SetHeadersAsync(message.Headers, cancellationToken);

        using var response = await client.SendAsync(message, cancellationToken);
        response.EnsureSuccessStatusCode();

        return await response.Content.ReadFromJsonAsync<T>(
            jsonTypeInfo,
            cancellationToken);
    }

    private async Task<string?> GetTokenAsync(CancellationToken cancellationToken)
        => await localStorage.GetItemAsStringAsync("github-token", cancellationToken);

    private async Task SetHeadersAsync(HttpRequestHeaders headers, CancellationToken cancellationToken)
    {
        headers.Add("Accept", "application/vnd.github+json");
        headers.Add("X-GitHub-Api-Version", options.Value.GitHubApiVersion);

        var token = await GetTokenAsync(cancellationToken);

        if (!string.IsNullOrEmpty(token))
        {
            headers.Authorization = new("token", token);
        }
    }
}
