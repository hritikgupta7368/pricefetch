"use client"
import { useSearchContext } from "@/app/providers/search"
import axios from "axios"
import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';


const ResultCard = ({response,link}) =>{
  const {SearchShow,handleSearchShow} = useSearchContext()

  const router = useRouter();

  function handleLink(){
        handleSearchShow(false)
        router.push(link);

        }
  return(
  
  <div className="bg-white w-full h-[250px] rounded-xl mt-1 flex flex-row justify-evenly items-center ">
  <div className="w-[200px] h-[200px] "><img src = {response.image_url} className="h-full w-full"/> </div>
  <div className="h-[150px] w-[500px] text-2xl font-semibold overflow-hidden">{response.product_name}
  <div className="text-sm text-gray-500">{response.asin}</div></div>
  
  <button className="hover:bg-white/30" onClick={() => {handleLink()}}><img src ="/icons/redirect.png" height="40" width="40"/></button>
 </div>)
}



const Search = () => {

  const {SearchShow,handleSearchShow} = useSearchContext()
  const [Url,setUrl] = useState('')
  const [response,setResponse] = useState(null)
  const [link,setLink] = useState('')
  
 

 
  function handleSubmit(){ 

   if(Url) {

    const loadingToastId = toast.loading('Loading...', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, 
    });
   
        axios.post("http://localhost:8001/api/url",{ inputUrl : Url })
    
        .then((response) => {
         
          if (response.status === 200) {
            toast.dismiss(loadingToastId);
            const {message,result,redirectLink} = response.data
        
              setResponse(result)
              setLink(redirectLink)

              if(!toast.isActive()){
              toast.success(message,{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
              })
              }
          
          } 
          }
        )
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            toast.dismiss(loadingToastId);
            const errorMessage = error.response.data.error;
            if(!toast.isActive()){

            toast.error(errorMessage, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,});

            }

            setUrl('')
  
            
          } else {
            console.error('Unexpected error occurred:', error.message);
            
          }
        });
      }
      else{
        
        toast.error("empty input", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,});
          setUrl('')
        }
      
     

   
  }


  return (
    <div
    className={`rounded-full w-[450px] h-[50px] z-10 ${SearchShow ?'absolute w-[900px] h-[80px] left-[180px] translate-y-32 z-10 transition duration-300':' transition duration-300'}`}>
     
    <container className={`h-full w-full  rounded-full flex flex-row items-center border-2 border-gray-300 ${SearchShow ?'transition duration-300':'transition duration-300'}`}>
            <input type='text' placeholder=" Search Product" value={Url}
              className={`h-full w-[80%] outline-none rounded-full rounded-e-none text-gray-500 font-mono text-xl`}
              onClick={() =>{handleSearchShow(true) }}

              onChange={(event) => {setUrl(event.target.value)}}/>
            <button onClick={()=>{handleSubmit()}}
              className={`bg-white h-full w-[10%] grayscale ${SearchShow?'bg-white':'hidden'}`}>&#128269;</button>
            <button 
              onClick={() =>{handleSearchShow(false) }}
              className={`bg-white h-full w-[10%] rounded-e-full grayscale ${SearchShow?'':'hidden'}`}>&#x274C;</button>
    </container>
    
    { response  && SearchShow && <ResultCard response={response} link={link} />}
    
    
   
    </div>
  )
}
export default Search
