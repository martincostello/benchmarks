// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using Microsoft.Playwright;

namespace MartinCostello.Benchmarks.Pages;

public class HomePage(IPage page) : AppPage(page)
{
    public override async Task WaitForContentAsync()
        => await Page.WaitForSelectorAsync(Selectors.Benchmarks);

    public async Task<string> Branch()
    {
        var element = await Page.WaitForSelectorAsync(Selectors.Branch);
        element.ShouldNotBeNull();
        return await element.InputValueAsync();
    }

    public async Task<IReadOnlyList<string>> Branches()
    {
        var element = await Page.WaitForSelectorAsync(Selectors.Branch);
        element.ShouldNotBeNull();

        var options = new List<string>();

        foreach (var item in await element.QuerySelectorAllAsync("option"))
        {
            options.Add(await item.TextContentAsync() ?? string.Empty);
        }

        return options;
    }

    public async Task<string> Repository()
    {
        var element = await Page.WaitForSelectorAsync(Selectors.Repository);
        element.ShouldNotBeNull();
        return await element.InputValueAsync();
    }

    public async Task<IReadOnlyList<string>> Repositories()
    {
        var element = await Page.WaitForSelectorAsync(Selectors.Repository);
        element.ShouldNotBeNull();

        var options = new List<string>();

        foreach (var item in await element.QuerySelectorAllAsync("option"))
        {
            options.Add(await item.TextContentAsync() ?? string.Empty);
        }

        return options;
    }

    public async Task<HomePage> WithBranch(string text)
    {
        await Page.SelectOptionAsync(Selectors.Branch, new SelectOptionValue() { Label = text });
        return this;
    }

    public async Task<HomePage> WithRepository(string text)
    {
        await Page.SelectOptionAsync(Selectors.Repository, new SelectOptionValue() { Label = text });
        return this;
    }

    private static class Selectors
    {
        internal const string Benchmarks = "id=benchmarks";
        internal const string Branch = "id=branch";
        internal const string Repository = "id=repository";
    }
}
