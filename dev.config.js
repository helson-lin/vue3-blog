// const GATE_WAY_SERVER =  process.env.NODE_ENV === 'development' ? 'http://121.199.54.130:11050' : 'http://121.199.54.130:11050'

module.exports = {
  publicPath: "./" ,
  devServer: {
    host:"0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        },
        logLevel: 'debug'
      },
    }
  }
}