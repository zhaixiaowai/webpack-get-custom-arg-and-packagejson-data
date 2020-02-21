const path = require('path');
var webpack = require('webpack');
var fs = require("fs");


/**
 * get package.json version
 */
function getPackageVersion(){
  const pkgPath = path.join(__dirname, '../package.json');
  const pkgData = JSON.parse(fs.readFileSync(pkgPath));
  return pkgData.version;
}
 
module.exports = (env, argv) => { 
  const channel = argv.channel;
  let output_fold;
  const mode = argv.mode || "production";
  switch(channel){
    case "gamesdk":{
        output_fold = channel;
      break;
    }
    default:{
        output_fold = "default";
      break;
    }
  }
  const packVersion = getPackageVersion();
  return  {
    entry: [path.resolve(__dirname, '../src/main.js')],
    output: {
      //library: "zhaixiaowai",
      //libraryTarget: "var",
      filename: `../dist/${output_fold}/demo-${mode}.js`,
      path: path.resolve(__dirname, '')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules|bower_components/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
          _SDK_CHANNEL: JSON.stringify(channel)
        }),
        new webpack.DefinePlugin({
          _SDK_VERSION: JSON.stringify(packVersion)
        })
    ],
    resolve: {
      extensions: ['.js'],
      alias: {
      }
    },
    mode: "production"
  };
};
