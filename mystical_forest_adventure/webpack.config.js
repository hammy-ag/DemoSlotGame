const path = require('path');
const DEV_SERVER_HOST = "localhost";
const DEV_SERVER_PORT = "4040";
module.exports = {
    entry: './src/main.js',
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        https: false,
        host: DEV_SERVER_HOST,
        port: DEV_SERVER_PORT,
        open: true,
        openPage: `index.html`,
    },
    resolve: {
        modules: [path.resolve("./node_modules"), path.resolve("./src")],
        extensions: [".json", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
