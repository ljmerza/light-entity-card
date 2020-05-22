const merge = require('webpack-merge');

const commonConfig = require('./config.common');


module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        minimize: true
    },
    output: {
        publicPath: '/local/'
    },
});