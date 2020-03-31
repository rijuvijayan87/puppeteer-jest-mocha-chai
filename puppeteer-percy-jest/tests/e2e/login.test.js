const puppeteer = require('puppeteer');
const utils = require('../../libs/helpers');
const expect = require('chai').expect;

describe('Login test', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 0,
      devtools: false
    });
    page = await browser.newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(200000);
  });

  after(async () => {
    await browser.close();
  });

  it('Login test - invalid credentials', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html', {
      waitUntil: 'networkidle0'
    });
    await utils.click(page, '#signin_button');
    await utils.typeText(page, '#user_login', 'invalid');
    await utils.typeText(page, '#user_password', 'invalid');
    await utils.click(page, 'input[type="submit"]');
    await utils.shouldExist(page, '.alert-error');
    await utils.takeScreenshot(page, 'invalid login');
  });

  it('Login test - valid credentials', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html', {
      waitUntil: 'networkidle0'
    });
    await utils.click(page, '#signin_button');
    await utils.typeText(page, '#user_login', 'username');
    await utils.typeText(page, '#user_password', 'password');
    await utils.click(page, 'input[type="submit"]');
    await utils.shouldExist(page, '#account_summary_tab');
    await utils.takeScreenshot(page, 'valid login');
  });
});
