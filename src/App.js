import React from 'react';
import {useState,useEffect} from 'react';

function App() {
  const [cryptoData,setCryptoData] = useState([]);

  useEffect(() => {
      fetchCryptoData();
  },[cryptoData])

  const fetchCryptoData = async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const apiResponse = await data.json();
    console.log(apiResponse);
    setCryptoData(apiResponse)
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Crypto Currencies</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
          >
           
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black-700 uppercase tracking-wider"
                  >
                    Crypto currency
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black-700 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black-700 uppercase tracking-wider"
                  >
                    Market Cap
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black-700 uppercase tracking-wider"
                  >
                    Total Volume 
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black-700 uppercase tracking-wider"
                  >
                    Price Change 24h 
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black-700 uppercase tracking-wider"
                  >
                    Price Percentage 24h 
                  </th>
                </tr>
              </thead>

              <tbody>
                {cryptoData.map(cryptocurrency => 
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={cryptocurrency.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-black-900 whitespace-no-wrap">
                          {cryptocurrency.name}
                        </p>
                        <p className="text-black-600 whitespace-no-wrap">{cryptocurrency.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-black-900 whitespace-no-wrap">${cryptocurrency.current_price}</p>
                    <p className="text-black-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-black-600 whitespace-no-wrap">{cryptocurrency.market_cap}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-black-600 whitespace-no-wrap">{cryptocurrency.total_volume}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-black-600 whitespace-no-wrap">${cryptocurrency.price_change_24h}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-black-600 whitespace-no-wrap">{cryptocurrency.price_change_percentage_24h}%</p>
                  </td>
                  
                </tr>
                )}
              </tbody>
            </table>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
