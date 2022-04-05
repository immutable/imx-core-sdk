import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';
import path from 'path';

const moduleName = pkg.name.replace(/^@.*\//, '');
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        sourcemapFile: pkg.module + '.map',
        banner,
        exports: 'named',
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        sourcemapFile: pkg.main + '.map',
        banner,
        exports: 'named',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      json(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      commonjs({
        namedExports: {
          elliptic: ['ec', 'curves'],
        },
      }),
      babel({
        presets: [],
        extensions: [...DEFAULT_EXTENSIONS, '.ts'],
        configFile: path.resolve(__dirname, 'babel.config'),
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
];
