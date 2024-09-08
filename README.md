# Benchmarks

Repository for storing benchmark results from my repositories using [BenchmarkDotNet][benchmarkdotnet]
and [martincostello/benchmarkdotnet-results-publisher][benchmarkdotnet-results-publisher].

A site for visualising the continuous benchmark results can be found [here][site].

## How It Works

The process for publishing and visualising the benchmark results is as follows:

1. A repository is configured to run benchmarks using [BenchmarkDotNet][benchmarkdotnet] using GitHub
   Actions ([example][run-benchmarks]).
2. The results of the benchmarks [are published][publish-results] to a GitHub repository as a JSON file
   using the [benchmarkdotnet-results-publisher][benchmarkdotnet-results-publisher] action.
3. The results are then available to view as a time series [in this GitHub Pages site][site] ([example][results]).

[benchmarkdotnet]: https://github.com/dotnet/BenchmarkDotNet
[benchmarkdotnet-results-publisher]: https://github.com/martincostello/benchmarkdotnet-results-publisher
[publish-results]: https://github.com/martincostello/benchmarks-demo/blob/809002089cebef0f3a51d63700bd46a3face4acb/.github/workflows/benchmark.yml#L59-L66
[results]: https://benchmarks.martincostello.com/?repo=benchmarks-demo&branch=main#DotNetBenchmarks.IndexOfAnyBenchmarks
[run-benchmarks]: https://github.com/martincostello/benchmarks-demo/blob/809002089cebef0f3a51d63700bd46a3face4acb/.github/workflows/benchmark.yml#L40-L42
[site]: https://benchmarks.martincostello.com
