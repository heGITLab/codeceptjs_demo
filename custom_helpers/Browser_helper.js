const Helper = require('@codeceptjs/helper');

class Browser_helper extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  async getCurrentUrl() {
    const helper = this.helpers['Puppeteer'];
    return helper.page.url();
  }

}

module.exports = Browser_helper;
