"use client"
import { createContext,useContext,useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext);
  };

export const SearchProvider = ({ children }) => {
    const [SearchShow, setSearchShow] = useState(false); 
  
    const handleSearchShow = (val) => {
        setSearchShow(val); 
    };
    const contextValue = {
        SearchShow,
        handleSearchShow: setSearchShow,
        setSearchShow
      };
    
      return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
    };