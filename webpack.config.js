const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.js$/,

        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true
            }
          }
        ],
      }
    ],
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint'],
      include: [
        path.resolve(__dirname, "src"),
      ],
    }],
  }
};