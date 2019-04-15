const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'light-entity-card.js',
        path: path.resolve(__dirname, '../')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    /node_modules(?:\/|\\)lit-element|lit-html/
                ],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
};
