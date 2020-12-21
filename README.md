# types-web

## How to use

1. Install the package by `npm i types-web`.
2. Include the type files in your `tsconfig.json` or `jsconfig.json`:

    ```json
    {
      "compilerOptions": {
        // Explicitly exclude "dom" here
        "lib": ["es2020"]
      },
      "includes": [
        "node_modules/types-web/baselines/dom*"
        "*"
      ]
    }
    ```

    Or for web workers:

    ```json
    {
      /* ... same ... */
      "includes": [
        "node_modules/types-web/baselines/dom*"
        "*"
      ]
    }
    ```

## How is this different from [TypeScript-DOM-lib-generator](https://github.com/microsoft/TypeScript-DOM-lib-generator/)?

`types-web` tries automating everything with a set of relevant tools to reduce the hassle of manual reviewing:

  * [`@mdn/browser-compat-data`](https://www.npmjs.com/package/@mdn/browser-compat-data) provides which features are supported by which browsers, so that undersupported features can be disabled automatically.
  * [`browser-specs`](https://www.npmjs.com/package/browser-specs) provides a full list of web specs, so that every latest feature can be covered.
  * [`webref`](https://github.com/w3c/webref) provides IDL code from the specs, so that the features can be properly typed.

But so far some things still need manual modification and that is done by files in `inputfiles/` directory.

## Why not `@types`?

To maintain the package by myself without waiting for external reviews.

## Build Instructions

* To get things setup:

    ```sh
    npm i
    ```

* To generate the `.d.ts` files

    ```sh
    npm run build && npm run baseline-accept
    ```

* To test:

    ```sh
    npm test
    ```
