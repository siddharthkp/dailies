const webpack = require('webpack')
var plugin = require('./plugin')

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: { filename: 'main.js' },
  plugins: [new plugin()]
}
