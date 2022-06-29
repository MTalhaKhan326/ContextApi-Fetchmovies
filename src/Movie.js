import React from 'react'
import {NavLink} from 'react-router-dom'
import { useGlobalContext } from './Context'
import './movie.css'

const Movie = () => {
  const {movie , isLoading} = useGlobalContext()

  return (
    <>
  <section className='movie-page'>
    <div className='grid-4-col'>{
    movie.map((curmovie)=>{
      
      
        const {imdbID , Title ,Poster} = curmovie;
        const movieName = Title.substring(0,15)
        return <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className='card'>
            <div className='card-info'>
              <h2 className='h2'>{movieName.length>=15 ? `${movieName}...`:movieName}</h2>
              <img className='card-img' src={Poster} alt="" />
            </div>
          </div>
        </NavLink>
      
    })
  }
   </div>
  </section>
  </>
  )
}

export default Movie
/*<div>
        <h2>{curmovie.Title}</h2>
        </div>*/