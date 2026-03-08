import { chromium, webkit, firefox, test} from "@playwright/test"; 

test(`To launch a browser`, async ({page}) => { 

await page.goto("http://login.salesforce.com/?locale=in");

await page.locator("#username").fill("pratushajawahar@gmail.com")

await page.locator("#password").fill("pratupavan@123")

await page.locator('[id="Login"]').click()

await page.waitForTimeout(3000)

});