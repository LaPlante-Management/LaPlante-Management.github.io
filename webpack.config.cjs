const path = require('path');

module.exports = {
  entry: 'assets/js/script.min.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};