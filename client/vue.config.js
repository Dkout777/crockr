// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line global-require
        implementation: require('sass'), // This line must in sass option
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: '0.0.0.0:8080',
  },
  publicPath: '/',
};
