// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using MartinCostello.Benchmarks.Pages;
using Microsoft.Playwright;

namespace MartinCostello.Benchmarks;

[Collection(DashboardCollection.Name)]
public class DashboardTests(
    DashboardFixture fixture,
    ITestOutputHelper outputHelper) : IAsyncLifetime
{
    private const string ValidFakeToken = "VALID_GITHUB_ACCESS_TOKEN";

    private DashboardFixture Fixture { get; } = fixture;

    private ITestOutputHelper OutputHelper { get; } = outputHelper;

    public static TheoryData<string, string?> Browsers()
    {
        var browsers = new TheoryData<string, string?>()
        {
            { BrowserType.Chromium, null },
            { BrowserType.Chromium, "chrome" },
            { BrowserType.Firefox, null },
        };

        // HACK Skip on macOS. See https://github.com/microsoft/playwright-dotnet/issues/2920.
        if (!OperatingSystem.IsLinux() && !OperatingSystem.IsMacOS())
        {
            browsers.Add(BrowserType.Chromium, "msedge");
        }

        if (OperatingSystem.IsMacOS())
        {
            browsers.Add(BrowserType.Webkit, null);
        }

        return browsers;
    }

    [Theory]
    [MemberData(nameof(Browsers))]
    public async Task Can_View_Benchmarks(string browserType, string? browserChannel)
    {
        // Arrange
        string[] expectedRepos =
        [
            "benchmarks-demo",
            "adventofcode",
            "api",
            "aspnetcore-openapi",
            "costellobot",
            "openapi-extensions",
            "project-euler",
            "website",
        ];

        var options = new BrowserFixtureOptions
        {
            BrowserType = browserType,
            BrowserChannel = browserChannel,
        };

        var browser = new BrowserFixture(options, OutputHelper);
        await browser.WithPageAsync(async page =>
        {
            await page.GotoAsync(Fixture.ServerAddress);
            await page.WaitForLoadStateAsync(LoadState.DOMContentLoaded);

            await ConfigureMocksAsync(page);

            var dashboard = new HomePage(page);

            // Act and Assert
            await dashboard.WaitForContentAsync();
            await dashboard.Repository().ShouldBe("benchmarks-demo");
            await dashboard.Branch().ShouldBe("main");

            await dashboard.Repositories().ShouldBe(expectedRepos);
            await dashboard.Branches().ShouldBe(["main", "dotnet-nightly", "dotnet-vnext"]);

            // Arrange
            var token = await dashboard.SignInAsync();
            await token.WaitForContentAsync();

            // Act
            await token.WithToken(Guid.NewGuid().ToString());
            await token.SaveToken();

            // Assert
            await token.TokenIsInvalid().ShouldBeTrue();

            // Act
            await token.WithToken(ValidFakeToken);
            await token.SaveToken();

            // Assert
            await dashboard.WaitForSignedInAsync();
            await dashboard.UserNameAsync().ShouldBe("speedy");
            await dashboard.Repository().ShouldBe("benchmarks-demo");
            await dashboard.Branch().ShouldBe("main");

            await dashboard.Repositories().ShouldBe(expectedRepos);
            await dashboard.Branches().ShouldBe(["main", "dotnet-nightly", "dotnet-vnext"]);

            // Act
            await dashboard.WithRepository("website");

            // Assert
            await dashboard.WaitForContentAsync();
            await dashboard.Repository().ShouldBe("website");
            await dashboard.Branch().ShouldBe("main");
            await dashboard.Repositories().ShouldBe(expectedRepos);
            await dashboard.Branches().ShouldBe(["main", "dev"]);

            // Act
            await dashboard.WithBranch("dev");

            // Assert
            await dashboard.WaitForContentAsync();
            await dashboard.Repository().ShouldBe("website");
            await dashboard.Branch().ShouldBe("dev");
            await dashboard.Repositories().ShouldBe(expectedRepos);
            await dashboard.Branches().ShouldBe(["main", "dev"]);

            // Act
            await dashboard.SignOutAsync();

            // Assert
            await dashboard.WaitForSignedOutAsync();
        });
    }

    public Task InitializeAsync()
    {
        InstallPlaywright();
        return Task.CompletedTask;
    }

    public Task DisposeAsync() => Task.CompletedTask;

    private static string JsonResponseFile(string name)
        => Path.Combine(".", "Responses", $"{name}.json");

    private static void InstallPlaywright()
    {
        int exitCode = Microsoft.Playwright.Program.Main(["install"]);

        if (exitCode != 0)
        {
            throw new InvalidOperationException($"Playwright exited with code {exitCode}");
        }
    }

    private static async Task ConfigureMocksAsync(IPage page)
    {
        const string GitHubApi = "https://api.github.com";
        const string GitHubData = "https://raw.githubusercontent.com";
        const string Owner = "martincostello";

        await ConfigureUserAsync(page);
        await ConfigureRepoAsync(page, "benchmarks-demo", ["main"]);
        await ConfigureRepoAsync(page, "website", ["main", "dev"]);

        static async Task ConfigureRepoAsync(IPage page, string repo, string[] branches)
        {
            await page.RouteAsync($"{GitHubApi}/repos/{Owner}/{repo}", async (route) =>
            {
                await route.FulfillAsync(new()
                {
                    Path = JsonResponseFile($"{repo}-repo"),
                });
            });

            await page.RouteAsync($"{GitHubApi}/repos/{Owner}/{repo}/branches", async (route) =>
            {
                await route.FulfillAsync(new()
                {
                    Path = JsonResponseFile($"{repo}-branches"),
                });
            });

            foreach (var branch in branches)
            {
                await page.RouteAsync($"{GitHubData}/{Owner}/benchmarks/{branch}/{repo}/data.json", async (route) =>
                {
                    await route.FulfillAsync(new()
                    {
                        Path = JsonResponseFile($"{repo}-{branch}"),
                    });
                });
            }
        }

        static async Task ConfigureUserAsync(IPage page)
        {
            await page.RouteAsync($"{GitHubApi}/user", async (route) =>
            {
                const string Authorization = "authorization";

                route.Request.Headers.ShouldContainKey(Authorization);
                var token = route.Request.Headers[Authorization];

                if (token == $"token {ValidFakeToken}")
                {
                    await route.FulfillAsync(new()
                    {
                        Path = JsonResponseFile("user-valid-token"),
                        Status = 200,
                    });
                }
                else
                {
                    await route.FulfillAsync(new()
                    {
                        Path = JsonResponseFile("user-invalid-token"),
                        Status = 401,
                    });
                }
            });
        }
    }
}
