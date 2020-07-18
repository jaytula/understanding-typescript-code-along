const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }
};