const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');





function toDo(){
    let time = new Date();
    let str = [
        formatTime(time.getFullYear()),
        formatTime(time.getMonth() + 1),
        formatTime(time.getDate()), 
        formatTime(time.getHours()),
        formatTime(time.getMinutes()),
        formatTime(time.getSeconds())
    ].join('')
    console.log(str)
// the giving str should be 5 seconds before the check in time 
// check in time 8/29 5:25:00 => 20220829052455
    if(str >= 20220907193000){
     clearInterval(start);
     test_case();
     test_case2();
    }


}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}


async function test_case(){

    let driver =  await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.southwest.com/air/check-in/index.html');
    await driver.findElement(By.id('comfirmationNumber')).sendKeys('32QQQ');
    await driver.findElement(By.id('passengerFirstName')).sendKeys('Xena');
    await driver.findElement(By.id('passengerLastName')).sendKeys('Parker');
   
    setTimeout(function(){
    driver.findElement(By.id('form-mixin--submit-button')).click();
    },1000)

    // await driver.findElement(By.className('air-check-in-review-results-check-in-button')).click();
    // await driver.findElement(By.className('boarding-pass-options--button-text')).click();
    // await driver.findElement(By.id('textBoardingPass')).sendKeys('7205925189');
    // await driver.findElement(By.id('textBoardingPassConfirmation')).sendKeys('7205925189');
    // await driver.findElement(By.id('form-mixin--submit-button')).click();



}

async function test_case2(){

    let driver =  await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.southwest.com/air/check-in/index.html');
    await driver.findElement(By.id('confirmationNumber')).sendKeys('32QQQ');
    await driver.findElement(By.id('passengerFirstName')).sendKeys('Young');
    await driver.findElement(By.id('passengerLastName')).sendKeys('Parker');
   
    setTimeout(function(){
    driver.findElement(By.id('form-mixin--submit-button')).click();
    // driver.findElement(By.className('actionable actionable_button actionable_large-button actionable_no-outline actionable_primary button submit-button air-check-in-review-results--check-in-button')).click();
    // driver.findElement(By.className('boarding-pass-options--button-text')).click();
    // driver.findElement(By.id('textBoardingPass')).sendKeys('7208780328');
    // driver.findElement(By.id('textBoardingPassConfirmation')).sendKeys('7208780328');
    // driver.findElement(By.id('form-mixin--submit-button')).click();
    },1000)
    // await  driver.findElement(By.id('form-mixin--submit-button')).click();
    // await  driver.findElement(By.className('actionable actionable_button actionable_large-button actionable_no-outline actionable_primary button submit-button air-check-in-review-results--check-in-button')).click();

}
let start = setInterval(toDo,1000);
start;
