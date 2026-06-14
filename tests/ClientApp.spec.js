const {test, expect } = require("@playwright/test");

test('RahulShetty Client APP Registration test', async({page})=>
{

    const registrationLink = page.locator("a.text-reset");
    const firstName = page.locator("#firstName");
    const lasstName = page.locator("#lastName");
    const email = page.locator("#userEmail");
    const phoneNumber = page.locator("#userMobile");
    const occupationDropdown = page.locator("select[formcontrolname='occupation']");
    const genderMale = page.locator("[value='Male']");
//    const GenderFemale = page.locator("[value='Female']");
    const password = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");
    const consentCheckbox = page.locator("[formcontrolname='required']");
    const registerButton = page.locator("#login");

    



    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await registrationLink.click();
    await firstName.fill("Rahul");
    await lasstName.fill("Kumar");
    await email.fill("rahul.kumar02@nagarro.com");
    await phoneNumber.fill("9990857122");
    await occupationDropdown.selectOption("Engineer");
    await genderMale.click();
    await password.fill("Test@123");
    await confirmPassword.fill("Test@123");
    await consentCheckbox.click();
    await registerButton.click();
    console.log(await page.title());

});

test.only('RahulShetty Client APP Login test', async({page})=>
{

    const userEmail = page.locator("#userEmail");
    const userPassword = page.locator("#userPassword");
    const loginButton = page.locator("[value='Login']");


    await page.goto("https://rahulshettyacademy.com/client/");
    await userEmail.fill("rahul.kumar02@nagarro.com");
    await userPassword.fill("Test@123");
    await loginButton.click();
    console.log(await page.title());


//    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    });