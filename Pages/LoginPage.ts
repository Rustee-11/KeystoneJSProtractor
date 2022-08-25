import { by } from "protractor";


export class LoginPage{

    loadElementMap = new Map<string,any>();

 
constructor(){
   this.loadElementMap.set("userIDTextField",by.id("userid"));
   this.loadElementMap.set("passwordTextField",by.id("pword"));
   this.loadElementMap.set("programCodeTextField",by.id("programid"));
   this.loadElementMap.set("clientCodeTextField",by.id("varid"));
   this.loadElementMap.set("localeTextField",by.id("locale"));
   this.loadElementMap.set("submitButton",by.css("input[type='submit']"));
}


}