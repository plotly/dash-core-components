const presets = [
    ['@babel/env', {
        useBuiltIns: 'entry',
        corejs: 3
    }],
    '@babel/preset-react'
];

const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    "styled-jsx/babel"
];

module.exports = { presets, plugins };
