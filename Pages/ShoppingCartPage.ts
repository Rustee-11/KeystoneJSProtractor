import { by, element, ElementArrayFinder, ElementFinder } from "protractor";


export class ShoppingCartPage{
    
    loadElementMap = new Map<string,any>();

    constructor(){
        this.loadElementMap.set("proceedToCheckoutButton",by.css("div[id='summary-title'] generic-button button"));     
        this.loadElementMap.set("ACtermsCondtionScrollViewLabel",by.xpath("//div[@id='acknowledgeOnCheckoutMessage']//ul[19]"));     
        this.loadElementMap.set("acceptAndContinueButton",by.css("div[class='acknowledge-on-checkout-modal'] div[class='btn-section hidden-xs'] button[class='btn mainButton accept-and-continue ng-scope']"));     
        // this.ACKtermsConditionPopUp = element(by.id("acknowledgeOnCheckoutMessage"));
        // this.ACtermsCondtionPopupLastMessage = element(by.xpath("//div[@id='acknowledgeOnCheckoutMessage']//ul[19]"));
        // this.AcceptAndContinueButton = element(by.css("div[class='acknowledge-on-checkout-modal'] div[class='btn-section hidden-xs'] button[class='btn mainButton accept-and-continue ng-scope']"));
    }  

}