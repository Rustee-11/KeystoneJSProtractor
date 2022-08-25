import{After,Before, Status} from "cucumber";
import { browser } from "protractor";
import logger from "../Utilities/logger";

var {setDefaultTimeout} = require('cucumber'); 
setDefaultTimeout(60 * 1000);
import fs from 'fs';

Before({tags:"@Nonangular"},async(scenario)=>{
  fs.writeFile('./report/webapp.log', '', function(){logger.info("cleared the Auto_webapp log file")});
  let name:string = scenario.pickle.name;
    await browser.waitForAngularEnabled(false);
    await browser.manage().deleteAllCookies();
    await browser.manage().window().maximize();
    logger.info("*******STARTED EXECUTION FOR SCENARIO "+name+"**********");
})

Before({tags:"@Nonangulartest"},async()=>{
  await browser.waitForAngularEnabled(false);
  await browser.manage().deleteAllCookies();
  await browser.manage().window().maximize();
  console.log("execution STARTED");

})


Before(async()=>{
  await browser.manage().deleteAllCookies();
  await browser.manage().window().maximize();
  console.log("execution STARTED");

})

After({timeout: 60 * 1000},async function (scenario){
  let name:string = scenario.pickle.name;
  logger.info("*******COMPLETED EXECUTION FOR SCENARIO "+name+"**********");
    if (scenario.result.status === Status.FAILED){
       const screenshot= await browser.takeScreenshot();    
       this.attach(screenshot,"image/png");
       } else if(scenario.result.status === Status.PASSED){
         const screenshot= await browser.takeScreenshot();
         this.attach(screenshot,"image/png");
       }
       const file = fs.readFileSync('./report/webapp.log'); 
       this.attach(file,"text/plain");
      })

After({tags:"@test"},async function (scenario){
  if (scenario.result.status === Status.FAILED){
      const screenshot= await browser.takeScreenshot();    
      this.attach(screenshot,"image/png");
   
     } else if(scenario.result.status === Status.PASSED){
       const screenshot= await browser.takeScreenshot();
       this.attach(screenshot,"image/png");
     }
     console.log("execution completed");
})