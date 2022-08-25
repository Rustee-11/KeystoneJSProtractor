import { CustomerContactDetails } from "../Pages/CustomerContactDetails";
import { LandingHomePage } from "../Pages/LandingHomePage";
import { LoginPage } from "../Pages/LoginPage";
import { MerchSearchDetailPage } from "../Pages/MerchSearchDetailPage";
import { MerchSearchHomePage } from "../Pages/MerchSearchHomePage";
import { PaymentPage } from "../Pages/PaymentPage";
import { ReviewPage } from "../Pages/ReviewPage";
import { ShoppingCartPage } from "../Pages/ShoppingCartPage";
import { functionalUtils } from "./functionalUtils";
import { WebAppVerifyUtils } from "./WebAppVerifyUtils";
import logger from "./logger";


let utility = new functionalUtils();
let webappVerify = new WebAppVerifyUtils();

let mapper = async function mapTestDatastr(str:string,td:Map<string, string>) {
    let mapper:string[] = str.split("##");
    for(let count = 0; count <mapper.length ; count++){
     let data:string[] =  mapper[count].split(":");
     td.set(data[0],data[1]);
}
}


export class WebAppUtils {

 addAndgetMAp = new Map<string, string>();
 
  getMapKey(map:Map<string,string>,str:string):string {
        let value:string = "";
        for (let key of map.keys()) {
            if(key === str){
                value = map.get(key);
            }            
        }
      return value;
    }

    async fillLoginScreen(str:string,str2:string) {
       let elements = new LoginPage();
       let td = new Map<string, string>();
       if(str.toLowerCase() === "update"){
           td.set("userIDTextField","demo");
           td.set("passwordTextField","demo");
           td.set("programCodeTextField","WF_UTA");
           td.set("clientCodeTextField","wf");
        //    td.set("submitButton","click");
           if(str2.toLowerCase() !== "default"){
               mapper(str2,td);
           }         
       } else if(str.toLowerCase() === "fill"){
           mapper(str2,td);
       }
       for (let key of td.keys()) {
           await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
       }
       elements.loadElementMap.clear();
   }

