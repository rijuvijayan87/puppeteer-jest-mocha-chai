const puppeteer = require('puppeteer');
const { percySnapshot } = require('@percy/puppeteer');

describe('Percy visual test', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 0,
      devtools: false
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    browser.close();
  });

  test('Full page percy screenshot', async () => {
    await page.goto('https://example.com');
    await page.waitForSelector('h1');
    await percySnapshot(page, 'Example page');
  });
});
