import React from "react";
import SlidePage from "./SlidePage";
import HomeMovies from "./HomeMovies";
import HomeTvShows from "./HomeTvShows";
import HomeComSoon from "./HomeComSoon";
import HomeAnime from "./HomeAnime";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Home = () => {

  return (
    <>
      <SlidePage  />
      <HomeMovies />
      <HomeTvShows />
      <HomeComSoon />
      <HomeAnime/>
    </>
  );
};

export default Home;
