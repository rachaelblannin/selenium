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