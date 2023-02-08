import React from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Star from '../assets/star.png'


const MovieP5 = () => {

    const navigate = useNavigate();
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=2"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }, []);
    const [movies, setMovies] = useState([]);
  



  return (
    <>
        
        <div className='w-full   flex-wrap flex text-white items-center justify-center  '>
              {
                movies.length !== 0 && movies.map((movie , index)=>{
                    const url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  return(
                    <div
                  onClick={() => navigate(`movieInfo/${movie.id}`)}
                  key={index}
                  className=" mx-4 mb-14 flex text-white  justify-center  "
                >
                  <div className="w-64  ">
                    <div className=' w-ful mb-2'>
                        <img 
                        className='h-80 rounded-sm'
                        src={url} alt="" />
                    </div>
                    <h1 className="h-10 mb-2">{movie.original_title}</h1>
                    <div className="flex  items-center justify-between px-1">
                      <div className="flex items-center ">
                        <img src={Star} className="w-6 " alt="" />
                        <p className="mx-1 ">{movie.vote_average}</p>
                      </div>
                      <p>126min</p>
                      <span className="border rounded-xl text-[10px] p-1 ">
                        {movie.release_date}
                      </span>
                    </div>
                  </div>
                </div>
                  )
                })
              }         
              </div>    
    </>
  )
}

export default MovieP5