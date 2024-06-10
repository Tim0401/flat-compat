```
pm2 install typescript
```

```
npx pm2 start index.ts --watch --no-daemon
npx nodemon index.ts
```

```
node --watch index.mjs
```

```
tsc index.ts --watch
node --watch index.js
```

https://github.com/sharkdp/hyperfine?tab=readme-ov-file
```
node ➜ /workspaces/flat-compat (main) $ hyperfine --warmup 3  "node --run hello"
Benchmark 1: node --run hello
  Time (mean ± σ):       2.0 ms ±   0.6 ms    [User: 1.0 ms, System: 0.9 ms]
  Range (min … max):     1.6 ms …  13.5 ms    985 runs
 
  Warning: Command took less than 5 ms to complete. Note that the results might be inaccurate because hyperfine can not calibrate the shell startup time much more precise than this limit. You can try to use the `-N`/`--shell=none` option to disable the shell completely.
  Warning: Statistical outliers were detected. Consider re-running this benchmark on a quiet system without any interferences from other programs. It might help to use the '--warmup' or '--prepare' options.
 
node ➜ /workspaces/flat-compat (main) $ hyperfine --warmup 3  "npm run hello"
Benchmark 1: npm run hello
  Time (mean ± σ):      73.9 ms ±   2.2 ms    [User: 68.2 ms, System: 12.1 ms]
  Range (min … max):    70.8 ms …  82.9 ms    40 runs
```