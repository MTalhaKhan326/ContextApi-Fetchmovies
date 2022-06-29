import React, { useContext } from 'react'
import App from './App';

    const AppContext = React.createContext()  // Consumer
    const AppProvider=({children})=>{         //Provider
   return <AppContext.Provider value='Talha'>{children}</AppContext.Provider>
    };

    const useGlobalContext = ()=>{
        return useContext(AppContext)    //Buyer
    }

    export {AppContext, AppProvider, useGlobalContext}
  


