import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import './currencyEchanger.js'


async function getExchangeRate() {
  const theCurrency = await currencyEx();
  if (theCurrency === false) {
    $("#currency").text("That was incorrect, please try again.");
  } else {
    $("#currency").text(`${theCurrency}`);
  } 
}

$(document).ready(function() {
  event.preventDefault();

});