// Copyright (c) Martin Costello, 2024. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

using Microsoft.Playwright;

namespace MartinCostello.Benchmarks.Pages;

public class HomePage(IPage page) : AppPage(page)
{
    public override async Task WaitForContentAsync()
        => await Page.WaitForSelectorAsync(Selectors.Benchmarks);

    private static class Selectors
    {
        internal const string Benchmarks = "id=benchmarks";
    }
}
