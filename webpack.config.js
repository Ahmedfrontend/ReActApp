const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: ["./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
                attrs: [':data-src']
              }
          }
        ]
      }

      
 
    ]
    
  }
  ,
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
        { from: './src/css', to: './css' },
        { from: './src/img', to: './img' },
    
      ]),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        tether: 'tether',
        Tether: 'tether',
        'window.Tether': 'tether',
        Popper: ['popper.js', 'default'],
        'window.Tether': 'tether',
        Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
        Button: 'exports-loader?Button!bootstrap/js/dist/button',
        Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
        Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
        Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
        Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
        Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
        Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
        Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
        Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        Util: 'exports-loader?Util!bootstrap/js/dist/util'
      })

  ]
};