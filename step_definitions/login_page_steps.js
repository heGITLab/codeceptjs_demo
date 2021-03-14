const { I, loginPage } = inject();

// Verify successfull login
Given('User navigate to login page', () => {
  loginPage.navigateToLoginPage();
});

When('User enter username {string} and password {string}', (username, password) => {
  loginPage.enterUserName(username);
  I.wait(1);
  loginPage.enterPassword(password);
});

When('User click on the login button', () => {
  I.wait(1);
  loginPage.clickLoginButton();
});

Then('User verify the inventory url {string}', async (expectedUrl) => {
  I.wait(2);
  let actualUrl = await loginPage.getCurrentPage();
  I.assertStringIncludes(actualUrl, expectedUrl, 'Expected url not present');
});

// Verify unsuccessfull login
Given('User should navigate to login page', () => {
  loginPage.navigateToLoginPage();
});

When('User should enter username {string} and password {string}', (username, password) => {
  loginPage.enterUserName(username);
  I.wait(1);
  loginPage.enterPassword(password);
});

When('User should click on the login button', () => {
  I.wait(1);
  loginPage.clickLoginButton();
});

Then('System should display an error message as {string}', async (expectedErrorMsg) => {
  I.wait(2);
  let actualErrorMsg = await loginPage.getErrorMsg();
  I.assertStringIncludes(actualErrorMsg, expectedErrorMsg, 'Username and/or password is invalid');
});