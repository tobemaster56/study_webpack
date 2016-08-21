/**
 * Created by lian.jing on 2016/8/15.
 */
module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 9090
    },
    module: {
        loaders: [
            {
                loader: "json",
                test: /\.json$/
            }
        ]
    }
};