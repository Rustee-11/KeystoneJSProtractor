import { browser } from "protractor";
import { functionalUtils } from "./functionalUtils";


let utility = new functionalUtils();

export class WebAppVerifyUtils{



    async verifyPage(str:string) {
        await utility.waitUntilToPageLoad(45);
        await utility.waitUntilExpectedURL(str,45);     
        await utility.waitUntilToLoadAllElements(10);
        await utility.assertUrl(str);      
     }
   




}