import React  from 'react'
import Star from '../assets/star.png'
import Play from '../assets/bouton-jouer.png'
import SlidePage from './SlidePage'
import  { useEffect , useState } from "react";
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Home = () => {


   

  // 
    const navigate = useNavigate();
    useEffect(() => {
        fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=1"
        )
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.results);
            // console.log(movies)
          });
      }, []);
      const [movies, setMovies] = useState([]);
     
  return (
   <>

        <SlidePage/>


        <div className='container mx-auto '>
        <div className='my-10'>
           <h1 className='text-white text-md  mb-8'>Now Showing <span className='text-md text-[#D32444] mx-2'>See More</span></h1>
           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
              movies.map((movie)=>{
                const url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                return(
                    <SwiperSlide>
                          <div   onClick={() => navigate(`movieInfo/${movie.id}`)} className='w-full mb-14 flex text-white items-center justify-center  '>
            <div className='w-[250px] '>
                <div className='h-[280px] w-full  '>
                    <img src={url} className='w-full h-full rounded-xl' alt="movie" />
                </div>
                <h1 className='m-2'>{movie.original_title}</h1>
                <div className='flex items-center justify-between px-1'>
                    <div className='flex items-center '>
                        <img src={Star} className="w-6 " alt="" />
                        <p className='mx-1 '>{movie.vote_average}</p>
                    </div>
                    <p>126min</p>
                    <span className='border rounded-xl text-[10px] p-1 '>{movie.release_date}</span>
                </div>
            </div>
        </div>
                    </SwiperSlide>
                 
                )
            })
        }
        
      </Swiper>
           </div>
           {/*  */}
         
           <div className='my-10 '>
           <h1 className='text-white text-md  mb-8'>Spotlight <span className='text-md text-[#D32444] mx-2'>See More</span></h1>
            
           <div className='w-full flex-wrap flex text-white items-center justify-center  '>
                        
               
                  
                        
              
                
                    <div className='w-[220px] m-4 '>
                    <div className='h-[300px] w-full  '>
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/87/The_Blacklist_season_5_poster.jpg/220px-The_Blacklist_season_5_poster.jpg' className='w-full h-full rounded-xl' alt="movie" />
                    </div>
                    <h1 className='m-2'>the blacklist</h1>
                    <div className='flex items-center justify-between px-1'>
                        <div className='flex items-center '>
                            <img src={Star} className="w-6 " alt="" />
                            <p className='mx-1 '>8.6/10</p>
                        </div>
                        <p>126min</p>
                        <span className='border rounded-xl px-2'>PG13</span>
                    </div>
                </div> 
                  
              
                       
              </div>     
           </div>

           {/*  */}

           <h1 className='text-white text-md  mb-8'>Coming Soon <span className='text-md text-[#D32444] mx-2'>See More</span></h1> 

           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
              movies.map((movie)=>{
                const url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                return(
                    <SwiperSlide>
                        <div className='my-10'>
       
            <div className='w-full flex text-white items-center justify-center  ' onClick={() => navigate(`movieInfo/${movie.id}`)}>
                <div className='w-[350px] '>
                    <div className='h-[250px] w-full relative '>
                        <img src={url} className='w-full h-full rounded-xl' alt="movie" />
                        <div className=' bg-black  absolute top-[75%] left-[10%] p-2 rounded-full '>
                            <img src={Play} alt="" />
                        </div>
                    </div>
                    <h1 className='m-2'>{movie.original_title}</h1>
                    <div className='flex items-center justify-between px-1'>
                        <div className='flex items-center '>
                            <img src={Star} className="w-6 " alt="" />
                            <p className='mx-1 '>{movie.vote_average}/10</p>
                        </div>
                        <p>126min</p>
                        <span className='border rounded-xl px-2'>{movie.release_date}</span>
                    </div>
                </div>
            </div>
           </div>

                    </SwiperSlide>
                 
                )
            })
        }
        
      </Swiper>

        </div>
   </>
  )
}

export default Home