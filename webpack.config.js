// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // Other configuration options
};
