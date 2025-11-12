# @rsbuild/plugin-css-minimizer

An Rsbuild to customize the CSS minimizer, switch to [cssnano](https://github.com/cssnano/cssnano) or other tools for CSS compression.

`@rsbuild/plugin-css-minimizer` internally integrates [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin).

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-css-minimizer">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-css-minimizer?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/@rsbuild/plugin-css-minimizer?minimal=true"><img src="https://img.shields.io/npm/dm/@rsbuild/plugin-css-minimizer.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-css-minimizer -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginCssMinimizer } from "@rsbuild/plugin-css-minimizer";

export default {
  plugins: [pluginCssMinimizer()],
};
```

## Options

### pluginOptions

Used to customize the options of css-minimizer-webpack-plugin.

The value of `pluginOptions` will be merged with the default options inside the plugin using `Object.assign` and then passed to the css-minimizer-webpack-plugin. You can refer to the [README documentation](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) of css-minimizer-webpack-plugin to explore all available options.

- **Type:** `Object | Function | undefined`
- **Default:**

```ts
const defaultOptions = {
  minify: CssMinimizerWebpackPlugin.cssnanoMinify,
  minimizerOptions: {
    preset: [
      "default",
      {
        mergeLonghand: false,
      },
    ],
  },
};
```

- **Example 1:** modify the `preset` configuration of [cssnano](https://github.com/cssnano/cssnano).

```js
pluginCssMinimizer({
  pluginOptions: {
    minimizerOptions: {
      preset: require.resolve("cssnano-preset-simple"),
    },
  },
});
```

- **Example 2:** pass a function to modify the default options.

```js
pluginCssMinimizer({
  pluginOptions: (options) => {
    options.minimizerOptions = {
      preset: require.resolve("cssnano-preset-simple"),
    };
  },
});
```

- **Example 3:** Switch to other tools for CSS minification.

```js
import {
  pluginCssMinimizer,
  CssMinimizerWebpackPlugin,
} from '@rsbuild/plugin-css-minimizer';

pluginCssMinimizer({
  pluginOptions: {
    minify: CssMinimizerWebpackPlugin.cleanCssMinify,
    minimizerOptions: {
      level: {
        1: {
          roundingPrecision: "all=3,px=5",
        },
      },
    },
  },
}),
```

## License

[MIT](./LICENSE).
