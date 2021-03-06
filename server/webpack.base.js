const path = require('path');

module.exports = {
  // Tell webpack to run babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 version'] } }]
          ]
        }
      }
    ]
  }
};
