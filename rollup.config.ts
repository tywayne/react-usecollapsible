import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

import * as packageJson from './package.json';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.exports,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				include: ['./src/**/*'],
				exclude: ['./src/**/*.test.ts'],
			}),
			terser(),
		],
	},
	{
		input: './dist/dts/index.d.ts',
		output: [
			{
				file: 'dist/index.d.ts',
				format: 'es',
			},
		],
		plugins: [dts()],
	},
];
