const path = require('path');
const env = process.env.NODE_ENV;

const isProduction = env === 'production';

module.exports = {
  entry: './src/App.js',
  mode: env,
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node-modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000']
      }
    ]
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 5000
  },
  node: {
    fs: "empty"
  },
};
