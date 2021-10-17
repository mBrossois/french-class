// const cypressNuxt = require("cypress-nuxt");
//
// module.exports = async (on, config) => { // make sure to include "async"!
//   on("file:preprocessor", await cypressNuxt.plugin()); // make sure to include "await"!
//
//   // other plugins...
//   return config;
// };

const { startDevServer } = require('cypress/index')
const webpackConfig = require('nuxt/webpack.config.js')

module.exports = (on, config) => {
  on('dev-server:start', options =>
    startDevServer({
      options,
      webpackConfig
    })
  )

  return config
}
