// Node.js code for fetching data from an API
const axios = require('axios');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}

fetchData('https://api.example.com/data');
