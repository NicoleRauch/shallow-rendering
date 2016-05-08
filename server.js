var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

// settings for local dev server
var localPort = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(localPort, "0.0.0.0", function (err) {
        if (err) {
            console.log(err);
        }

        console.log("Listening at localhost:" + localPort);
    });
