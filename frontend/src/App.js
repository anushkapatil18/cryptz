import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoFilter from './component/CryptoFilter';
import CryptoCard from './component/CryptoCard';
import SendEmailButton from './component/emailButton';



const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCryptoId, setSelectedCryptoId] = useState(null);
  const [selectedCryptos, setSelectedCryptos] = useState(null);
  
  useEffect(() => {
    fetchCryptos();
  
  }, []);

  const fetchCryptos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/cointeck'); // Change the URL to your backend server URL
      setCryptos(response.data);
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
    }
  };

  const handleCryptoSelect = (event) => {
    const selectedCryptoId = event.target.value;
    console.log(cryptos[selectedCryptoId]);
    setSelectedCryptos(cryptos[selectedCryptoId]);
  };




  return (
    <div className="app min-h-screen bg-black text-white flex flex-col items-center">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Cryptocurrency Tracker</h1>
        <div className="crypto-container flex flex-col items-center">
          <CryptoFilter cryptos={cryptos} onCryptoSelect={handleCryptoSelect} />
          {selectedCryptos && <CryptoCard crypto={selectedCryptos} />}
          {/*<SendEmailButton/>*/}
        </div>

      </div>
    </div>
  );
};

export default App;
