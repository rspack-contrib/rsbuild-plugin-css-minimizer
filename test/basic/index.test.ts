import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, test } from '@playwright/test';
import { createRsbuild } from '@rsbuild/core';
import { pluginCssMinimizer } from '../../dist';

const __dirname = dirname(fileURLToPath(import.meta.url));

test('should minimize CSS with plugin-css-minimizer correctly', async () => {
	const rsbuild = await createRsbuild({
		cwd: __dirname,
		rsbuildConfig: {
			plugins: [pluginCssMinimizer()],
			output: {
				filenameHash: false,
			},
		},
	});
	await rsbuild.build();

	const cssFile = join(__dirname, 'dist/static/css/index.css');
	const content = readFileSync(cssFile, 'utf-8');

	expect(content).toEqual(
		'.a,.b{font-size:1.5rem;line-height:1.5;text-align:center}.b{background:#fafafa}',
	);
});
