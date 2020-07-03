export async function getExchangeRate(currency) {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY/latest/EUR`);
    let currencyResponse;
    if (response.ok && response.status == 200) {
      currencyResponse = await response.json();
    } else {
      currencyResponse = false;
    }
    return currencyResponse;
    } catch(error) {
      return false;
    }
}

