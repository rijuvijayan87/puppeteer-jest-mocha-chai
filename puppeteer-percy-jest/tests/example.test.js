const puppeteer = require('puppeteer');
const utils = require('../libs/helpers');
const expect = require('chai').expect;

describe('My first puppeteer test', () => {
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

  it('should launch the browser', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html', {
      waitUntil: 'networkidle0'
    });
    const buttonText = await utils.getText(page, '#signin_button');
    console.log(`BUTTON TEXT : ${buttonText}`);
    await utils.click(page, '#signin_button');
    await utils.shouldNotExist(page, '#signin_button');
    //await page.waitFor(() => !document.querySelector('#signin_button'));
    //await page.waitForSelector('#signin_button', { hidden: true });
  });
});
