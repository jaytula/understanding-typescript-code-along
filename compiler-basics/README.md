## TypeScript Compiler

### tsconfig.js

- `exclude` option takes an array of items to exclude
- `include` option takes an array of items to include and if used with `exclude`,
`exclude` filters out what is considered by `include`
- `files` point at individual files

#### Source Maps

- `compilerOptions.sourceMap: true` acts as a bridge to see and debug the original typescript source which the browser understands. Can place breakpoints

#### rootDir and outDir

Typically `rootDir` is set to `./src` and `outDir` is set to `./dist`.  Folder structure also maintained.