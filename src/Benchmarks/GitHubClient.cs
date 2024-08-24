// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
using Blazored.LocalStorage;
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
    public async Task<(string Login, string Name)> GetUserAsync(CancellationToken cancellationToken = default)
    {
        var user = await GetAsync("user", cancellationToken);

        var login = user!.RootElement.GetProperty("login")!.GetString()!;
        var name = user.RootElement.GetProperty("name")!.GetString()!;

        return (login, name);
    }

    private async Task<JsonDocument?> GetAsync(string url, CancellationToken cancellationToken)
    {
        var requestUri = new Uri(options.Value.GitHubApiUrl, url);

        using var message = new HttpRequestMessage(HttpMethod.Get, requestUri);
        await SetHeadersAsync(message.Headers, cancellationToken);

        using var response = await client.SendAsync(message, cancellationToken);
        response.EnsureSuccessStatusCode();

        return await response.Content.ReadFromJsonAsync<JsonDocument>(cancellationToken);
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
