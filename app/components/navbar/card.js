"use client"
import Account from "./Account"
import { useFormContext } from "@/app/providers/form"
import { Input,ImageInput } from "../common/input"
import { useState ,useRef} from "react"



const Signin = () => {
  const { handleFormChange} = useFormContext();
  return(
  <div >
    <h1 className="text-4xl font-extrabold text-center">Sign-Up</h1>

    <div className="flex flex-row justify-center gap-20 mt-6">

        <ImageInput />
       
        <div>
          <Input type="text"  label ="Name" id="username"/>
          <Input type="text"  label ="Username" id="username"/>
          <Input type="password" label ="Password" id="password"/>
        </div>

    </div>

    <div className="flex flex-row justify-center"><button type="submit" className="bg-black text-white rounded-full w-40 h-12 font-bold m-auto hover:opacity-75" >Sign-Up</button></div>

    <div className="flex flex-col items-center mt-3">
          <h1 className="text-gray-400 text-sm">Already Have an Account?</h1>
          <button onClick={() => {handleFormChange('login')}} className="text-black text-lg font-medium hover:opacity-70">Login</button>

        </div>
 </div>
    
  )
}
const Login = () => {

  const { handleFormChange} = useFormContext();


  return(
   <div>
    <h1 className="text-4xl font-extrabold text-center">Log-In</h1>

      <div className="flex flex-col items-center mt-6">

        <Input type="text" placeholder="enter your username" label ="Username" id="username"/>
        <Input type="password" placeholder="enter your password" label ="Password" id="password"/>

      </div>

      
      <div className="flex flex-row justify-center">
        <button type="submit" className="bg-black text-white rounded-full w-40 h-12 font-bold m-auto hover:opacity-75" >Log-in</button>
      </div>

      <div className="border-t-2 w-[80%] mt-4 m-auto text-center">
        Or Login with
      </div>

        <div className="flex justify-center gap-[100px]">
        <button><img src="/icons/google.png" height="45" width="45" className="rounded-full hover:opacity-75"/></button>
        <button><img src="/icons/github.png" height="50" width="50" className="rounded-full hover:opacity-75" /></button>
        </div>

        <div className="flex flex-col items-center mt-3">
          <h1 className="text-gray-400 text-sm">Not yet Registered?</h1>
          <button onClick={() => {handleFormChange('signin')}} className="text-black text-lg font-medium hover:opacity-70">Create an Account</button>

        </div>
     
   </div>
  )
}

const Card = () => {
  const { handleFormChange,formState,toggleForm,settoggleForm } = useFormContext();
  


  return (
    <main className={`absolute shadow-xl w-[624px] h-[550px] bg-white rounded-xl transition-transform duration-300 transform ${toggleForm?'translate-x-0':'translate-x-10'}`}>

      <div className="flex flex-row justify-start pt-5 border-b-2 shadow-sm items-center">

          <button className="text-black  hover:bg-slate-200 duration-150 rounded-full h-12 w-12 ml-10" onClick={() =>{settoggleForm(false);handleFormChange('null')}} >&larr;</button>
          <div className="ml-32 pb-1"><Account settoggleForm={settoggleForm} /></div>
      
      </div>

      <div className="mt-5">
      {formState === 'login' && <Login />}
      {formState === 'signin' && <Signin />}
      </div>
       
    </main>
    
    
  )
}

export default Card
