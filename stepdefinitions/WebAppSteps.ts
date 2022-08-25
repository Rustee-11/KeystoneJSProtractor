import { Given, TableDefinition, Then, When } from "cucumber";
import { browser } from "protractor";
import logger from "../Utilities/logger";
import { WebAppUtils } from "../Utilities/WebAppUtils";
import { WebAppVerifyUtils } from "../Utilities/WebAppVerifyUtils";

let webapp = new WebAppUtils();
let webappVerify = new WebAppVerifyUtils();

Given('User launch {string} page for {string} var', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
  await browser.get("https://qa1-vip-internal.cpqa1.bridge2solutions.net/b2r/pages/login.jsp");
  
  });


  When('User {string} the login page with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the login screen***********");
    await webapp.fillLoginScreen(string,string2);
    logger.info("*********COMPLETED Filling the login screen**********");
  });


  Then('User validate the {string} page screen', async function (string) {
    logger.info("*********STARTED Validating the "+string+" screen*********");
    await webappVerify.verifyPage(string);
    logger.info("*********COMPLETED Validating the "+string+" screen*********");
  });


  When('User {string} the landing home page with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the Landing screen*********");
    await webapp.fillLandingScreen(string,string2);
    logger.info("*********COMPLETED Filling the Landing screen*********");
  });


  When('User {string} the merchandise search home page with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the merchandise search home screen*********");
    await webapp.fillMerchandiseScreen(string,string2);
    logger.info("*********COMPLETED Filling the merchandise search home screen*********");
  });

  When('User {string} the merchandise Details page with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the merchandise detail screen*********");
    await webapp.fillMerchandiseDetailScreen(string,string2);
    logger.info("*********COMPLETED Filling the merchandise detail screen*********");
  });

  When('User {string} the Shopping Cart page with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the Shopping Cart screen*********");
    await webapp.fillShoppingCartScreen(string,string2);
    logger.info("*********COMPLETED Filling the Shopping Cart screen*********");
  });

  When('User {string} the Checkout Customer contact Section with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the Customer contact details screen*********");
    await webapp.fillContactDetailsScreen(string,string2);
    logger.info("*********COMPLETED Filling the Customer contact details screen*********");
  });

  When('User {string} the Checkout Customer Payment Section with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the Customer Payment Section screen*********");
    await webapp.fillPaymentOptionScreen(string,string2);
    logger.info("*********COMPLETED Filling the Customer Payment Section screen*********");
  });

  When('User {string} the Checkout Review Order Section with {string} values', async function (string, string2) {
    logger.info("*********STARTED Filling the  Review Order Section screen*********");
    await webapp.fillReviewOrderScreen(string,string2);
    logger.info("*********COMPLETED Filling the  Review Order Section screen*********");
  });

  When('User fill the {string} screens with default values', async function (string) {
    logger.info("*********STARTED Filling Screen: "+ string+"*********");
    await webapp.fillScreenWithDefault(string);
    logger.info("*********COMPLETED Filling Screen: "+ string+"*********");
  });

  When('User {string} the {string} screen field values', async function (string,string2,table : TableDefinition) {
    var testData = [];
    var rows = table.rows();
    rows.forEach(function(value){
      testData.push(value[0]);
    })
    logger.info("*********STARTED "+string+" Fields on the "+string2+" Screen *********");
    await webapp.addAndValidateData(string,string2,testData);
    logger.info("*********COMPLETED "+string+" Fields on the "+string2+" Screen *********");
  });
    
  When('User validate the {string} screen field values', async function (string,table : TableDefinition) {
    var testData = [];
    var rows = table.rows();
    rows.forEach(function(value){
      testData.push(value[0]);
    })
    console.log("Added values -> "+testData);
    console.log("STARTED validating added field values");
    // await webapp.startValidatingAddedData(string,testData);
    console.log("COMPLETED validating added field values");
  });

  When('User clears fetched UI data', async function () {
    console.log("STARTED validating added field values");
    console.log("COMPLETED validating added field values");
  });
  