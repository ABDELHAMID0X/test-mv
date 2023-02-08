import React from "react";
import Star from "../assets/star.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function HomeTvShows() {
    const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule/full")
      .then((res) => res.json())
      .then((data2) => {
        setTvShows(data2);
      });
  }, []);
  const [tvShows, setTvShows] = useState([]);

  return (
    <>
        <div className="my-10  container mx-auto  ">
          <h1 className="text-white text-md  mb-8">
            TvShows{" "}
            <span className="text-md text-[#D32444] mx-2"  onClick={() => navigate(`AllMovies`)} style={{cursor :' pointer'}} >See More</span>
          </h1>

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
            tvShows ? 
            tvShows.slice(0, 20).map((tvShow, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex-wrap flex text-white items-center justify-center  ">
                    <div className="w-[220px] m-4 "  onClick={() => navigate(`TvF/${tvShow._embedded.show.id}`)}>
                      <div className="h-[300px] w-full  ">
                        {tvShow._embedded.show.image &&
                        tvShow._embedded.show.image.medium ? (
                          <img
                            src={tvShow._embedded.show.image.medium}
                            className="w-full h-full rounded-xl"
                            alt="tvShow"
                          />
                        ) : (
                          <p>No Image Available</p>
                        )}
                      </div>
                      <h1 className="m-2">{tvShow._embedded.show.name}</h1>
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-center ">
                          <img src={Star} className="w-6 " alt="" />
                          <p className="mx-1 ">8.6/10</p>
                        </div>
                        <p>126min</p>
                        <span className="border rounded-xl px-2">PG13</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }) : 'loading'}  
          </Swiper>
        </div>
    </>
  )
}

export default HomeTvShows