   async fillLandingScreen(str:string,str2:string) {
    let elements = new LandingHomePage();
    let td = new Map<string, string>();
    if(str.toLowerCase() === "update"){
        // td.set("merchandiseButton","click");
        if(str2.toLowerCase() !== "default"){
            mapper(str2,td);
        }        
    } else if(str.toLowerCase() === "fill"){
        mapper(str2,td);
    }
    for (let key of td.keys()) {
        await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
    }
    elements.loadElementMap.clear();
}

async fillMerchandiseScreen(str:string,str2:string) {
    let elements = new MerchSearchHomePage();
    let td = new Map<string, string>();
    if(str.toLowerCase() === "update"){
        td.set("searchTextField","airpod");
        // td.set("shortwait","1");      
        td.set("searchButton","click");
        // td.set("shortwait","1");   
        td.set("gridViewButton","click");     
        // td.set("productImageScrollButtonListIndex","1"); 
        if(str2.toLowerCase() !== "default"){
            mapper(str2,td);
        }
    } else if(str.toLowerCase() === "fill"){
        mapper(str2,td);
    }
    for (let key of td.keys()) {
        await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
    }
    elements.loadElementMap.clear();
}

async fillMerchandiseDetailScreen(str:string,str2:string) {
    let elements = new MerchSearchDetailPage();
    let td = new Map<string, string>();
    if(str.toLowerCase() === "update"){
        td.set("addToCartButton","click");  
        td.set("shortwait","1");  
        // td.set("viewCartButton","click");  
        // td.set("shortwait","1");         
        if(str2.toLowerCase() !== "default"){
            mapper(str2,td);
        }
        // console.log("Added the default values");
    } else if(str.toLowerCase() === "fill"){
        mapper(str2,td);
    }
    for (let key of td.keys()) {
        await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
    }
    elements.loadElementMap.clear();
}

async fillShoppingCartScreen(str:string,str2:string) {
    let elements = new ShoppingCartPage();
    let td = new Map<string, string>();
    if(str.toLowerCase() === "update"){
        td.set("proceedToCheckoutButton","click");   
        td.set("shortwait","2");   
        td.set("ACtermsCondtionScrollViewLabel","scroll");    
        // td.set("acceptAndContinueButton","click");            
        if(str2.toLowerCase() !== "default"){
            mapper(str2,td);
        }
        // console.log("Added the default values");
    } else if(str.toLowerCase() === "fill"){
        mapper(str2,td);
    }
    for (let key of td.keys()) {
        await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
    }
    elements.loadElementMap.clear();
}

async fillContactDetailsScreen(str:string,str2:string) {
    let elements = new CustomerContactDetails();
    let td = new Map<string, string>();
    if(str.toLowerCase() === "update"){
        td.set("enterAddressScrollTextArea","scroll");   
        td.set("firstNameTextField","AutomationFirst");   
        td.set("firstNameTextField","AutomationFirst");   
        td.set("lastNameTextField","AutomationLast");   
        td.set("addressTextField","12830 GA-9");    
        td.set("cityTextField","Alpharetta");   
        td.set("stateDropDown","Georgia"); 
        td.set("ZipCodeTextField","30004");   
        td.set("emailTextField","vinoth.vijayabaskaran@bakkt.com"); 
        td.set("confirmEmailTextField","vinoth.vijayabaskaran@bakkt.com");   
        td.set("phoneNumberTextField","770-650-0455"); 
        td.set("submitChangesButton","click");   
        // td.set("approveThisAddressScrollButton","click");           
        if(str2.toLowerCase() !== "default"){
            mapper(str2,td);
        }
        console.log("Added the default values");
    } else if(str.toLowerCase() === "fill"){
        mapper(str2,td);
    }
    for (let key of td.keys()) {
        await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
    }
    elements.loadElementMap.clear();
}

async fillPaymentOptionScreen(str:string,str2:string) {
    let elements = new PaymentPage();
    let td = new Map<string, string>();
    if(str.toLowerCase() === "update"){
        td.set("chooseWantToSrollTextArea","scroll");  
        // td.set("nextButton","click");         
        if(str2.toLowerCase() !== "default"){
            mapper(str2,td);
        }
        console.log("Added the default values");
    } else if(str.toLowerCase() === "fill"){
        mapper(str2,td);
    }
    for (let key of td.keys()) {
        await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
    }
    elements.loadElementMap.clear();
}

async fillReviewOrderScreen(str:string,str2:string) {
    let elements = new ReviewPage();
    let td = new Map<string, string>();
    if(str.toLowerCase() === "update"){
        td.set("yourItemScrollTextArea","scroll");  
        // td.set("reviewPlaceOrderButton","click");         
        if(str2.toLowerCase() !== "default"){
            mapper(str2,td);
        }
        console.log("Added the default values");
    } else if(str.toLowerCase() === "fill"){
        mapper(str2,td);
    }
    for (let key of td.keys()) {
        await utility.filltheScreen(elements.loadElementMap.get(key),key,td.get(key));
    }
    elements.loadElementMap.clear();
}

async fillScreenWithDefault(str:string) {
    let screens:String[] = str.split(",");
    for(let count = 0; count < screens.length; count++ ){

        switch(screens[count].toLowerCase()){

            case "landing":
            await this.fillLandingScreen("update","merchandiseButton:click##shortwait:5");
            await webappVerify.verifyPage("merchandise");
            break;

            case "merch search":
            await this.fillMerchandiseScreen("update","productImageScrollButtonListIndex:1");
            await webappVerify.verifyPage("detail");
            break;

            case "merch details":
            await this.fillMerchandiseDetailScreen("update","viewCartButton:click##shortwait:1");
            await webappVerify.verifyPage("cart");
            break;

            case "shopping cart":
            await this.fillShoppingCartScreen("update","acceptAndContinueButton:click");
            await webappVerify.verifyPage("shippingAddress");
            break;

            case "customer contact":
            await this.fillContactDetailsScreen("update","approveThisAddressScrollButton:click");
            await webappVerify.verifyPage("paymentOptions");
            break;

            case "customer payment":
            await this.fillPaymentOptionScreen("update","nextButton:click");
            await webappVerify.verifyPage("review");
            break;

            case "customer review order":
            await this.fillReviewOrderScreen("update","reviewPlaceOrderButton:click");
            await webappVerify.verifyPage("order");
            break;
        }
    }
  }

  async addAndValidateData(addGetClr:string,screen:string,field:string[]) {
    let element:Map<string,any> = new Map<string,any>();
    var value:string = "";
    let mapValue:string= "";

    switch(screen.toLowerCase()){
        case "login":
            let elements = new LoginPage();
            element = elements.loadElementMap;
        break;

        case "landing":
            let landingele = new LandingHomePage();
            element = landingele.loadElementMap;          
        break;

        case "merchandise":
            let merch = new MerchSearchHomePage();
            element = merch.loadElementMap;          
        break;
    }

   if(addGetClr.toLowerCase() === "add"){
    for(let i = 0; i < field.length; i++){
        value = await utility.getValues(element.get(field[i]),field[i]);
        logger.info("ADDING - Field: "+field[i]+"UIResponse " +" Value: "+value);
        this.addAndgetMAp.set(field[i]+"UIResponse",value);
    }
    // for (const entry of this.addAndgetMAp.entries()) {
    //     console.log(entry);
    //   }
    } else if(addGetClr.toLowerCase() === "validate"){
    for(let i = 0; i < field.length; i++){
        let fieldTd = field[i].split(":");
        if(fieldTd[0].toLowerCase().endsWith("textfield")){
            if(fieldTd[1].endsWith("UIResponse")){
            mapValue = this.getMapKey(this.addAndgetMAp,fieldTd[1]);
            logger.info("VALIDATING - Field: "+fieldTd[0] +" value: "+mapValue);
            await utility.assertTextFieldValue(element.get(fieldTd[0]),"value",mapValue,15);
            } else {
            logger.info("VALIDATING - Field: "+fieldTd[0] +" value: "+fieldTd[1]);
            await utility.assertTextFieldValue(element.get(fieldTd[0]),"value",fieldTd[1],15);
            }
        }
    }
  } else if(addGetClr.toLowerCase() === "clear"){
      this.addAndgetMAp.clear();
  }
}

}