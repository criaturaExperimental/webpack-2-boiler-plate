var path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  }
};
