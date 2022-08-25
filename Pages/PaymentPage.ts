import { by } from "protractor";


export class PaymentPage{

    loadElementMap = new Map<string,any>();
 
constructor(){
   this.loadElementMap.set("chooseWantToSrollTextArea",by.css("div[id='paymentOptions'] div[class='payment-info']"));   
   this.loadElementMap.set("pointUsageTextField",by.css("div[class='points-used-amount'] input"));
   this.loadElementMap.set("nextButton",by.css("div[class*='payment-continue-btn'] generic-button"));
   this.loadElementMap.set("cardInfoScrollTextArea",by.css("span[translate='label.payment.enter.card.info.title']"));
   this.loadElementMap.set("useNameAccountButton",by.css("div[class*='payment-continue-btn'] generic-button"));
   this.loadElementMap.set("cardFirstNameTextField",by.id("cardFirstName"));
   this.loadElementMap.set("cardLastNameTextField",by.id("cardLastName"));
   this.loadElementMap.set("cardNumberTextField",by.id("cardNumber"));
   this.loadElementMap.set("expirationMonthDropDown",by.id("expirationMonth"));
   this.loadElementMap.set("expirationYearDropDown",by.id("expirationYear"));
   this.loadElementMap.set("securityTextField",by.id("securityCode"));
   this.loadElementMap.set("enterCardPhoneNumberTextField",by.id("enterCardPhoneNumber"));
   this.loadElementMap.set("useThisCardButton",by.css("div[class='payment-submit'] generic-button"));
}


}