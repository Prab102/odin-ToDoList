// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
//   mode: 'development',
  entry: './src/index.js',
  
  output: {
   filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: { //bundling files handeling. js files can be read by webpack but the rest need to be explicitly told 
    rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'], //css files
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i, //images
         type: 'asset/resource',
       },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //font
        type: 'asset/resource',
      },
    
    ],
  },

};