import { by } from "protractor";


export class CustomerContactDetails{

    loadElementMap = new Map<string,any>();
 
constructor(){
    this.loadElementMap.set("enterAddressScrollTextArea",by.css("span[translate='label.checkout.enter_an_address']"));   
   this.loadElementMap.set("editLnkButton",by.css("div[id='shipping-address-view'] a[class='edit ng-scope']"));
   this.loadElementMap.set("firstNameTextField",by.id("firstName"));
   this.loadElementMap.set("lastNameTextField",by.id("lastName"));
   this.loadElementMap.set("addressTextField",by.id("Address1"));
   this.loadElementMap.set("cityTextField",by.id("city"));
   this.loadElementMap.set("stateDropDown",by.id("state"));
   this.loadElementMap.set("ZipCodeTextField",by.id("zip"));
   this.loadElementMap.set("emailTextField",by.id("email"));
   this.loadElementMap.set("confirmEmailTextField",by.id("confirmEmail"));
   this.loadElementMap.set("phoneNumberTextField",by.id("phoneNumber"));
   this.loadElementMap.set("submitChangesButton",by.css("generic-button[label-translate='label.checkout.submitChanges'] button"));
   this.loadElementMap.set("approveThisAddressScrollButton",by.css("generic-button[label-translate='label.checkout.approveThisAddress'] button"));
}


}