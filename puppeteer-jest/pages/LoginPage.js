import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  async isLoginFormDisplayed() {
    await page.click('#signin_button');
    await page.waitForSelector('#login_form');
    await page.waitForSelector('#user_login');
    await page.waitForSelector('#user_password');
  }

  async login(user, password) {
    await page.type('#user_login', user);
    await page.type('#user_password', password);
    await page.click('.btn-primary');
  }
}
