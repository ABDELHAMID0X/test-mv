import React from "react";
import Star from "../assets/star.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Play from "../assets/bouton-jouer.png";
import { ThreeDots } from "react-loader-spinner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function HomeComSoon() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(true);
      });
  }, []);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading === true) {
    return (
      <>
        <div className="my-10 md:w-[95%] w-full container mx-auto">
          <h1 className="text-white font-semibold md:text-md text-xl md:ml-0 ml-3 mb-2">
            Upcoming Movies
            <span
              className="text-md text-[#D32444] mx-2"
              onClick={() => navigate(`AllCom`)}
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
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              "@2.00": {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              "@2.10": {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movies.map((movie, index) => {
              const url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
              return (
                <SwiperSlide key={index}>
                  <div className="my-10" key={index}>
                    <div
                      className="w-full flex text-white items-center justify-center  "
                      onClick={() => navigate(`movieInfo/${movie.id}/movie`)}
                      key={index}
                    >
                      <div className="w-[350px] ">
                        <div className="h-[250px] w-full relative ">
                          <img
                            src={url}
                            className="w-full h-full rounded-xl"
                            alt="movie"
                          />
                          <div className=" bg-black  absolute top-[75%] left-[10%] p-2 rounded-full ">
                            <img src={Play} alt="" />
                          </div>
                        </div>
                        <h1 className="m-2">{movie.original_title}</h1>
                        <div className="flex items-center justify-between px-1">
                          <div className="flex items-center ">
                            <img src={Star} className="w-6 " alt="" />
                            <p className="mx-1 ">{movie.vote_average}/10</p>
                          </div>
                          <p>126min</p>
                          <span className="border rounded-xl px-2">
                            {movie.release_date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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

export default HomeComSoon;
