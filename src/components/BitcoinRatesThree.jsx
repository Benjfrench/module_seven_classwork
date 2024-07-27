import { useReducer, useEffect, useState } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

const initialState = {
  data: null,
  loading: false,
  error: null,
};

function dataReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: 'Error fetching data' };
    default:
      throw new Error();
  }
}

export function BitcoinRatesThree() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    if (!currency) return;

    let ignore = false;
    dispatch({ type: 'FETCH_INIT' });

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          dispatch({ type: 'FETCH_SUCCESS', payload: json });
        }
      })
      .catch(() => {
        if (!ignore) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  const { data, loading, error } = state;
  const price = data ? data.bitcoin[currency.toLowerCase()] : null;

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
