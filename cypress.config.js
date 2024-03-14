const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('cypress-fail-fast/plugin')(on, config)
    },
    env: {
      // we want to run other specs even if some tests fail
      // so our strategy is to skip the rest of the tests
      // in the current spec
      FAIL_FAST_STRATEGY: 'spec',
    },
  },
})
