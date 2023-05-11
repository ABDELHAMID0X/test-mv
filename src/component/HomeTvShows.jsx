import React from "react";
import Star from "../assets/star.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ThreeDots } from "react-loader-spinner";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function HomeTvShows() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data2) => {
        setTvShows(data2.results);
        setLoading(true);
      });
  }, []);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  if (loading === true) {
    return (
      <>
        <div className="my-10  md:w-[95%] w-full mx-auto  ">
          <h1 className="text-white font-semibold md:text-md text-xl md:ml-0 ml-3 mb-8">
            Top Rated TV Shows
            <span
              className="text-md text-[#D32444] mx-2"
              onClick={() => navigate(`AllMovies`)}
              style={{ cursor: " pointer" }}
            >
              See More
            </span>
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              650: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              1040: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1300: {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {tvShows
              ? tvShows.map((tvShow, index) => {
                  const url = `https://image.tmdb.org/t/p/original${tvShow.poster_path}`;
                  return (
                    <SwiperSlide key={index}>
                      <div
                        onClick={() => navigate(`movieInfo/${tvShow.id}/tv`)}
                        key={index}
                        className="w-full mb-14 flex text-white items-center justify-center  "
                      >
                        <div className="w-[180px] ">
                          <div className="h-[250px] w-full  ">
                            {url && url ? (
                              <img
                                src={url}
                                className="w-full h-full rounded-md bg-center bg-cover object-cover"
                                alt="movie"
                              />
                            ) : (
                              <p>No Image Available</p>
                            )}
                          </div>
                          <h1 className="m-2 h-10">{tvShow.name}</h1>
                          <div className="flex items-center justify-between px-1">
                            <div className="flex items-center ">
                              <img src={Star} className="w-6 " alt="" />
                              <p className="mx-1 ">{tvShow.vote_average}</p>
                            </div>
                            <span className="border rounded-xl px-2">PG13</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })
              : "loading"}
          </Swiper>
        </div>
      </>
    );
  } else if (loading === true) {
    return (
      <>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#D32444"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        ;
      </>
    );
  }
}

export default HomeTvShows;
