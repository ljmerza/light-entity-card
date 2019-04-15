const merge = require('webpack-merge');
const commonConfig = require('./config.common');

module.exports = merge(commonConfig, {
    mode: 'development'
});