const puppeteer = require('puppeteer');

describe('Device Test', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 0,
      devtools: false
    });
    const context = browser.createIncognitoBrowserContext();
    page = await (await context).newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(200000);
  });

  after(async () => {
    await browser.close();
  });

  it('Desktop device test', async () => {
    await page.setViewport({ width: 1650, height: 1050 });
    await page.goto('http://example.com');
  });

  it('Tablet device test', async () => {
    const tablet = puppeteer.devices['iPad landscape'];
    await page.emulate(tablet);
    await page.goto('http://example.com');
  });

  it('Mobile device test', async () => {
    const mobile = puppeteer.devices['iPhone X'];
    await page.emulate(mobile);
    await page.goto('http://example.com');
  });
});
