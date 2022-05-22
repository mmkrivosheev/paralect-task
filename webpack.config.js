const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: filename("js")
    },
    devServer: {
        host: "192.168.0.100",
        port: 3000
    },
    optimization: {
        minimizer: isProd ?
            [
                new OptimizeCssAssetWebpackPlugin(),
                new TerserWebpackPlugin()
            ] :
            []
    },
    resolve: { extensions: [".js", ".jsx"] },
    devtool: isDev ? "source-map" : false,
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename("css")
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|png|svg)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            }
        ]
    }
};