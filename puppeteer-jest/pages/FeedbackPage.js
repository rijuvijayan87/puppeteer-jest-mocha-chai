import BasePage from './BasePage';

export default class FeedbackPage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/feedback.html');
  }

  async isFeedbackformDisplayed() {
    await this.checkElementExists('#name');
    await this.checkElementExists('#email');
    await this.checkElementExists('#subject');
    await this.checkElementExists('#comment');
  }

  async submitFeedback(name, email, subject, comment) {
    await this.keyInTextIntoElement('#name', name);
    await this.keyInTextIntoElement('#email', email);
    await this.keyInTextIntoElement('#subject', subject);
    await this.keyInTextIntoElement('#comment', comment);
    await this.clickOnElement('input[type="submit"]');
  }
}
