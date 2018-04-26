const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const BLOOM_DIR = path.join(__dirname, '../src/')
const APP_DIR = path.join(__dirname, '/src/')
const BUILD_DIR = path.join(__dirname, '/dist/')

const baseConfig = {
  entry: {
    bundle: ['babel-polyfill', APP_DIR + 'app-root.js']
  },
  output: {
    filename: 'index-[hash].js',
    path: BUILD_DIR,
    publicPath: '/'
  },

  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/',
    contentBase: './public',
    port: 8080,
    host: '0.0.0.0',
    open: false,
    historyApiFallback: true,
    disableHostCheck: true
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2|svg)$/,
        loader: 'url-loader',
        include: [
          BLOOM_DIR,
          APP_DIR
        ],
        exclude: [path.resolve(BLOOM_DIR, 'inline-svgs')],
        options: {
          limit: 10000
        }
      },
      {
        test: /\.svg$/,
        include: [path.resolve(BLOOM_DIR, 'inline-svgs')],
        loader: 'raw-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env'],
          'plugins': [
            'transform-object-rest-spread',
            'transform-class-properties'
          ]
        },
        include: [
          BLOOM_DIR,
          APP_DIR
        ]
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
          {
            loader: 'sass-loader',
            options: {
              include: [BLOOM_DIR, APP_DIR]
            }
           }
        ],
        include: [
          BLOOM_DIR,
          APP_DIR
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: 'public/index.html' }
    ]),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],

  resolve: {
    alias: {
      'bloom-layout': BLOOM_DIR,
      components:   path.resolve(__dirname, 'src/components'),
      'inline-svgs': path.resolve(BLOOM_DIR, 'inline-svgs'),
      styles:       path.resolve(BLOOM_DIR, 'styles')
    },
    extensions: ['.jsx', '.js', '.html', '.scss']
  }
}


module.exports = baseConfig
