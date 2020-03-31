const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('Visual regression testing', () => {
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

  test('Full Page Snapshot ', async () => {
    await page.goto('https://example.com');
    await page.waitForSelector('h1');
    const pageScreenshot = await page.screenshot();
    expect(pageScreenshot).toMatchImageSnapshot({
      failureThresholdType: 'pixel',
      failureThreshold: 500
    });
  });

  test('Single element snapshot', async () => {
    await page.goto('https://example.com');
    const h1 = await page.waitForSelector('h1');
    const h1Screenshot = await h1.screenshot();
    expect(h1Screenshot).toMatchImageSnapshot({
      failureThresholdType: 'percent',
      failureThreshold: 0.01
    });
  });

  test('Mobile snapshot ', async () => {
    await page.goto('https://example.com');
    await page.waitForSelector('h1');
    await page.emulate(puppeteer.devices['iPhone X']);
    const mobileScreenShot = await page.screenshot();
    expect(mobileScreenShot).toMatchImageSnapshot({
      failureThresholdType: 'percent',
      failureThreshold: 0.01
    });
  });

  test('Table snapshot ', async () => {
    await page.goto('https://example.com');
    await page.waitForSelector('h1');
    await page.emulate(puppeteer.devices['iPad landscape']);
    const mobileScreenShot = await page.screenshot();
    expect(mobileScreenShot).toMatchImageSnapshot({
      failureThresholdType: 'percent',
      failureThreshold: 0.01
    });
  });

  test('Remove element before taking snapshot ', async () => {
    await page.goto('https://example.com');
    // await page.evaluate(() => {
    //   (document.querySelectorAll('h1') || []).forEach(element =>
    //     element.remove()
    //   );
    // });
    await page.$eval('h1', element => element.remove());
    const pageScreenshot = await page.screenshot();
    expect(pageScreenshot).toMatchImageSnapshot({
      failureThresholdType: 'percent',
      failureThreshold: 0.01
    });
  });
});
