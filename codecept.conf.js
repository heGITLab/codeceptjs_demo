exports.config = {
  output: './allure-results',
  helpers: {
    Puppeteer: {
      url: 'https://www.saucedemo.com',
      show: true,
      windowSize: '1200x900',
      // setup chrome settings
      chrome: {
        args: [
          '--start-maximized',
          'no-sandbox',
          '--headless'
        ]
      }
    },
    AssertWrapper: {
      require: "codeceptjs-assert"
    },
    BrowserHelper: {
      require: "./custom_helpers/Browser_helper.js"
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/LoginPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_page_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false
    },
    tryTo: {
      enabled: false
    },
    allure: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Tute'
}