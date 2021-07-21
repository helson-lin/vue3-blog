const config = require('./dev.config')

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
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
    config.resolve.alias.set('#', resolve('public'));
    config.resolve.alias.set('@', resolve('src'));
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 100000 }));
  },
  css: {
    loaderOptions: {
        sass: {
            data: `
                @import "@/assets/css/global.scss";
            `,
        },
    },
  },
}