import path from 'path'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'public')

export default {
  mode: 'development',
  entry: src + '/index.jsx',
  devtool: 'source-map',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: []
}