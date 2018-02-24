'use strict';

var path = require('path');
var partial = require('webpack-partial').default;

var ROOT = process.cwd();
var SRC = path.join(ROOT, 'src');

module.exports = function (config) {
    return partial(config, {
        module: {
            loaders: [
                {test: /\.json$/, loader: 'json-loader'},
                {
                    test: /\.js/,
                    include: [SRC],
                    /*
                     * Use require.resolve to get a deterministic path
                     * and avoid webpack's magick loader resolution
                     */
                    loader: require.resolve('babel-loader')
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                }
            ]
        },
        alias: {
          'react-dates/lib/css/_datepicker.css': path.join(ROOT, 'node_modules', 'react-dates/lib/css/_datepicker.css')
        }
    });
};
