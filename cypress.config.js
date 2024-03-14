const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('cypress-fail-fast/plugin')(on, config)
    },
    env: {
      // if even a single test fails, we want to skip
      // the rest of all tests and specs on this machine
    },
  },
})
