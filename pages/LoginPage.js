const Browser_helper = require("../custom_helpers/browser_helper");

const { I } = inject();

module.exports = {

  locators: {
    tf_userName: '#user-name',
    tf_passWord: '#password',
    btn_login: '#login-button',
    label_unPwInvalid: "//h3[@data-test='error']"
  },

  navigateToLoginPage() {
    I.amOnPage('/');
  },
  enterUserName(userName) {
    I.fillField(this.locators.tf_userName, userName);
  },
  enterPassword(passWord) {
    I.fillField(this.locators.tf_passWord, passWord);
  },
  clickLoginButton() {
    I.click(this.locators.btn_login);
  },
  async getCurrentPage() {
    return I.getCurrentUrl();
  },
  async getErrorMsg() {
    return I.grabTextFrom(this.locators.label_unPwInvalid);
  }
}