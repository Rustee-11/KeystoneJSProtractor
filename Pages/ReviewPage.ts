
import { by } from "protractor";


export class ReviewPage{

    loadElementMap = new Map<string,any>();
 
constructor(){
   this.loadElementMap.set("yourItemScrollTextArea",by.css("div[id='review'] div[class*='items'] div[class*='inner-title']"));  
   this.loadElementMap.set("itemScrollList",by.repeater("item in cartLines"));  
   this.loadElementMap.set("reviewPlaceOrderButton",by.id("reviewPlaceOrderButton"));
}


}