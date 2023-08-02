import React, { useState, useEffect } from 'react';

const CryptoCard = ({ crypto }) => {
 
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  // Sample price update - Replace this with real-time price update
  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = Math.random() * crypto.lastPrice;
      updatePrice(newPrice);
    }, 3000);

    return () => clearInterval(interval);
  }, [crypto.lastPrice]);

  const updatePrice = (newPrice) => {
    // Implement your real-time price update logic here
    // You might need to use a WebSocket or fetch new price from API
    // For demonstration, we are using a random price update here
    crypto.lastPrice = newPrice;
  };

  useEffect(() => {
    checkPriceLimits();
  }, [crypto.lastPrice]);

  const checkPriceLimits = () => {
    if (parseFloat(lowerLimit) > 0 && crypto.lastPrice < parseFloat(lowerLimit)) {
      showAlert(`Price alert: ${crypto.symbol} (${crypto.symbol}) has fallen below ${lowerLimit}`);
    } else if (parseFloat(upperLimit) > 0 && crypto.symbol > parseFloat(upperLimit)) {
      showAlert(`Price alert: ${crypto.symbol} (${crypto.symbol}) has exceeded ${upperLimit}`);
    }
  };

  const showAlert = (message) => {
    // For simplicity, using the built-in alert() function for demonstration
    // You can use a more sophisticated notification library or custom notification component
    alert(message);
  };
  if (!crypto) {
    return <div>Loading...</div>;
  }
  return (
    <div className="crypto-card bg-black rounded shadow p-4 w-80" style={{ boxShadow: '0px 0px 10px 2px rgba(255, 255, 255, 0.1)' }}>
      <h2 className="text-xl font-semibold mb-2">{crypto.symbol}</h2>
      <div className="flex flex-wrap items-center">
        <div className="flex flex-col mr-8">
          <span className="font-semibold">Last Price:</span>
          <span className="text-xl">{crypto.lastPrice}</span>
        </div>
        <div className="flex flex-col mr-8">
          <span className="font-semibold">Price Change:</span>
          <span className="text-xl">{crypto.priceChange}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Price Change %:</span>
          <span className="text-xl">{crypto.priceChangePercent}%</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-4">
        <div className="flex flex-col mr-8">
          <span className="font-semibold">High Price:</span>
          <span>{crypto.highPrice}</span>
        </div>
        <div className="flex flex-col mr-8">
          <span className="font-semibold">Low Price:</span>
          <span>{crypto.lowPrice}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Volume:</span>
          <span>{crypto.volume}</span>
        </div>
      </div>
      <div className="mt-4">
        <span className="font-semibold">Quote Volume:</span>
        <span>{crypto.quoteVolume}</span>
      </div>
      {/* Add more information as needed */}
      <div className="price-alerts mt-4">
        <div>
          <label className="block mb-1">Set Lower Limit:</label>
          <input
            type="number"
            value={lowerLimit}
            onChange={(e) => setLowerLimit(e.target.value)}
            className="border text-black rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1">Set Upper Limit:</label>
          <input
            type="number"
            value={upperLimit}
            onChange={(e) => setUpperLimit(e.target.value)}
            className="border  text-black rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
