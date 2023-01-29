import React from 'react'
import Star from '../assets/star.png'
import Play from '../assets/jouer.png'
import { useEffect , useState , useRef} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SlidePage = () => {

    const [search, setSearch] = useState("");
    
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
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         {
                movies.map((movie)=>{
                    const url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    return(
                        <SwiperSlide>
                             <div style={{  backgroundImage: `url(${url})`}}
            className='  text-white w-full h-[700px]  bg-cover md:bg-center md:bg-cover relative overflow-hidden'>
            <div className=' absolute top-[20%] md:left-[5%] left-1 md:w-[500px] w-80  h-[300px]      container mx-auto'>
                <img className='h-full rounded-2xl  mx-9 shadow-xl  shadow-black' src={url} alt="" />
                <h1 className='mx-2 my-3 text-4xl'>{movie.original_title}</h1>
                    <div className='flex mb-10 items-center  px-1'>
                        <div className='flex items-center '>
                            <img src={Star} className="w-6 " alt="" />
                            <p className='mr-3 ml-1 '>{movie.vote_average}<span className='text-gray-500'>/10</span></p>
                        </div>
                        <p className='mr-3'>126<span className='text-gray-500'>min</span></p>
                        <span className='border rounded-xl px-2'>{movie.release_date}</span>
                    </div>
                    <div>
                    <div className='flex items-center'>
                    <button type="button" class="text-white bg-[#D32444]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none dark:focus:ring-blue-800">Book now</button>
                    <button type="button" class="text-gray-300 bg-transparent h-10 mx-2 border border-gray-100 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 ">
                        <img src={Play} className='w-8  mr-2 -ml-1' alt="profile" />
                        Watch Trailer
                    </button>
                    </div>
                    
                    </div>    
            </div>
            
        </div>
                        </SwiperSlide>
                    )
                })
            }
       
      </Swiper>
   </>
  )
}

export default SlidePage