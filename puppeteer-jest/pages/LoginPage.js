import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  async isLoginFormDisplayed() {
    await this.clickOnElement('#signin_button');
    await this.checkElementExists('#login_form');
    await this.checkElementExists('#user_login');
    await this.checkElementExists('#user_password');
  }

  async login(user, password) {
    await this.keyInTextIntoElement('#user_login', user);
    await this.keyInTextIntoElement('#user_password', password);
    await this.clickOnElement('.btn-primary');
  }
}
