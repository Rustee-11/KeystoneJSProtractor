
import { by } from "protractor";


export class OrderConfirmationPage{

    loadElementMap = new Map<string,any>();
 
constructor(){
   this.loadElementMap.set("orderSuccessfullMsgTextArea",by.css("div[id='mainContent']"));   
}


}