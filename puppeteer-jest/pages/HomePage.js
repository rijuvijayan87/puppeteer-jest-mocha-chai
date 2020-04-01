import BasePage from './BasePage';

export default class HomePage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await this.checkElementExists(page, '#nav');
  }

  async isNavBarDisplayed() {
    await this.checkElementExists(page, '#pages-nav');
    await this.checkElementExists(page, '#homeMenu');
    await this.checkElementExists(page, '#onlineBankingMenu');
    await this.checkElementExists(page, '#feedback');
  }

  async clickHomePageLink() {
    await this.clickOnElement(page, '#homeMenu');
  }

  async clickOnlineBankingLink() {
    await this.clickOnElement(page, '#onlineBankingMenu');
  }

  async clickFeedbackLink() {
    await this.clickOnElement(page, '#feedback');
  }
}
