import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  async isLoginFormDisplayed() {
    await this.clickOnElement(page, '#signin_button');
    await this.checkElementExists(page, '#login_form');
    await this.checkElementExists(page, '#user_login');
    await this.checkElementExists(page, '#user_password');
  }

  async login(user, password) {
    await this.keyInTextIntoElement(page, '#user_login', user);
    await this.keyInTextIntoElement(page, '#user_password', password);
    await this.clickOnElement(page, '.btn-primary');
  }
}
