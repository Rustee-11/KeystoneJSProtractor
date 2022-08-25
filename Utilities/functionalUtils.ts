import chai, { assert } from "chai";
import { browser, protractor,By, element, ElementFinder, ElementArrayFinder, by } from "protractor";
import logger from "../Utilities/logger";


let EC = protractor.ExpectedConditions;
var expect = chai.expect; 

export class functionalUtils {  

   async click(pageElement:any,timeout:number):Promise<void> {
        try{
        await browser.wait(EC.elementToBeClickable(element(pageElement)),timeout * 1000).then(async function(){
        await element(pageElement).click();
        });
        }catch(e){
            logger.error("Failed to Click Element: "+pageElement+" And Exception Occured: "+e);
            assert.fail("Failed to Click Element:"+pageElement+" And Provided SECONDS: "+timeout);
        }
    }

    async clickListUsingIndex(pageElement:any,index:number):Promise<void> {
        try{
            var timeout:number = 15;
            let ele:ElementArrayFinder = element.all(pageElement);
        await browser.wait(EC.presenceOf(ele.get(0)),timeout * 1000).then(async function(){
            for(let i = 0 ;i < await ele.count(); i++){
            if(i === index){
                ele.get(i - 1).click();
            }
        }})
        
    }catch(e){
        logger.error("Failed to Click Element: "+pageElement+" And Exception Occured: "+e);
        assert.fail("Failed to Click Element:"+pageElement+" And Provided SECONDS: "+timeout);
}
}

async setText(pageElement:any,value:string,timeout:number):Promise<void> {
        try{
        // await this.click(pageElement,timeout);
        await browser.wait(EC.elementToBeClickable(element(pageElement)),timeout * 1000).then(async function(){
        await element(pageElement).clear();
        await element(pageElement).sendKeys(value);
        });
        }catch(e){
        logger.error("Failed to Enter Text Element: "+pageElement+" And Exception Occured: "+e);
        assert.fail("Failed to Enter Text Element: "+pageElement+" And Provided SECONDS: "+timeout);
        }
    }


    async shortWait(timeout:number):Promise<void> {
        await browser.sleep(timeout * 1000).then(function(){
            logger.info("Short Wait completed for SECONDS: " + timeout);
            });
    }


    async assertUrl(url:string):Promise<void>{
        expect((await browser.getCurrentUrl())).contains(url,"Landed on Incorrect page --> "+ logger.info("Expected url: "+url+" Actual url: "+await browser.getCurrentUrl()));
        logger.info("PASSED - Validated URL - Expected: "+url+" Actual: "+ await browser.getCurrentUrl());
       }


    async waitForElementToload(pageElement:any,timeout:number):Promise<void> {
        try{
        await browser.wait(EC.presenceOf(element(pageElement)),timeout * 1000).then(function(){
        logger.info("Wait completed for Element And SEconds: "+timeout);
        });
        }catch(e){
         logger.error("Failed to Wait for Element: "+pageElement+" And Exception Occured: "+e);
        }
    }

    async getText(pageElement:any,timeout:number):Promise<string> {
        let str:string = "";
        try{
        await browser.wait(EC.presenceOf(element(pageElement)),timeout * 1000).then(async function(){
            str = (await browser.element(pageElement).getText()).trim();
        });
        }catch(e){
            logger.error("Failed to GetText Element: "+pageElement+" And Exception Occured: "+e);
            assert.fail("Failed to GetText Element: "+pageElement+" And Provided SECONDS: "+timeout);
        }
        return str;
    }


    async getTextFieldValue(pageElement:any,attributevalue:string,timeout:number):Promise<string> {
        let str:string = "";
        try{
        await browser.wait(EC.presenceOf(element(pageElement)),timeout * 1000).then(async function(){
        str = await element(pageElement).getAttribute(attributevalue);
        });
        }catch(e){
            logger.error("Failed to GETATTRIBUTE Element: "+pageElement+" And Exception Occured: "+e);
            assert.fail("Failed to GETATTRIBUTE Element: "+pageElement+" And Provided SECONDS: "+timeout);
        }
        return str;
    }

    async assertTextFieldValue(pageElement:any,attributevalue:string,expectedValue:string,timeout:number):Promise<void> {
        let str:string = "";
        try{
        await browser.wait(EC.presenceOf(element(pageElement)),timeout * 1000).then(async function(){
        str = (await element(pageElement).getAttribute(attributevalue)).trim();
        expect(str).equal(expectedValue, "FAILED - ASSERTION - Element: "+pageElement+" Expected: " + expectedValue + " Actual: " + str);
        });
        }catch(e){
            logger.error("Failed to ASSERT Element: "+pageElement+" And Exception Occured: "+e);
            assert.fail("Failed to ASSERT Element: "+pageElement+" And Provided SECONDS: "+timeout);
        }
    }



