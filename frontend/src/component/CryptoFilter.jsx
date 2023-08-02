// src/components/CryptoFilter.js
import React from 'react';

const CryptoFilter = ({ cryptos, onCryptoSelect }) => {
  let index=0;
  return (
    <div className="crypto-filter mb-4 border-b border-white">
      <h2 className="text-xl font-semibold mb-2 text-white">Select a Cryptocurrency</h2>
      <select
        className="bg-transparent border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
        onChange={onCryptoSelect}
      >
        <option value="" className="text-black">Select a cryptocurrency</option>
        {cryptos.map((crypto) => (
          <option className="text-black" key={index++} value={index}>
            {crypto.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CryptoFilter;
