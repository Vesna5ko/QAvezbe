const { chromium } = require('playwright') ;

 (async() =>{
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 300 });
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');
    //value
      await dropdown.selectOption({ value: '1'});
     
    //label
      await dropdown.selectOption({ label: 'Option 2'});
      
    //index
    await dropdown.selectOption({ index: 1 });
    //values inside
    const aveilableOptions =await dropdown.$$('option');
    
   for(let i=0; i < aveilableOptions.length; i++){
      console.log(await aveilableOptions[i].innerText());
   }
    await browser.close();
 
})(); 