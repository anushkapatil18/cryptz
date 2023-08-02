// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');

// Middleware to parse JSON data


app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/cointeck', async (req, res) => {
  try {
    const response = await axios.get('https://data.binance.com/api/v3/ticker/24hr', {
    });
    console.log(res.json(response.data));
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    res.status(500).json({ error: 'Failed to fetch cryptocurrency data' });
  }
});





app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
