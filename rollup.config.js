const resolve = require('@rollup/plugin-node-resolve') // 处理npm包的相关引入依赖
const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs') // 将commonJS的语法转化成ES2015 Module
const terser = require('@rollup/plugin-terser') // 代码压缩
const del = require('rollup-plugin-delete')

module.exports = [{
    input: './src/index.ts',
    output: [{
            dir: 'lib',
            format: 'cjs',
            entryFileNames: '[name].cjs.js',
            sourcemap: true, // 是否输出sourcemap
        },
        {
            dir: 'lib',
            format: 'esm',
            entryFileNames: '[name].esm.js',
            sourcemap: true, // 是否输出sourcemap
        },
        {
            dir: 'lib',
            format: 'umd',
            entryFileNames: '[name].umd.js',
            name: 'Umob', // umd模块名称，自动挂载至window
            sourcemap: true,
            plugins: [terser()],
        },
    ],
    plugins: [
        del({
            targets: 'lib/*'
        }),
        resolve(),
        commonjs(),
        typescript({
            module: 'ESNext'
        }),
    ],
}, ]