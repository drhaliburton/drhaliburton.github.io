const TerserPlugin = require('terser-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const webpackPlugins = [new VuetifyLoaderPlugin()];

if (process.env === 'production') webpackPlugins.push(new TerserPlugin());

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: './public',
  lintOnSave: true,
  productionSourceMap: true,
  chainWebpack: () => { },
  configureWebpack: {
    plugins: webpackPlugins,
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: ['postcss-loader'],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          enforce: 'pre',
        }
      ],
    },
    devtool: 'eval',
  },
  pwa: {
    name: 'Rebecca Haliburton Portfolio',
    themeColor: '#188355',
    msTileColor: '#188355',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      importWorkboxFrom: 'local',
      include: [/\.html$/, /\.css$/, /\.js$/],
      swSrc: 'public/sw.js',
      maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
    },
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {},
    },
    modules: true,
  },

  parallel: require('os').cpus().length > 1,

  devServer: {
    open: !process.env === 'test',
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
    before: app => { },
  },

};
