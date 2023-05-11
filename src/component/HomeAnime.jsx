import React from "react";
import { useEffect, useState } from "react";
import Star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
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
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data);
        setLoading(true);
      });
  }, []);
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  if (loading === true) {
    return (
      <>
        <div className="md:w-[95%] w-full mx-auto">
          <h1 className="text-white font-semibold md:text-md text-xl md:ml-0 ml-3 mb-8">
            Top Anmine
          </h1>
          <div className="  flex flex-wrap  justify-center">
            <Swiper
              slidesPerView={2}
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
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {anime.map((an, index) => {
                return (
                  <SwiperSlide>
                    <div
                      key={index}
                      className="w-full  mb-14 flex text-white items-center justify-center  "
                    >
                      <div
                        onClick={() => {
                          navigate(`AnimeInfo/${an.mal_id}`);
                        }}
                        className="md:w-[180px] w-40 "
                      >
                        <div className="md:h-60 h-52 w-full  ">
                          <img
                            src={an.images && an.images.jpg.image_url}
                            className="w-full h-full rounded-xl"
                            alt="movie"
                          />
                        </div>
                        <h1 className="m-2 md:text-md text-[12px] h-10">
                          {an.title}
                        </h1>
                        <div className="flex items-center justify-between px-1">
                          <div className="flex items-center ">
                            <img src={Star} className="w-6 " alt="" />
                            <p className="mx-1 ">{an.score}/10</p>
                          </div>
                          <span className="border rounded-xl text-[10px] p-1 ">
                            {an.aired.prop.from.day} /{" "}
                            {an.aired.prop.from.month} /{" "}
                            {an.aired.prop.from.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
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
};

export default HomeAnime;
