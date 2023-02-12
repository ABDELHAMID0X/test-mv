import React from 'react'
import { useEffect , useState } from 'react';
import Star from '../assets/star.png'
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
const HomeAnime = () => {
  
  const navigate = useNavigate(); 
  useEffect(() => {
    fetch(
      "https://api.jikan.moe/v4/top/anime"
    )
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data);
        
      });
  }, []);
  const [anime, setAnime] = useState([]);
    
  

  return (
    <>
          
          <div className='container mx-auto'>
          <h1 className="text-white text-md  mb-8">
          Movies{" "}
          <span
             
            className="text-md text-[#D32444] mx-2"
            style={{ cursor: " pointer" }}
          >
            See More
          </span>
        </h1>
          <div className='  flex flex-wrap  justify-center'>
          
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            
            1040: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1260: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
            {
              anime.map((an)=>{
                return(
                  <SwiperSlide>
                  <div
                  key={an.mal_id}
                  className="w-full  mb-14 flex text-white items-center justify-center  "
                  >
                  <div
                   onClick={()=>{
                    navigate(`AnimeInfo/${an.mal_id}`)
                  }}
                  className="w-[250px] ">
                    <div className="h-[280px] w-full  ">
                      <img
                        src={an.images && an.images.jpg.image_url}
                        className="w-full h-full rounded-xl"
                        alt="movie"
                      />
                    </div>
                    <h1 className="m-2 h-10">{an.title}</h1>
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center ">
                        <img src={Star} className="w-6 " alt="" />
                        <p className="mx-1 ">{an.score}/10</p>
                      </div>
                      <p>126min</p>
                      <span className="border rounded-xl text-[10px] p-1 ">
                        {an.aired.prop.from.day} / {an.aired.prop.from.month} / {an.aired.prop.from.year}
                      </span>
                    </div>
                  </div>
                  </div>
                  </SwiperSlide>
                )
              })
            }
             </Swiper>
          </div>
          </div>
    </>
  )
}

export default HomeAnime

