const path = require('path');

const mwcExcludes = [
    '@material/mwc-menu/mwc-menu.js',
    '@material/mwc-menu/mwc-menu-surface.js',
    '@material/mwc-ripple/mwc-ripple.js',
    '@material/mwc-list/mwc-list.js',
    '@material/mwc-list/mwc-list-item.js',
    '@material/mwc-icon/mwc-icon.js',
    '@material/mwc-notched-outline/mwc-notched-outline.js',
].map(file => require.resolve(file));

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
                  ...mwcExcludes,
                 /node_modules\/(?!babel-runtime)/,
                ],
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
};
