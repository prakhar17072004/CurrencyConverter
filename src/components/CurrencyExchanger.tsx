import { useState, useEffect } from "react";

function CurrencyExchanger() {
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<string>("0.00");
  const [fromCurrency, setFromCurrency] = useState<string>("INR ");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [rates, setRates] = useState<Record<any,number>>({});
  
  // Fetch the API key from environment variables
   const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // Fetch exchange rates when component mounts or when fromCurrency changes
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setRates(data.conversion_rates);
      })
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, [fromCurrency, API_KEY]);

  useEffect(() => {
    // Calculate the converted amount whenever the amount, toCurrency, or rates change
    if (rates[toCurrency]) {
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, rates]);

  return (
    <div className="bg-[#163300] text-center h-[100vh]">
      <div className="p-60">
        <h1 className="font-bold text-6xl text-[#9FE870] mb-11">CURRENCY CONVERTER</h1>
        <div className="w-[1000px] h-[250px] mx-auto rounded-3xl bg-white">
          <div className="flex p-[80px] justify-between">
            <div className="flex flex-col">
              <label htmlFor="amount" className="text-start ml-2">Amount</label>
              <div className="flex border-red-200 border-4 p-6 rounded-lg">
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  placeholder="Enter the amount"
                  className="mr-2 p-1"
                />
                <select className="p-2 rounded-md" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                  {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="mt-12 p-4">To</p>
            <div className="flex flex-col">
              <label htmlFor="convertTo" className="text-start ml-2">Convert To</label>
              <div className=" flex border-red-200 border-4 p-6 rounded-lg">
                <input
                  type="number"
                  name="convertTo"
                  value={convertedAmount}
                  readOnly
                  placeholder="Converted amount"
                  className="mr-2 p-1"
                />
                <select className="p-2 rounded-md" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                  {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyExchanger;
