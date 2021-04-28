const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import');
// const findAndReplace = require('./custom_loaders/find_and_replace')

const packagejson = require('./package.json');

const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = (env, argv) => {

    let mode;

    const overrides = module.exports || {};

    // if user specified mode flag take that value
    if (argv && argv.mode) {
        mode = argv.mode;
    }

    // else if configuration object is already set (module.exports) use that value
    else if (overrides.mode) {
        mode = overrides.mode;
    }

    // else take webpack default (production)
    else {
        mode = 'production';
    }

    let filename = (overrides.output || {}).filename;
    if (!filename) {
        const modeSuffix = mode === 'development' ? 'dev' : 'min';
        filename = `${dashLibraryName}.${modeSuffix}.js`;
    }

    const entry = overrides.entry || { main: './src/index.js' };

    const externals = ('externals' in overrides) ? overrides.externals : ({
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
    });

    return {
        mode,
        entry,
        output: {
            path: path.resolve(__dirname, dashLibraryName),
            chunkFilename: '[name].js',
            filename,
            library: dashLibraryName,
            libraryTarget: 'window',
        },
        externals,
        module: {
            noParse: /node_modules[\\\/]plotly.js/,
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.jsx?$/,
                    include: /node_modules[\\\/](react-jsx-parser|highlight[.]js)[\\\/]/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            configFile: false,
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                },

                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                insertAt: {
                                    before: '#dash_components_css'
                                }
                                // insertInto: 'head style.dash_components'
                            }
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                        // {
                        //     loader: path.resolve(__dirname, 'find_and_replace.js'),
                        // }
                        {
                            loader: 'string-replace-loader',
                            options: {
                                search: /font-weight\s*(:)\s*auto/gm,
                                replace: 'font-weight:normal',
                            }
                        },
                        // {
                        //     loader: 'string-replace-loader',
                        //     options: {
                        //         search: /border-color:\s*transparent\s*inherit\s*transparent\s*transparent\s*!important/gm,
                        //         replace: 'border-color: transparent inherit transparent transparent',
                        //     }
                        // }
                    ],
                },
                // {
                //     test: /fileInWhichJQueryIsUndefined\.js$/,
                    
                //   }
            ],
        },
        resolve: {
            alias: {
                'plotly.js': 'plotly.js/dist/plotly.min.js'
            }
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    sourceMap: true,
                    parallel: true,
                    cache: './.build_cache/terser',
                    terserOptions: {
                        warnings: false,
                        ie8: false
                    }
                })
            ],
            splitChunks: {
                name: true,
                cacheGroups: {
                    async: {
                        chunks: 'async',
                        minSize: 0,
                        name(module, chunks, cacheGroupKey) {
                            return `${cacheGroupKey}-${chunks[0].name}`;
                        }
                    },
                    shared: {
                        chunks: 'all',
                        minSize: 0,
                        minChunks: 2,
                        name: 'dash_core_components-shared'
                    }
                }
            }
        },
        plugins: [
            new WebpackDashDynamicImport(),
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map',
                exclude: ['async-plotlyjs']
            })
        ]
    }
};