import React , {useState , useEffect} from 'react'
// import { InfinitySpin  } from 'react-loader-spinner'
import Star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'

import { ThreeDots } from  'react-loader-spinner'

const AllMovies = () => {

    const navigate = useNavigate()
      
  const [allMovies , setAll] = useState([])
  
  useEffect(()=>{
      fetch("https://api.tvmaze.com/schedule/full")
      .then((res)=> res.json())
      .then((data2=>{
        setAll(data2)
        setLoading(true)
      }))
    })
    const [loading , setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(500);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentMovies = allMovies.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageCount = Math.ceil(allMovies.length / productsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }
   
  return (
    <>
         <div className='pt-32 mb-5  '>
         {/* <InfinitySpin width='200'color="#4fa94d"/> */}
           <h1 className='text-white text-md  mb-8 container mx-auto'>All Tv Show </h1>
            
           <div className='w-full flex-wrap flex text-white items-center justify-center  '>
              {  
                loading ?
                allMovies.length !== 0 && currentMovies.map((mv , index)=>{
                  return(
                    <div
                    onClick={() =>{
                      navigate(  `TvF/${mv._embedded.show.id}`  )
                    }}
                    key={index} className='w-[220px] m-4 '>
                        <div className='h-[300px] w-full  '>
                          {mv._embedded.show.image && mv._embedded.show.image.medium ? (
                              <img
                                src={mv._embedded.show.image.medium}
                                className='w-full h-full rounded-xl'
                                alt='movie'
                              />
                          ) : (
                              <p>No Image Available</p>
                          )}
                        </div>
                        <h1 className='m-2'>{mv._embedded.show.name}</h1>
                        <div className='flex items-center justify-between px-1'>
                            <div className='flex items-center '>
                                <img src={Star} className="w-6 " alt="" />
                                <p className='mx-1 '>8.6/10</p>
                            </div>
                            <p>126min</p>
                            <span className='border rounded-xl px-2'>PG13</span>
                        </div>
                    </div> 
                    
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
              <div className=' my-10  backdrop-blur-sm bg-black/30 px-2 p-2 rounded-2xl text-white w-max flex mx-auto' >
            {pageNumbers.map(number => (
              <div className='mr-2   '>
                <button 
                key={number} 
                onClick={() => setCurrentPage(number)}
                className={currentPage === number ? 'active bg-blue-700 rounded-full px-2' : ''}
              >
                {number}
              </button>
              </div>

            ))}
          </div> 
           </div> 
           
    </>
  )
}

export default AllMovies