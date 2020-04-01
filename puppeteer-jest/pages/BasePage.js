export default class BasePage {
  async wait(time) {
    await page.waitFor(time);
  }

  async getTitle() {
    return await page.title();
  }

  async getUrl() {
    return await page.url();
  }

  async clickOnElement(selector) {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Error while clicking on element : ${selector}`);
    }
  }

  async keyInTextIntoElement(selector, value) {
    try {
      await page.waitForSelector(selector);
      await page.type(selector, value);
    } catch (error) {
      throw new Error(`Error while entering text into field : ${selector}`);
    }
  }

  async retrieveTextFromElement(selector) {
    try {
      await page.waitForSelector(selector);
      await page.$eval(selector, element => element.textContent);
    } catch (error) {
      throw new Error(
        `Error while getting text from element ${selector} | Error ${error}`
      );
    }
  }

  async waitForTextFromElement(selector) {
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
        `Error while waiting for text from element ${selector} | Error ${error}`
      );
    }
  }

  async checkElementNotExists(selector) {
    try {
      await page.waitForSelector(selector, { hidden: true });
    } catch (error) {
      throw new Error(
        `Error while checking element is notvisible ${selector} | Error ${error}`
      );
    }
  }

  async checkElementExists(selector) {
    try {
      await page.waitForSelector(selector, { hidden: false });
    } catch (error) {
      throw new Error(
        `Error while checking element is visible ${selector} | Error ${error}`
      );
    }
  }

  async takeScreenShot(fileName) {
    try {
      await page.screenshot({ path: 'screenshots/' + fileName + '.jpg' });
    } catch (error) {
      throw new Error(`Error while taking screenshot | Error ${error}`);
    }
  }

  async selectFromDropDown(selector, value) {
    try {
      await page.waitForSelector(selector);
      await page.select(selector, value);
    } catch (error) {
      throw new Error(
        `Error while selecting data from dropdown ${selector} | Error ${error}`
      );
    }
  }
}
