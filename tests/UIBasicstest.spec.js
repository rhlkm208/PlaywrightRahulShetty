const {test, expect}= require('@playwright/test');

// Fixtures are nothing but a global varible which are available accross the project.

test('Browser Context Playwright test', async ({browser})=>
{

   const context = await browser.newContext();
   const page = await context.newPage();

   const userName = page.locator('#username');
   const signIn = page.locator("#signInBtn");
   const cardtTitles = page.locator(".card-body a");


   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());

   await page.locator('#username').fill("rahulkumar");
   await page.locator("[type='password']").fill("Learning@830$3mK2");
   await signIn.click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');

   await userName.fill(""); // this will wiped out the data from textbox
   await userName.fill("rahulshettyacademy");
   await signIn.click();
 //  console.log(await cardtTitles.first().textContent());
 //  console.log(await cardtTitles.nth(1).textContent());
   const allTitles = await cardtTitles.allTextContents();
   console.log(allTitles);


});

test('Page Playwright test', async ({page})=>
{
   await page.goto("https://google.com");
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");   

});

test('UI Controls', async ({ page }) => {
  // Step 1: Navigate to the page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Step 2: Define locators
  const userName = page.locator('#username');
  const signIn = page.locator('#signInBtn');
  const dropdown = page.locator('select.form-control');
  const radioButtons = page.locator('.radiotextsty');
  const okayBtn = page.locator('#okayBtn');
  const terms = page.locator("#terms");

  // Step 3: Interact with dropdown
  await dropdown.selectOption('consult');
  await expect(dropdown).toHaveValue('consult'); // Assertion

  // Step 4: Select last radio button
  await radioButtons.last().click();
  console.log(await radioButtons.last().isChecked());
  await expect(radioButtons.last()).toBeChecked(); // Assertion

  // Step 5: Click OK button
  await okayBtn.click();

  // Step 6: Verify that the popup disappears (example check)
  await expect(okayBtn).toBeHidden();

  await terms.click();
  await expect (terms).toBeChecked();
  await terms.uncheck();
  expect(await terms.isChecked()).toBeFalsy();

 // await expect(document)

  // Step 7: Pause for debugging (optional)
 // await page.pause();
});


test('Child window handle', async ({ browser }) => {
  
   const context = await browser.newContext();
   const page = await context.newPage();
   const userName = page.locator('#username');
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const documentLink = page.locator("[href*='documents-request']");
   
   const [newPage] = await Promise.all(
[
   context.waitForEvent('page'), //listen for any new page pending,rejected,fulfilled
   documentLink.click(),
]) // new page is opened

const text = await newPage.locator(".red").textContent();
const arrayText = text.split("@");
const domain = arrayText[1].split(" ")[0]
// console.log(domain);
await page.locator("#username").fill(domain);
console.log(await page.locator("#username").inputValue());



})
