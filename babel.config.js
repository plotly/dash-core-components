const presets = [
    ['@babel/env', {
        useBuiltIns: 'usage',
        corejs: 3
    }],
    '@babel/preset-react'
];

const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    "styled-jsx/babel"
];

module.exports = { presets, plugins };
