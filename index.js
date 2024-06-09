const {Builder, By, Key, promise}= require("selenium-webdriver");
const express=require('express');
const axios =require('axios');
const {trendings}  = require('./db')
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

app.get('/', async(req, res) =>{

    let allTrendings=[];
    let ip="";
async function twitter(){

    //launching the browser
    let driver=await new Builder().forBrowser('chrome').build();

    //navigating to twitter
    await driver.get('https://x.com/i/flow/login');

   
async function delay(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res();
        }, 50000);
    })
}

await delay();
const title=await driver.executeScript('return document.title;');

async function trending(){
if(title==='Home / X'){
    let trendingTopics = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/div/section/div/div/div[3]/div/div/div/div[2]/div[1]'));
      const firstTrending=await trendingTopics.getText();

      
          
        allTrendings.push(firstTrending);
        let secondTrending=await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/div/section/div/div/div[4]/div/div/div/div[2]')).getText();
        let thirdTrending=await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/div/section/div/div/div[5]/div/div/div/div[2]')).getText();
        let fourthTrending=await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/div/section/div/div/div[6]/div/div/div/div[2]')).getText();
        let fifthTrending=await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/div/section/div/div/div[7]/div/div/div/div[2]')).getText();
        allTrendings.push(secondTrending)
        allTrendings.push(thirdTrending)
        allTrendings.push(fourthTrending)
        allTrendings.push(fifthTrending)
        console.log(allTrendings);
}
}
await trending();
await driver.quit();
}


async function getPublicIP() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        const publicIP = response.data.ip;
        ip=publicIP;
        console.log('Your public IP address is:', publicIP);
    } catch (error) {
        console.error('Error getting public IP address:', error);
    }
}

 await getPublicIP();
await twitter();

try{
const insertedData=await trendings.create({
    trendingList : allTrendings,
    ip_address : ip,
    date : new Date()

})

return res.json({
    id : insertedData._id,
    trendings : allTrendings,
    publicIP : ip,
    Date : new Date()
    
})


}
catch(e){
    console.log('error while inserting data');
}




});


app.listen(3000, ()=>{
    console.log('server started at 3000');
})


//     async function userInput(){
        
//     await new Promise(async (res)=>{
        
//         setTimeout(async()=>{
//             await driver.findElement(By.css('input[type="text" i]')).sendKeys('gauravjdh2021@gmail.com', Key.RETURN);
            

//             res();
//         }, 10000)
//     })
// }
// await userInput();

// async function passwordInput(){
   
//     await new Promise((res)=>{
//         setTimeout(async()=>{
//             await driver.findElement(By.css('input[type="password" i]')).sendKeys('gaurav@2002S', Key.RETURN);
//             res();
//         }, 10000)
//     })
// }
// await passwordInput();