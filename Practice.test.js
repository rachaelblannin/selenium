require("chromedriver"); 
const { Builder, By, Key, until } = require("selenium-webdriver");

const { expect } = require("chai");

describe("selenium tests", function () {
  this.timeout(30_000);


/* it("should find a dress", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("https://www.automationpractice.com/index.php");
      const search = await driver.findElement(By.id("search_query_top"));
      await search.sendKeys("Printed Summer Dress");
    } finally{
       await driver.quit(); 
    }
}); 
}) */

it("3.2", async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000/testing/ex1");
    const search= await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
    await search.sendKeys("2", Key.ENTER);
      const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("3.2");
    } finally {
      await driver.quit();
    }
})})