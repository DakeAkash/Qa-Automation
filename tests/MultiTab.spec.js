const {test,expect,chromium}=require('@playwright/test');
test('MultiWindowHandle',async({})=>{
    const browse=await chromium.launch();
    const context=await browse.newContext();
    const page1=await context.newPage();
    await page1.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=676742245123&hvpos=&hvnetw=g&hvrand=7615585495136974503&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061749&hvtargid=kwd-10573980&hydadcr=14453_2367553&gad_source=1");
    await expect(page1).toHaveURL("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=676742245123&hvpos=&hvnetw=g&hvrand=7615585495136974503&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061749&hvtargid=kwd-10573980&hydadcr=14453_2367553&gad_source=1");
    
    const pagePromise=context.waitForEvent('page');
    await page1.locator('//*[@id="twotabsearchtextbox"]').fill('Dell Laptop');
    await page1.locator('//*[@id="nav-search-submit-button"]').click();
    await page1.locator("//*[@id='search']/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[1]/div/div[2]/div/span/a/div/img").click();
    await page1.waitForTimeout(4000);
    
})