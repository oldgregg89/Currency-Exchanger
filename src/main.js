import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {getExchangeRate} from './currencyExchanger.js';

$(document).ready(async function() {
  const rates = await getExchangeRate();
  if (!rates){
    return $('#convCurrency').text(`Something went wrong gettting exchange rates from the API.`);
  }
  $('#currencyChanger').on('submit',(event) => {
    event.preventDefault();
    const amountEntered = $('#usdInput').val();
    if (isNaN(amountEntered)) {
      return $('#convCurrency').text(`${amountEntered} is not a currency please enter in numerical USD value.`); 
    } else {
      let choosenValueCurrency = $('#currencyChoices').val(); 
      let convertedValue = rates[choosenValueCurrency];
      if (!convertedValue){
        return $('#convCurrency').text(`${convertedValue} is not a valid conversion type`);
      }
      const convertedCurrency = (amountEntered * convertedValue);
      $('#convCurrency').text(`${amountEntered} US Dollars is equal to ${convertedCurrency} in ${choosenValueCurrency}`);
    }
  });
});