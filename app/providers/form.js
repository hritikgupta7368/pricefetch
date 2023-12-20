"use client"
import { createContext,useContext,useState } from "react";
import { useSearchContext } from "./search";

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
  };


export const FormProvider = ({ children }) => {

  


    const [toggleForm,settoggleForm] = useState(false)
    const [formState, setFormState] = useState('login'); 

   
  
    const handleFormChange = (formName) => {
      setFormState(formName); 
    };
  
    const contextValue = {

      toggleForm,
      settoggleForm,
      

      formState,
      handleFormChange,
      setFormState


    };
  
    return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
  };