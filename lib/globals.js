const extraGlobals = require("testarmada-nightwatch-extra/lib/globals");
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/reports'
});
module.exports = {
  before: function (callback) {
    extraGlobals.before.apply(this, [callback]);
  },

  after: function (callback) {
    extraGlobals.after.apply(this, [callback]);
  },

  beforeEach: function (browser, callback) {
    extraGlobals.beforeEach.apply(this, [browser, callback]);
  },

  afterEach: function (browser, callback) {
    extraGlobals.afterEach.apply(this, [browser, callback]);
  },
  reporter: reporter.fn
};