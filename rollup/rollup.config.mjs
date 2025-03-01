import { nodeResolve } from '@rollup/plugin-node-resolve';
import styles from "rollup-plugin-styles";
import image from '@rollup/plugin-image';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: './index.js',
    output: {
        file: './dist/build.js',
        format: 'cjs'
    },
    plugins: [
        nodeResolve(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env'],
        }),
        styles(),
        image(),
        serve({
            port: 3000,
        }),
        livereload(),
    ],
}