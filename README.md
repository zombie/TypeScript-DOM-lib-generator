# types-web

## How to use

1. Install the package by `npm i types-web`.
2. Include the type files in your `tsconfig.json` or `jsconfig.json`:

    ```json
    {
      "includes": [
        "node_modules/types-web/baselines/dom*"
        "*"
      ]
    }
    ```

    Or for web workers:

    ```json
    {
      "includes": [
        "node_modules/types-web/baselines/dom*"
        "*"
      ]
    }
    ```

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

## Why not `@types`?

To maintain the package by myself without waiting for external reviews.
