const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractCssPlugin = require("extract-css-chunks-webpack-plugin");

const dev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: {
        main: path.join(__dirname, './src/index.tsx')
    },
    resolve: {
        alias: {
            'react': 'preact/compat',
            'react-dom': 'preact/compat'
        },
        extensions: [
            '.ts', '.tsx', '.js', '.jsx', '.css',
            '.json'
        ]
    },
    output: {
        filename: 'assets/js/[name].[contenthash:8].js',
        path: path.join(__dirname, './build'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: ExtractCssPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: false,
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                // Note: Add more postcss stuff here
                                return [
                                    require('autoprefixer')
                                ];
                            },
                            sourceMap: true,
                        }
                    },
                ],
            },
            {
                // Note: We inline the file that is smaller than 8kB 
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    fallback: 'file-loader',
                },
            }
        ],
    },
    plugins: ([
        new webpack.DefinePlugin({
            __DEV__: dev
        }),
        new ExtractCssPlugin({
            filename: `assets/styles/[name].[contenthash:8].css`,
            chunkFilename: `assets/styles/[name].[contenthash:8].css`
        }),
        new HTMLWebpackPlugin({
            template: './src/template.ejs',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                minifyJS: true,
                removeComments: true,
            },
        }),
        new CopyWebpackPlugin([
            {
                from: './src/static/**/*',
                to: './'
            },
        ]),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [
                '!favicon.ico',
                '!robots.txt',
                '!asset/**/*'
            ]
        })
    ]).concat(dev ? [] : [
        new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })
    ]),
    optimization: {
        minimize: !dev,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
};
