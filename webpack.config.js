const path = require('path');

const webpack = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.bundled.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
        ]
    }
}

module.exports = webpack;