export async function getExchangeRate() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY/USD`);
    let currencyResponse;
    if (response.ok && response.status == 200) {
      let responseJson = await response.json();
      currencyResponse = responseJson.conversion_rates;
    } else {
      currencyResponse = false;
    }
    return currencyResponse;
  } catch(error) {
    return false;
  }
}
// ${process.env.API_KEY}