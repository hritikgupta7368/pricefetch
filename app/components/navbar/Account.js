"use client"
import { useFormContext } from "@/app/providers/form";

const Account = () => {

  const {toggleForm,settoggleForm,formState,handleFormChange,setFormState} = useFormContext();

  return (
  <div className="border-1 border-gray-50 rounded-full">
    <div className="flex flex-row gap-3 font-semibold">
    <button
        onClick={() => {
          settoggleForm(true)
          handleFormChange('login')
          
          }} 
          className={`h-[40px] w-[80px] text-black rounded-full transition-colors duration-300 hover:opacity-80 ${formState === 'login' ? 'bg-black text-white':'bg-white text-black'}`}>Log In</button>
     <button
        onClick={() => {
          settoggleForm(true)
          handleFormChange('signin');
        
          }} 
          className={` h-[40px] w-[80px] text-black rounded-full transition-colors duration-300 hover:opacity-80 ${formState === 'signin' ? 'bg-black text-white':'bg-white text-black'}`}>Sign Up </button>
    </div>
  </div>
  )
}

export default Account
