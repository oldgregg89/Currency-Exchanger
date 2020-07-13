import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {getExchangeRate} from './currencyExchanger.js';

$(document).ready(async function() {
  const rates = await getExchangeRate();
  $('#currencyChanger').on('submit',(event) => {
    event.preventDefault()
    const amountEntered = $('#usdInput').val();
    let choosenValueCurrency = $('#currencyChoices').val();
    let convertedValue = rates[choosenValueCurrency];
    const convertedCurrency = (amountEntered * convertedValue);
    $('#convCurrency').text(`${amountEntered} US Dollars is equal to ${convertedCurrency} in ${choosenValueCurrency}`);
  });
});