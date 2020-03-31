module.exports = {
  click: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(
        `Error while clicking element ${selector} | Error ${error}`
      );
    }
  },
  getText: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      const value = await page.$eval(selector, element => element.textContent);
      return value.trim();
    } catch (error) {
      throw new Error(
        `Error while getting text from element ${selector} | Error ${error}`
      );
    }
  },
  getCount: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      await page.$$eval(selector, element => element.length);
    } catch (error) {
      throw new Error(
        `Error while getting count of element ${selector} | Error ${error}`
      );
    }
  },
  typeText: async (page, selector, value) => {
    try {
      await page.waitForSelector(selector);
      await page.type(selector, value);
    } catch (error) {
      throw new Error(
        `Error while getting count of element ${selector} | Error ${error}`
      );
    }
  },
  waitForText: async (page, selector, value) => {
    try {
      await page.waitForSelector(selector);
      await page.waitForFunction((selector, value) => {
        document.querySelector(selector).innerText.includes(value),
          {},
          selector,
          value;
      });
    } catch (error) {
      throw new Error(
        `Error while waiting for text ${selector} | Error ${error}`
      );
    }
  },
  shouldNotExist: async (page, selector) => {
    try {
      await page.waitForSelector(selector, { hidden: true });
    } catch (error) {
      throw new Error(
        `Error while checking element is notvisible ${selector} | Error ${error}`
      );
    }
  },
  shouldExist: async (page, selector) => {
    try {
      await page.waitForSelector(selector, { hidden: false });
    } catch (error) {
      throw new Error(
        `Error while checking element is visible ${selector} | Error ${error}`
      );
    }
  },
  takeScreenshot: async (page, fileName) => {
    try {
      await page.screenshot({ path: 'screenshots/' + fileName + '.jpg' });
    } catch (error) {
      throw new Error(`Error while taking screenshot | Error ${error}`);
    }
  },
  selectFromDropDown: async (page, selector, value) => {
    try {
      await page.waitForSelector(selector);
      await page.select(selector, value);
    } catch (error) {
      throw new Error(
        `Error while selecting data from dropdown ${selector} | Error ${error}`
      );
    }
  }
};
