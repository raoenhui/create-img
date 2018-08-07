const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'js/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
/*    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        compress: true,
        port: 9000
    }*/
};
