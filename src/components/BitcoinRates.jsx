import { useState, useEffect} from "react";
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
   
    const [currency, setCurrency] = useState(currencies[0]);
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);

   // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
   useEffect(() => {

    const fetchPrice = async () => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
            const data = await response.json();
            setPrice(data.bitcoin[currency.toLowerCase()]);
            setError(null);
        } catch (err) {
            setError('Error fetching price');
            setPrice(null);
        }
    };

    fetchPrice();
}, [currency]);

   const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

   return (
    <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <label>Choose currency:
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
                {options}
            </select>
        </label>
        {price !== null && <p>1 Bitcoin = {price} {currency}</p>}
        {error && <p>{error}</p>}
    </div>
);
}
