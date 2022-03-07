const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'light-entity-card.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    '@material/mwc-menu/mwc-menu-surface.js',
                    '@material/mwc-ripple/mwc-ripple.js',
                    '@material/mwc-list/mwc-list.js',
                    '@material/mwc-list/mwc-list-item.js',
                ].map(file => require.resolve(file)),
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
};
