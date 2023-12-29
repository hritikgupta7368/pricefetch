const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json())


// // amazon price fetching
// const options = {
//   method: 'GET',
//   url: 'https://amazon-product-price-data.p.rapidapi.com/product', //same
//   params: {
//     asins: 'B005YQZ1KE,B074R8RQQ2', //asin no. s can be multiple
//     locale: 'IN'                    // india
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.X-RapidAPI-Key,
//     'X-RapidAPI-Host': process.env.X-RapidAPI-Host
//   }
// };
// // response
[
    {
      "asin": "B0B6ZXHMX7",
      "product_name": "Park Avenue Premium Men’s Soaps for Bath – Pure Luxury | 125g (Pack of 4) | Enriched with Shea Butter & Coconut Oil | Grade 1 Soap | For All Skin Types",
      "current_price": 215,
      "is_prime": false,
      "image_url": "https://m.media-amazon.com/images/I/41JHAGwWuHL.jpg",
      "locale": "IN",
      "currency_symbol": "₹"
    }
  ]

//


// const axios = require('axios');

// const options = {
//     method: 'GET',
//     url: 'https://real-time-product-search.p.rapidapi.com/search',
//     params: {
//       q: 'Park Avenue Premium Men’s Soaps for Bath – Pure Luxury | 125g (Pack of 4) | Enriched with Shea Butter & Coconut Oil | Grade 1 Soap | For All Skin Types',
//       country: 'IN',
//       language: 'en',
//       limit: '30'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'dc090d1e45msh306c35702029d55p13edd9jsn766deee4f99c',
//       'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }

app.get("/api/product",(req,res) =>{
    
    console.log(req.message)

})

const PORT = 8002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
