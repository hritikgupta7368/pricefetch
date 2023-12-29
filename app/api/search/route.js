const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json())

let ASIN
let Pname
let data 

function getProductInfo(url) {
  const array = url.split("/");
  Pname = array[3];
  const temp = array[5];
  ASIN = temp.split("?")[0];

  return { productName: Pname, ASIN: ASIN };
}
async function handleAmazonApiResponse(Asin){

  const options = {
    method: 'GET',
    url: 'https://amazon-product-price-data.p.rapidapi.com/product',
    params: {
      asins: Asin,
      locale: 'IN'
    },
    headers: {
      'X-RapidAPI-Key': 'dbe73d864emshccd14cd458c7ecap1135b8jsn1c280166ab1a',
      'X-RapidAPI-Host': 'amazon-product-price-data.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      const item=  response.data[0]

      const result = {
        "asin": item.asin,
        "product_name": item.product_name,
        "image_url": item.image_url,
      }
      data = result
      return result;

    } 
  catch (error) {
      console.error(error);
    }
}
app.post("/api/url", async(req, res) => {

  console.log("request is coming")
  let { inputUrl } = req.body;

  try{
   

  if(inputUrl){
    
    let info = getProductInfo(inputUrl);
     
   
      const result = await handleAmazonApiResponse(info.ASIN)
      
      const redirectLink = "http://localhost:8000/api/"+result.asin+"&"+result.product_name
      res.status(200).json({ message: "Amazon URL is valid ✅" ,result, redirectLink : redirectLink });
      console.log("finished with search")

    } 

  }

    catch (error) {
      console.log("error occured at server side")
      return res.status(400).json({ error: " ❌ Invalid Amazon URL, Please check the link 🥲 " });
    }
    
    
});

async function hanndleSearchApiResponse(data){
  const option1 = {
    method: 'GET',
    url: 'https://real-time-product-search.p.rapidapi.com/search',
    params: {
      q: data.product_name,
      country: 'IN',
      language: 'en',
      limit: '20'
    },
    headers: {
      'X-RapidAPI-Key': 'dbe73d864emshccd14cd458c7ecap1135b8jsn1c280166ab1a',
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    }
  }
  try {
    if(data ){
    console.log('running')
    const response = await axios.request(option1);
    return response.data
    }
  }
  catch (error) {
    console.error(error);
  }
}


app.get('/api/product',async (req,res) => {
  console.log("product request coming")
  try{
      const result = await hanndleSearchApiResponse(data);
      res.status(200).json({result,data});
      console.log("finished request")
    
  }
  catch (error) {
    console.error(error);
  }
  

})



const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






