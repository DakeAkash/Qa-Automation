const {test,expect}=require('@playwright/test');

test('RegisterPage',async({page})=>{
    await page.goto("https://www.facebook.com/signup");

    

})