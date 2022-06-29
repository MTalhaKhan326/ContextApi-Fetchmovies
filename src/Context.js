//Context (WareHouse)
//Provider
//Consumer / UseContext()
import React, { useContext, useEffect, useState } from 'react'
const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

//We need to create a provider function
const AppProvider = ({children}) =>{

  const[isLoading , setIsLoading] = useState(true)
  const[movie, setMovie] = useState([])
  const[isError,setIsError]=useState({show:"false",msg:""})
  const[Query,setQuery]=useState('titanic')

   const getMovies =async(url)=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if(data.Response === "True"){
          setIsLoading(false)
          setMovie(data.Search)
        }
        else{
            setIsError({
                show:"True",
                msg:data.Error,
            })

        }

    } catch (error) {
        console.log(error)
    }
   }

    useEffect(()=>{
     let timerOut =   setTimeout(()=>{
            getMovies(`${API_URL}&s=${Query}`);
        },800)
        return ()=> clearTimeout(timerOut)
    }, [Query]);

    return( <AppContext.Provider value={{isLoading , isError ,movie, Query, setQuery}}>
        {children}
    </AppContext.Provider>);
};

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext , AppProvider , useGlobalContext}