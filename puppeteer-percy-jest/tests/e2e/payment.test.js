const puppeteer = require('puppeteer');
const utils = require('../../libs/helpers');
const expect = require('chai').expect;

describe('Payment page', () => {
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

    await page.goto('http://zero.webappsecurity.com/index.html', {
      waitUntil: 'networkidle0'
    });
    await utils.click(page, '#signin_button');
    await utils.typeText(page, '#user_login', 'username');
    await utils.typeText(page, '#user_password', 'password');
    await utils.click(page, 'input[type="submit"]');
    await utils.shouldExist(page, '#account_summary_tab');
  });

  after(async () => {
    await browser.close();
  });

  it('Display payment form', async () => {
    await utils.shouldExist(page, '.nav-tabs');
    await utils.click(page, '#pay_bills_tab');
    await utils.shouldExist(page, '.board');
    await utils.selectFromDropDown(page, '#sp_payee', 'Apple');
    await utils.selectFromDropDown(page, '#sp_account', 'Loan');
    await utils.typeText(page, '#sp_amount', '500');
    await utils.typeText(page, '#sp_date', '2020-03-10');
    await page.keyboard.press('Enter');
    await utils.typeText(page, '#sp_description', 'Description');
    await utils.click(page, '#pay_saved_payees');
    await utils.shouldExist(page, '#alert_content');
    await utils.takeScreenshot(page, 'payment success');
  });

  it('Make Payment', async () => {
    //todo
  });
});
