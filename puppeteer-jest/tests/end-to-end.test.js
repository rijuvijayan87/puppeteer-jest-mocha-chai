import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';
import TopBar from '../pages/components/TopBar';

import { username, password, timeout } from '../tests/config';

describe('End-To-End Test', () => {
  let homePage;
  let topBar;
  let loginPage;
  let feedbackPage;

  beforeAll(async () => {
    jest.setTimeout(timeout);
    homePage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });

  it('home page should work', async () => {
    await homePage.visit();
  });

  it('navbar should be displayed', async () => {
    await homePage.isNavBarDisplayed();
    await topBar.isTopBarDisplayed();
  });

  it('Try to login', async () => {
    await loginPage.isLoginFormDisplayed();
    await loginPage.login(username, password);
  });

  it('Feedback page', async () => {
    await feedbackPage.visit();
    await feedbackPage.isFeedbackformDisplayed();
    await feedbackPage.submitFeedback(
      'Test',
      'test@gmail.com',
      'subject',
      'comment'
    );
  });
});
