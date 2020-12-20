const path = require("path")
const webpack = require("webpack")

module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    //@entry point to the file to our index.js file in our 
    //src directory which is the React app entry point
    entry: path.resolve(__dirname, "src", "index.js"),
    //@output defines the location and name of the bundled
    //file for our webpack build
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        clientLogLevel: "silent",
        port: 9000,
        hot: true
      },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            "targets": "defaults"
                        }],
                        "@babel/preset-react"
                    ]
                }
            }]
        }]
    }
}