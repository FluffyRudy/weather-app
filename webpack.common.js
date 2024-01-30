const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: {
        main: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(css)$/i,
                use: ['style-loader', 'css-loader', "postcss-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        unused: true,
                        dead_code: true,
                    },
                },
            }),
        ],
    },
};
console.log(path.resolve(__dirname, 'src/assets'))