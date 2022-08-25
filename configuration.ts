import{Config} from "protractor";


// import * as reporter from "cucumber-html-reporter";
var reporter = require('cucumber-html-reporter');

//Passing tags from the argument
var tags = process.argv[3].split("=")[1];
// An example configuration file
export let config:Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',

//This code will run the code locally without launching the selenium host
    directConnect:true,

     // set to "custom" instead of cucumber.
    framework: 'custom',

   // path relative to the current config file
   frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/*.feature'],
  
    cucumberOpts:{
      tags: tags,
      format:'json:../report/cucumberreport.json',
        //require step definition
        require:[ 
          './stepdefinitions/*.js',
        ]
    },

    onComplete: () =>  {
      var options = {
              theme: 'bootstrap',
              jsonFile: './report/cucumberreport.json',
              output: './report/cucumber_report.html',
              reportSuiteAsScenarios: true,
              scenarioTimestamp: true,
              launchReport: true,
              metadata: {
                  "App Version":"0.3.2",
                  "Test Environment": "STAGING",
                  "Browser": "Chrome  54.0.2840.98",
                  "Platform": "Windows 10",
                  "Parallel": "Scenarios",
                  "Executed": "Remote"
              }
          };   
          reporter.generate(options);
      }
  
  };