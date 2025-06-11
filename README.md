# Dmoney-REST-API-Automation-Testing

# And a standard Test Case format and Bug Report for testing the Dmoney REST API

## Project Summary:
1. Admin creates an Agent, 2 random Customers, and a Merchant.
2. Deposit some money from SYSTEM account to the Agent. SYSTEM account range: 10 TK to 10,000 TK.
3. Agent deposits money to one of the Customers.
4. Then check Agent’s balance.
5. Then send money from one Customer to another Customer.
6. Then withdraw any amount from a Customer to the Agent (range 10 TK to 10,000 TK).
7. Then customer checks balance and transaction statement by transaction ID.
8. Make a payment from the second Customer to the Merchant.
9. Then second Customer checks balance and transaction statement.
10. Merchant checks his balance.

## Technology:
- Postman
- Newman
- HTML-extra Report

## Prerequisites:
- install node.js

## How to run?
- Clone this project
- Give following commands
  - ```npm init -y```
  - ```npm i newman```
  - ```npm i```
  - ```npm test```

## Newman Report Screenshots:
![image alt](https://github.com/abhishek11das/dmoney-api-automation/blob/1c3461a583b8ac77e7a6c5d9f68fba3f591c5882/HTML%20Report.png)
![image alt](https://github.com/abhishek11das/dmoney-api-automation/blob/94296fa7aeb79f630c929264235755df601ab34e/Total%20Requests.png)


## API Documentation
https://documenter.getpostman.com/view/45682289/2sB2x5Fs5y

## Test Case
https://docs.google.com/spreadsheets/d/1KxQGgrvW5NZyr_HhRuWFoH0Oc9CLaOnC/edit?usp=sharing&ouid=105412337074703854140&rtpof=true&sd=true

## Bug Report
https://docs.google.com/spreadsheets/d/1tD_cPsykKF9ZzoXbWb63J4zalIRzt3nn/edit?usp=sharing&rtpof=true&sd=true


###### Caution: You must have the .env file to run this project.