    async waitUntilExpectedURL(url:string,timeout:number):Promise<void>{
        await browser.wait(EC.urlContains(url),timeout * 1000);
        logger.info("Wait completed for URL Expected: "+url+" Seconds: "+timeout);
    }

    async waitUntilToPageLoad(timeout:number):Promise<void>{
        await browser.manage().timeouts().pageLoadTimeout(timeout * 1000);
        logger.info("Wait completed for PageLoad Seconds: "+timeout);
    }

    async waitUntilToLoadAllElements(timeout:number):Promise<void>{
        await browser.manage().timeouts().implicitlyWait(timeout * 1000);
        logger.info("Wait completed for AllElements Seconds: "+timeout);
    }


    // async sleepWait(timeout:number) {
    //     return new Promise(resolve => setTimeout(resolve, timeout * 1000));
    //     console.log("waited for All the elements to load --> " +timeout);

    // } 
       

    async scrollToElement(pageElement:ElementFinder):Promise<void>{
        try{
            var timeout:number = 15;
        //  let ele:ElementFinder = element(pageElement);   
        await browser.wait(EC.visibilityOf(pageElement),timeout * 1000).then(async function () {
        await browser.executeScript('arguments[0].scrollIntoView(true)', pageElement.getWebElement());
        });
    }catch(e){
        logger.error("Failed to Scroll to Element: "+pageElement+" And Exception Occured: "+e);
        assert.fail("Failed to Scroll to Element: "+pageElement+" And Provided SECONDS: "+timeout); 
       }
    }
    

    async selectDropdownWithVisibleText(pageElement:any,value:string):Promise<void> {
        try{
        let ele:ElementFinder = element(pageElement);
        await ele.all(by.tagName("option")).each(async function(item) {       
        await item.getText().then(function(values) {       
         if(values==value){
         item.click();
         }         
         })
         })
        }catch(e){
            logger.error("Failed to Select DropDown Element: "+pageElement+" And Exception Occured: "+e);
            assert.fail("Failed to Select DropDown Element: "+pageElement); 
        }
     }


    async getWebElementFromList(pageElement:any,index:number):Promise<ElementFinder>{
        try{
            let timeout:number = 15;
            let ele:ElementArrayFinder = element.all(pageElement);
            let returnElement:ElementFinder = element.all(pageElement).get(index);
        await browser.wait(EC.presenceOf(ele.get(0)),timeout * 1000).then(async function(){
            for(let i = 1 ;i < await ele.count() + 1; i++){
            if(i === index){
               return returnElement = ele.get(i - 1);
            }
        }    
    }
    )
        return returnElement;
    }catch(e){
        logger.error("Failed to GetElementList Element: "+pageElement+" And Exception Occured: "+e);
        assert.fail("Failed to GetElementList Element: "+pageElement); 
    }
    }

    async filltheScreen(pageElement:any,field:string,testData:string):Promise<void>{

     if(field.toLowerCase().includes("scroll")){
        let ele:ElementFinder = element(pageElement);
        if(field.toLowerCase().includes("list")){
            ele = element.all(pageElement).get(0);
        }
        await this.scrollToElement(ele);
        logger.info("Scroll Completed Element: "+field+" Value: "+testData);    
     } 
     
     if(field.toLowerCase().endsWith("button")){     
             await this.waitForElementToload(pageElement,20);
             await this.click(pageElement,5);
             logger.info("Clicked on Element: "+field+" Value: "+testData);    
     
         } else if (field.toLowerCase().endsWith("textfield")){
             await this.waitForElementToload(pageElement,20);
             await this.setText(pageElement,testData,5);
             logger.info("SetText on Element: "+field+" Value: "+testData);    
     
         } else if(field.toLowerCase() === "shortwait"){
             await this.shortWait(parseInt(testData));

         } else if(field.toLowerCase().endsWith("buttonlistindex")){
             await this.clickListUsingIndex(pageElement,parseInt(testData));
             logger.info("Clicked on Element: "+field+" Value: "+testData);    

         } else if(field.toLowerCase().endsWith("dropdown")){
            await this.selectDropdownWithVisibleText(pageElement,testData);
            logger.info("Selected Dropdown Element: "+field+" Value: "+testData);    
        }
        
         }

        async getValues(pageElement:any,field:string):Promise<string>{
         let str:string = "";
         if(field.toLowerCase().endsWith("textarea") || field.toLowerCase().endsWith("button")){
            str = await this.getText(pageElement,15);
        } else if(field.toLowerCase().endsWith("textfield")){
            str = await this.getTextFieldValue(pageElement,"value",15);
        } 
        return str;
    }
}