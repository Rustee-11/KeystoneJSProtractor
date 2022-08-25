Feature: Place Merch order

Scenario Outline: Place merch order
Given User launch "fivebox" page for "wf" var
When User "update" the login page with "submitButton:click" values
Then User fill the "<screens>" screens with default values
Then User validate the "order" page screen

Examples:
    | screens |
    |landing,merch search,merch details,shopping cart,customer contact,customer payment,customer review order| 
