import { by, element, ElementArrayFinder, ElementFinder } from "protractor";


export class MerchSearchDetailPage{
    
    loadElementMap = new Map<string,any>();

    constructor(){
        this.loadElementMap.set("addToCartButton",by.css("div[relative-element='product-detail-section'] add-to-cart[product-detail='productDetail'] div[class='cart-box col-sm-12 nopadding'] div[class*='button-container'] button"));      
        this.loadElementMap.set("viewCartButton",by.css("div[class='view-cart-button'] button"));             
    }  

}