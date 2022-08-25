import { by } from "protractor";


export class LandingHomePage{

    loadElementMap = new Map<string,any>();
    
    constructor(){
        this.loadElementMap.set("merchandiseButton",by.css("li[store-id='200']"));
        this.loadElementMap.set("appleButton",by.css("li[store-id='210']"));
        this.loadElementMap.set("travelButton",by.css("li[store-id='20']"));
        this.loadElementMap.set("giftCardButton",by.css("li[store-id='600']"));
    }

}