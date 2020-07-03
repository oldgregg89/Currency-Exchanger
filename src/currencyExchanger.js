export async function getExchangeRate() {
  try {
    let response = await fetch(`https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=stolen&appid=${process.env.API_KEY}`);
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


async function getExchangeRate() {
  const theCurrency = await currencyEx();
  if (theCurrency === false) {
    $("#currency").text("That was incorrect, please try again.");
  } else {
    $("#currency").text(`${theCurrency}`);
  } 
}
