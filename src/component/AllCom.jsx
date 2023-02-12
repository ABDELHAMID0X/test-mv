import React , {useState , useEffect} from 'react'
// import { InfinitySpin  } from 'react-loader-spinner'
import Star from '../assets/star.png'
import { Link } from 'react-router-dom'
import { ThreeDots } from  'react-loader-spinner'

const AllCom = () => {

      
  const [allMovies , setAll] = useState([])
  
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=${page}`)
      .then((res)=> res.json())
      .then((data2=>{
        setAll(data2.results)
        setLoading(true)
      }))
    })
    const [loading , setLoading] = useState(false)  
    const [page , setPage] = useState(1)

  
   
  return (
    <>
         <div className='pt-32 mb-5  '>
         {/* <InfinitySpin width='200'color="#4fa94d"/> */}
           <div className='flex items-center mb-5 justify-between flex-wrap container mx-auto'>
           <h1 className='text-white text-md w-32   '>All Tv Show </h1>
         
          
    
           </div>
            
           <div className='w-full flex-wrap flex text-white items-center justify-center  '>
              {  
                loading ?
                allMovies.map((mv , index)=>{
                  const url = `https://image.tmdb.org/t/p/original${mv.poster_path}`
                  return(
                    <Link to={`/movieInfo/${mv.id}/movie`} >
                         <div
                    
                    key={index} className='md:w-60 w-40 m-4 '>
                        <div className=' w-full md:h-80 h-56  '>
                          {url? (
                              <img
                                src={url}
                                className='w-full h-full rounded-md'
                                alt='movie'
                              />
                          ) : (
                              <p>No Image Available</p>
                          )}
                        </div>
                        <h1 className='m-2 h-10'>{ mv.original_title}</h1>
                        <div className='flex items-center justify-between px-1'>
                            <div className='flex items-center '>
                                <img src={Star} className="w-6 " alt="" />
                                <p className='mx-1 '>{mv.vote_average ? mv.vote_average : "6.6" }</p>
                            </div>
                            
                            <span className='border rounded-xl text-[12px] px-2'>{mv.release_date}</span>
                        </div>
                    </div> 
                    
                    </Link>
                   ) 
                  
                } )
            : <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#D32444" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
             />  }       
              </div>    
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

export default AllCom