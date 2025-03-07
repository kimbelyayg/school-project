// NodeJS code to fetch data from an API
const axios = require('axios');

async function getData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
