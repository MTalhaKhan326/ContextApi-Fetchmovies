import React, { useContext } from 'react'
import {AppContext} from './Context.js'
import {useGlobalContext} from './Context'
import Movie from './Movie'
import Search from './Search'


const Home = () => {

  return (
    <>
   <Search />
   <Movie />
   </>
  )
}

export default Home