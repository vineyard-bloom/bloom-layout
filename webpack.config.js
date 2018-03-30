const autoprefixer = require('autoprefixer')
const path = require('path')
const BUILD_DIR = path.join(__dirname, '/')
const APP_DIR = path.join(__dirname, '/src/')
const webpack = require('webpack')

module.exports = {
  entry: APP_DIR + 'index.js',
  output: {
    filename: 'index.js',
    path: BUILD_DIR,
    library: 'bloom-layout',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
        query: {
          presets: ['react', 'env'],
          'plugins': [
            'transform-object-rest-spread',
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [autoprefixer]
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      },
      sourceMap: {
        url: 'inline'
      }
    })
  ],

  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.webpack.js', '.web.js', '.jsx', '.js', '.html', '.scss']
  }
}