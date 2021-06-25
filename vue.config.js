const config = require('./dev.config')
//const path = require('path')
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    proxy: {},
    ...config.devServer,
    open: true, //运行打开浏览器
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 100000 }))
  }
}