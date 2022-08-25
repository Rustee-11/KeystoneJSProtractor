import { by, element, ElementArrayFinder, ElementFinder } from "protractor";


export class MerchSearchHomePage{
    
    loadElementMap = new Map<string,any>();

    constructor(){
        this.loadElementMap.set("searchTextField",by.css("div[id='search-input'] input"));
        this.loadElementMap.set("searchSuggestionList",by.css("div[id='search-input'] ul li:nth-of-type(1)"));
        this.loadElementMap.set("searchSuggestionButtonListIndex",by.css("div[id='search-input'] ul li:nth-of-type(1)"));
        this.loadElementMap.set("searchButton",by.css("div[id='search-bar'] span button"));
        this.loadElementMap.set("sortByButton",by.css("button[id='btn-sort']"));
        this.loadElementMap.set("gridViewButton",by.css("button[ng-click='setGridView()']"));
        this.loadElementMap.set("productGrid",by.css("div[class*='grid-results grid-width-correction ng-scope'][ng-if='!listView']"));
        this.loadElementMap.set("productButtonListIndex",by.repeater("product in searchResults.searchResult"));      
        this.loadElementMap.set("productImageScrollButtonListIndex",by.css("div[class='grid-result grid-result-height'] a[class='thumbnail']"));                 
        this.loadElementMap.set("productAddToCartButtonListIndex",by.css("div[class='grid-result grid-result-height'] generic-button"));
        this.loadElementMap.set("sortbyscrollDropDown",by.id("dropdown-sort"));


        
    }  

}