// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    // Welcome view on /
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home')
      .assert.containsText('h1', 'Welcome to our Awesome Multiplayer Tetris Game')

      // Navigating via buttons
      .click('#link-play')
      .assert.urlEquals(devServer + '/play')
      .url(devServer)
      .click('#link-highscore')
      .assert.urlEquals(devServer + '/highscore')

      // Highscore view on /highscore
      .url(devServer + '/highscore')
      .assert.elementPresent('.highscore')
      .assert.containsText('h1', 'Highscore')

      // Highscore view on /highscore
      .url(devServer + '/play')
      .assert.elementPresent('.playground')
      .assert.containsText('h1', 'Playground')
      .end()
  }
}
