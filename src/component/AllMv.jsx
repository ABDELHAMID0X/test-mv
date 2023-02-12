import React , {useEffect , useState} from 'react'
import Star from '../assets/star.png'
import { Link } from 'react-router-dom'


import { ThreeDots } from  'react-loader-spinner'

const AllMv = () => {

         
    
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          setLoading(true)
        });
    },);
    const [movies, setMovies] = useState([]);
    const [loading , setLoading] = useState(false)
    const [page , setPage] = useState(1)   
  
  return (
    <>
         <div className='pt-32  '>
         {/* <InfinitySpin width='200'color="#4fa94d"/> */}
           <h1 className='text-white text-md  mb-8 container mx-auto'>All movies </h1>
            
           {
            
            
            
            
            <div className='w-full   flex-wrap flex text-white items-center justify-center  '>
              {
                loading ?
                movies.length !== 0 && movies.map((movie , index)=>{
                    const url = `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  return(
                    <Link to={`/movieInfo/${movie.id}/movie`} >
                      <div
                  key={index}
                  className=" mx-4 mb-14 flex text-white  justify-center  "
                >
                  <div className="md:w-60   w-40 ">
                    <div className=' w-full mb-2'>
                        <img 
                        className='md:h-80 h-56 w-full rounded-md'
                        src={url} alt="" />
                    </div>
                    <h1 className="h-10 mb-2">{movie.original_title}</h1>
                    <div className="flex  items-center justify-between px-1">
                      <div className="flex items-center ">
                        <img src={Star} className="w-6 " alt="" />
                        <p className="mx-1 ">{movie.vote_average ? movie.vote_average : "6.6" }</p>
                      </div>
                      <span className="border rounded-xl text-[10px] p-1 ">
                        {movie.release_date}
                      </span>
                    </div>
                  </div>
                </div>
                    </Link>
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
              <div className=' my-10  backdrop-blur-sm bg-black/30 px-2 p-2 rounded-2xl text-white w-max flex mx-auto' >
            
              <div className=''>
                    {
                      page >1 ? <input   type="submit" value="back" onClick={()=>{
                        setPage(page-1)
                    }} className='active  mx-1 bg-blue-700 rounded-full px-2'/>

                     :  <input  disabled type="submit" value="back"
                     className=' mx-1 bg-blue-700 rounded-full px-2'/>
}  

                      <input  type="submit" value={page} onClick={()=>{
                        setPage(page+1)
                      }} className='active mx-1 bg-blue-700 rounded-full px-2'/>
                      <input  type="submit" value="next" onClick={()=>{
                        setPage(page+1)
                      }} className='active mx-1 bg-blue-700 rounded-full px-2'/>
        
                
              </div>
           </div>
      
    </>
  )
}

export default AllMv