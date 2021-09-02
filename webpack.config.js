const path = require('path');

// client - everything that webpack bundles up

module.exports = {
  entry: path.resolve('client/index.jsx'),
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
    publicPath: '/build',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          // options: {
          //   plugins: function () { // postcss plugins, can be exported to postcss.config.js
          //     return [
          //       require('autoprefixer')
          //     ];
          //   }
          // },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      }],
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/client'),
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
      },
    },
  },
};
