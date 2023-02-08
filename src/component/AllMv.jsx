import React , {useEffect , useState} from 'react'
import Star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
import MovieP2 from './MovieP2'
import MovieP3 from './MovieP3'
import MovieP4 from './MovieP4'
import MovieP5 from './MovieP5'

import { ThreeDots } from  'react-loader-spinner'

const AllMv = () => {

         
    const navigate = useNavigate();
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=6"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          setLoading(true)
        });
    }, []);
    const [movies, setMovies] = useState([]);
    const [loading , setLoading] = useState(false)
    
  
  return (
    <>
         <div className='pt-32  '>
         {/* <InfinitySpin width='200'color="#4fa94d"/> */}
           <h1 className='text-white text-md  mb-8 container mx-auto'>All Tv Show </h1>
            
           {
            
            
            
            
            <div className='w-full   flex-wrap flex text-white items-center justify-center  '>
              {
                loading ?
                movies.length !== 0 && movies.map((movie , index)=>{
                    const url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  return(
                    <div
                  onClick={() => {
                    navigate(`movieInfo/${movie.id}`)
                  }}
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
                : <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#D32444" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                 /> }         
              </div>    }
           </div>
           <MovieP2/>
           <MovieP3/>
           <MovieP4/>
           <MovieP5/>
    </>
  )
}

export default AllMv