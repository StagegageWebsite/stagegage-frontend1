

module.exports = {
    entry: "./client/app.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel'
            },
            { test: /\.less$/,
              loader: "style!css!less"
            }
        ]
    }
};
