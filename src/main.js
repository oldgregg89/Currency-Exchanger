import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {getExchangeRate} from './currencyExchanger.js'


async function exchangeRate() {
  const theCurrency = await getExchangeRate('USD');
  if (theCurrency === false) {
    $("#currency").text("That was incorrect, please try again.");
  } else {
    $("#currency").text(`${theCurrency}`);
  } 
}

$(document).ready(function() {
  const rates = getExchangeRate();
  
  var choosenCurrency = $("")
  exchangeRate();
});