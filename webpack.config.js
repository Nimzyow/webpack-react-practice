const path = require("path")

module.exports = {
    //@entry point to the file to our index.js file in our 
    //src directory which is the React app entry point
    entry: path.resolve(__dirname, "src", "index.js"),
    //@output defines the location and name of the bundled
    //file for our webpack build
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}