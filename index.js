const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://amazon-product-price-data.p.rapidapi.com/product',
  params: {
    asins: 'B005YQZ1KE',
    locale: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'dc090d1e45msh306c35702029d55p13edd9jsn766deee4f99c',
    'X-RapidAPI-Host': 'amazon-product-price-data.p.rapidapi.com'
  }
};
async function test(){
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}}
test();