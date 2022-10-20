require("chromedriver"); 
const { Builder, By, Key, until } = require("selenium-webdriver");

const { expect } = require("chai");

describe("selenium tests", function () {
  this.timeout(30_000);


it("should find a dress", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("https://www.automationpractice.com/index.php");
      const search = await driver.findElement(By.id("search_query_top"));
      await search.sendKeys("Printed Summer Dress");
    } finally{
       await driver.quit(); 
    }
}); 
})

await driver.findElement(By.css("#main-content > form > div > div > div > button")).click();
      const result = await driver.findElement(By.css("#main-content > div.ssrcss-1v7bxtk-StyledContainer.enjd40x0 > div > div > ul > li:nth-child(1) > div > div > div.ssrcss-tq7xfh-PromoContent.e1f5wbog7 > div.ssrcss-1f3bvyz-Stack.e1y4nx260 > a > span > p > span"));
      expect(await result.getText()).to.equal("The Man Who Made Mock Turtle Soup");
    } finally {
      await driver.quit();
    }
  })
  