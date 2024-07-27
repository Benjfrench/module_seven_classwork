import { useState } from "react";
import { useData } from "../hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRatesTwo() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [data, loading] = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
  
  const price = data ? data.bitcoin[currency.toLowerCase()] : null;
  const error = loading ? null : (!data ? 'Error fetching price' : null);

  const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading && <p>Loading...</p>}
      {price !== null && <p>1 Bitcoin = {price} {currency}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
