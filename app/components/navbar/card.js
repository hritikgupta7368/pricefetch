"use client"
import Account from "./Account"
import { useFormContext } from "@/app/providers/form"
import { useEffect ,useState} from "react"
import {Input,Avatar} from "@nextui-org/react";


const Signin = () => {
  return(
 <div>
 signin
 </div>
    
  )
}
const Login = () => {
  return(
   <div>
    login
   </div>
  )
}

const Card = () => {
  const { formState,toggleForm,settoggleForm } = useFormContext();
  


  return (
    <main className={`w-full h-full bg-white rounded-xl ${toggleForm?'opacity-100 transition-opacity duration-150':''}`}>

      <div className="flex flex-row justify-center pt-5 ">
      <Account settoggleForm={settoggleForm} />
      <button className="text-black  hover:bg-slate-200 duration-150 rounded-full h-10 w-10 left-10" onClick={() =>{settoggleForm(false)}} >&larr;</button>
      </div>

      <div>
      {formState === 'login' && <Login />}
      {formState === 'signin' && <Signin />}
      </div>
       
    </main>
    
    
  )
}

export default Card
