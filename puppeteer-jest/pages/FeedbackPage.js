import BasePage from './BasePage';

export default class FeedbackPage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/feedback.html');
  }

  async isFeedbackformDisplayed() {
    await this.checkElementExists(page, '#name');
    await this.checkElementExists(page, '#email');
    await this.checkElementExists(page, '#subject');
    await this.checkElementExists(page, '#comment');
  }

  async submitFeedback(name, email, subject, comment) {
    await this.keyInTextIntoElement(page, '#name', name);
    await this.keyInTextIntoElement(page, '#email', email);
    await this.keyInTextIntoElement(page, '#subject', subject);
    await this.keyInTextIntoElement(page, '#comment', comment);
    await this.clickOnElement(page, 'input[type="submit"]');
  }
}
