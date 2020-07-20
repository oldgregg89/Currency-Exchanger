# _Currency Exchanger_

#### _This application will take in the US Dollars and give the exchange rate for that value., 2020 ver 1.1.0_

#### By _Ian Gregg_
[Currency Exchanger](https://github.com/oldgregg89/Currency-Exchanger)

## Description

This application will take in the users inputted value in US Dollars and convert the value to the rate of the country selected. It will have the ability to convert the currency to at value to equal to four different types of currency Yen, Swiss Franc, Rupes, or Euro.

## Setup/Installation Requirements

* Click on clone and clone this repo to your desktop.
* From there navigate to desktop to where you cloned this repo.
* Open the project up in Visual Code Studio.
* In your terminal run ```npm install```.
* To build the project run ```npm run build```.
* To get a free API key go to [ExchangeRate-API](https://www.exchangerate-api.com/).
* login in and create an account by clicking ```get started``` and following instructions.
* In Visual Studio Code run ```npm install dotenv --save-dev```.
* In Visual Studio Code add a ```.env``` file.
* Add descriptor in ```.env``` called ```API_KEY``` and set it to the API Key you were given from ExchangeRate-API.
* To start the applicationtype In Visual Studio Code terminal ```npm run start```.

## Specs

| Behavior    | Input | Output |
| :---------- | ----- | -----: |
| behavior 1 | Input the amount of (USD)money you want to exchange |  Money converted to the value of currency  |
| behavior 2 | Set type of money to convert currency | Currency will be converted to inputed currency |

## Known Bugs

* Buttons were not working to find the correct currecny exchange (fixed)
* Errors catches were not present in the main.js (fixed)

## Support and contact details

_Contact Ian Gregg: <iangregg188@gmail.com>_

## Technologies Used

_The Technologies used in the making of this software was Chrome browser, Visual Studio editor, Mac, HTML, JavaScript, Webpack, CSS, Bootstrap, Json, Jest, Babel_

### License

Copyright (c) 2020 **_Ian Gregg_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
