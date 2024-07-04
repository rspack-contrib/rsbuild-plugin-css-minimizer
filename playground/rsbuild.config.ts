import { defineConfig } from '@rsbuild/core';
import { pluginCssMinimizer } from '../src';

export default defineConfig({
	plugins: [pluginCssMinimizer()],
});
