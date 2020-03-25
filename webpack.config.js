const path = require("path");

module.exports = {
    mode: "development",
    
    entry: "./app.js",

    output: {
        path: path.resolve(__dirname, "build/js"),
        filename: "index.js"
    },

    devServer:{
        contentBase: './',
    },

    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                }
            }
        ]
    }

};