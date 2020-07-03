export async function getExchangeRate() {
  try {
    let response = await fetch(`${process.env.API_KEY}`);
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

