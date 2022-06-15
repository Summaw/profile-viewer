const puppeteer = require('puppeteer');
const { execSync } = require('child_process');

function sleep(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}


async function main () {
    var setTitle = require('console-title');
    setTitle(`Made by ImNotSummer | discord.gg/theolympus`);
    console.clear();
    puppeteer.launch({ headless: true, executablePath: 'C://Program Files (x86)//Google//Chrome//Application//chrome.exe'}).then(async browser => { // change this to your chrome directory :)
        console.log('Starting Login')
        var isthere;
        const page = await browser.newPage()
        await page.setViewport({ width: 1920, height: 1080});
        await page.goto('https://github.com/yourusername') //https://github.com/crackeddude
        await sleep(3000)
	browser.close();
	main();
    })
}
for (let index = 0; index < 5; index++) {
    try{
   main();
    }catch (err){
        console.log(err)
        main();
    }
}
