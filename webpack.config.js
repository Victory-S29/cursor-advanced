const path = require('path');

module.exports = {
  entry: './hw15/script.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 
          "style-loader", 
          "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};