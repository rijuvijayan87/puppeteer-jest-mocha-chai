const puppeteer = require('puppeteer');
const utils = require('../../libs/helpers');
const expect = require('chai').expect;

describe('Feedback page', () => {
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

  it('Displayed feedback form', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html', {
      waitUntil: 'networkidle0'
    });
    await utils.click(page, '#feedback');
    await utils.shouldExist(page, '#feedback-title');
  });

  it('Submit feedback form', async () => {
    await utils.typeText(page, '#name', 'test');
    await utils.typeText(page, '#email', 'test@gmail.com');
    await utils.typeText(page, '#subject', 'testing description');
    await utils.typeText(page, '#comment', 'type your questions here');
    await utils.click(page, 'input[type="submit"]');
    await utils.shouldExist(page, '.page-header');
  });

  it('Display Result page', async () => {
    const url = await page.url();
    expect(url).to.include('/sendFeedback.html');
  });
});
