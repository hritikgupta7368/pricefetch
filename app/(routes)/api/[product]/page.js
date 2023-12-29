"use client"
import Navbar from "@/app/components/navbar/navbar"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "@/app/components/products/components/card";
import { useState,useEffect } from "react";
import axios from "axios";
import RecentCard from "@/app/components/products/components/recentcard";




const Product = ({params}) => {

  const [products, setProducts] = useState([]);
  const[displayData,setDisplayData] = useState({})
  const [lowestPriceDetails, setLowestPriceDetails] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);
 
 

 
  const fetchNewProducts = () => {
    
    const updatedProducts = [...products, ...newProducts].sort((a, b) => a.price - b.price);

    setProducts(updatedProducts);
    const lowestPriceProduct = updatedProducts[0];
    setLowestPriceDetails(lowestPriceProduct);
    setDataLoaded(true);
  };

   useEffect(() => {
   
    async function click(){
      try{
        const response = await axios.get('http://localhost:8001/api/product');
        const {result,data} = response.data;
        console.log(result)
        setProducts(result.data)
        setDisplayData(data)
       

      }
      catch(error){
        console.log('Error fetching data:', error);
      }
    }
    click()
    
  },[products])

  

  
  
  return (
    <main className="h-screen w-screen">
      <Navbar />
     <div className="border-b-2 border-slate-200 h-[25px] w-full"></div>

     <section className="w-full h-full  flex flex-row gap-2 mt-2">

      <div className=" w-10 h-52 "></div>

      <div className=" w-[40%] h-[60%] shadow-xl rounded-xl"><img src={displayData.image_url} className="w-full h-full rounded-xl sha" /></div> 

      <container className="overflow-y-auto h-full w-[60%] px-3 pt-6 ">
        <div>Online Price Comparison</div>
        <div className="text-3xl text-black font-bold  h-[20%] w-full">{displayData.product_name}</div>
        <div className="w-full h-[10%] text-3xl font-extrabold mt-4">{dataLoaded && `Rs ${lowestPriceDetails.price}`}</div>
        <div className="overflow-y-auto h-[90%]  w-full">
       {products && products.map((product,index) => (<ProductCard  productName={product.product_title} price={product.offer.price} marketplace={product.offer.store_name} link={product.offer.offer_page_url} image={product.product_photos[0]}/>))}
       </div>
      </container>
      
    
     </section>
     {/* <section className="w-full border-t-2 h-[500px]">
      <div className="text-black text-3xl font-bold">Results Based on Your Recent Search</div>
      <div className=" flex w-full  h-[80%] overflow-x-auto">
        <RecentCard />
        
      </div>
     </section> */}
     
    </main>
  )
}

export default Product
