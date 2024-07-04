# @rsbuild/plugin-css-minimizer

@rsbuild/plugin-css-minimizer is a Rsbuild plugin to do something.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-css-minimizer">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-css-minimizer?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
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

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginCssMinimizer({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
