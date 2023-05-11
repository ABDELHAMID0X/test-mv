import React , {useState , useEffect} from 'react'
// import { InfinitySpin  } from 'react-loader-spinner'
import Star from '../assets/star.png'
import { Link } from 'react-router-dom'
import { ThreeDots } from  'react-loader-spinner'
import left from '../assets/left-arrow.png'
import right from '../assets/right-arrow.png'

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
           <div className='w-[85%] mx-auto mb-5'>
           <h1 className='text-[#D32444] font-semibold font-semibold md:text-md text-xl ml-0 uppercase  mb-8'>All  upcoming </h1>
         
          
    
           </div>
            
           <div className='w-full flex-wrap flex text-white items-center justify-center  '>
              {  
                loading ?
                allMovies.map((mv , index)=>{
                  const url = `https://image.tmdb.org/t/p/original${mv.poster_path}`
                  return(
                    <Link to={`/movieInfo/${mv.id}/movie`} >
                         <div
                    
                    key={index} className='md:w-60 w-36 m-4 '>
                        <div className=' w-full md:h-80 h-52  '>
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
                        <h1 className='m-2 md:text-[16px] text-[12px] h-10'>{ mv.original_title}</h1>
                        <div className='flex items-center justify-between px-1'>
                            <div className='flex items-center '>
                                <img src={Star} className="w-6 " alt="" />
                                <p className='mx-1 '>{mv.vote_average ? mv.vote_average : "6.6" }</p>
                            </div>
                            
                            <span className='border rounded-xl md:text-[12px] text-[10px] px-2'>{mv.release_date}</span>
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
           <div className=' my-10  backdrop-blur-sm bg-black/30 px-2 p-2 rounded-2xl text-white w-max  flex items-center mx-auto' >
            
            <div className='flex items-center '>
            {
                      page >1 ? <button     onClick={()=>{
                        setPage(page-1)
                    }} className='active  mx-1 bg-blue-700 rounded-full '><img className='w-8 p-2' src={left} alt="" /></button>

                     :  <button  disabled type="submit" 
                     className=' mx-1 bg-blue-700 rounded-full '><img className='w-8 p-2' src={left} alt="" /></button>
}  

                      <button  type="submit"  onClick={()=>{
                        
                      }} className='active mx-2  bg-blue-700 rounded-md py-1 px-2'>{page}</button>
                      <button    onClick={()=>{
                        setPage(page+1)
                      }} className='active mx-1  bg-blue-700 rounded-full '> <img className='w-8 p-2' src={right} alt="" /> </button>
        
                            </div>
         </div>
           
    </>
  )
}

export default AllCom