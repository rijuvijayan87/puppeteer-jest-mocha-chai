import BasePage from './BasePage';

export default class HomePage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await this.checkElementExists('#nav');
  }

  async isNavBarDisplayed() {
    await this.checkElementExists('#pages-nav');
    await this.checkElementExists('#homeMenu');
    await this.checkElementExists('#onlineBankingMenu');
    await this.checkElementExists('#feedback');
  }

  async clickHomePageLink() {
    await this.clickOnElement('#homeMenu');
  }

  async clickOnlineBankingLink() {
    await this.clickOnElement('#onlineBankingMenu');
  }

  async clickFeedbackLink() {
    await this.clickOnElement('#feedback');
  }
}
