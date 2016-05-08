var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index"
    },
    output: {
        path: path.join(__dirname, "public/rankings"),
        publicPath: './rankings/',
        filename: "[hash].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                IS_IN_WEBPACK: true,
                NODE_ENV: '"production"'
            }
        })
    ],
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.js$/, loaders: ["react-hot", "babel"], include: path.join(__dirname, "src") }
        ]
    }
};
