Feature: Place Merch order

Scenario: Place merch order
Given User launch "fivebox" page for "wf" var
When User "update" the login page with "submitButton:click" values
Then User validate the "landing" page screen
When User "update" the landing home page with "merchandiseButton:click##shortwait:5" values
Then User validate the "merchandise" page screen
When User "update" the merchandise search home page with "productImageScrollButtonListIndex:1" values
Then User validate the "detail" page screen
When User "update" the merchandise Details page with "viewCartButton:click##shortwait:1" values
Then User validate the "cart" page screen
When User "update" the Shopping Cart page with "acceptAndContinueButton:click" values
Then User validate the "shippingAddress" page screen
When User "update" the Checkout Customer contact Section with "approveThisAddressScrollButton:click" values
Then User validate the "paymentOptions" page screen
When User "update" the Checkout Customer Payment Section with "nextButton:click" values
Then User validate the "review" page screen
When User "update" the Checkout Review Order Section with "reviewPlaceOrderButton:click" values
Then User validate the "order" page screen

Scenario Outline: Place merch order
Given User launch "fivebox" page for "wf" var
When User "update" the login page with "submitButton:click" values
Then User fill the "<screens>" screens with default values
Then User validate the "order" page screen

Examples:
    | screens |
    |landing,merch search,merch details,shopping cart,customer contact,customer payment,customer review order| 

@Nonangular
Scenario: Validate the Merch search home page fieds
Given User launch "fivebox" page for "wf" var
When User "update" the login page with "default" values
Then User "add" the "login" screen field values
|fields|
|userIDTextField|
|passwordTextField|
|programCodeTextField|
|clientCodeTextField|
|submitButton|
When User "fill" the login page with "submitButton:click" values
Then User validate the "landing" page screen
When User "update" the landing home page with "merchandiseButton:click##shortwait:5" values
Then User validate the "merchandise" page screen
When User "fill" the merchandise search home page with "searchTextField:airpods##searchButton:click##shortwait:5" values
Then User "add" the "merchandise" screen field values
|fields|
|searchTextField|
Then User "validate" the "merchandise" screen field values
|fields|
|searchTextField:searchTextFieldUIResponse|
Then User "clear" the "all" screen field values
|fields|
|clear|

# |userIDTextField##passwordTextField##programCodeTextField##clientCodeTextField|
# Then User validate the "login" screen <fields> field values
# |fields|
# |userIDTextField:userIDTextFieldUIresponse|

Scenario: Place merch order
Given User launch "fivebox" page for "wf" var
When User "update" the login page with "submitButton:click" values
Then User validate the "merchandise" page screen
