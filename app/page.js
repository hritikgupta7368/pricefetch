"use client"
import Navbar from "./components/navbar/navbar";
import { useSearchContext } from "./providers/search";
import { useFormContext } from "./providers/form";

import Card from "./components/navbar/card";






const Hero =() =>{

  const {toggleForm,settoggleForm} = useFormContext();
  

return(
  <div className={`mt-16  ${toggleForm ? 'hidden':''}`}>
  <h1 className="text-9xl font-bold text-gray-600 ">PriceFetch</h1>
  <br/>
  <p className="text-3xl font-semibold mt-7 ">Saves time and Money</p>
  <div className="inline text-white font-semibold text-4xl">Get Started</div>
  <button onClick={() => {settoggleForm(true)}} className=" mt-6 ml-7 w-[60px] h-[60px] bg-black text-xl font-semibold text-white rounded-full">&rarr;</button>
  </div>
)
}


const Homepage = () => {
    const {SearchShow} = useSearchContext();
    const {toggleForm} = useFormContext();
    
    

 
  return (
    <main >

        <Navbar />

        <div className={` h-[550px] w-[1200px] mt-16 mx-auto ${SearchShow ? 'h-screen w-screen blur pointer-events-none'  : ''}`}>

        <container className="flex flex-row justify-between h-full w-full ">

          <section className="h-full w-[52%] ">
              {toggleForm   &&  <Card />}
              <Hero />
          </section>

          <section >
            <img src="/highlight.png" height="500" width="500"/>
          </section>

        </container>
        </div>
       
  
    </main>





  )
}

export default Homepage;
