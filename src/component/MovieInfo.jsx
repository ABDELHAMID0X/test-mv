import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Play from "../assets/jouer.png";
import Star from "../assets/star.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const MovieInfo = () => {
  const { id } = useParams();
  const { media_type } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const url = `https://image.tmdb.org/t/p/original`;
  const [tvTrailer, setTvTrailer] = useState({});
  const [hide, setHide] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        // console.log(movies)
      });

    fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US`
    )
      .then((res) => res.json())
      .then((dt) => {
        setCast(dt.cast);
      });

    fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setTvTrailer(data.results[0]);
      });
    fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setSimilarMovies(data.results.slice(0, 8));
      });
  });

  const [cast, setCast] = useState([]);

  return (
    <>
      <div className="w-full h-max ">
        <div
          key={movies.id}
          style={{
            backgroundImage: `url(${url + movies.backdrop_path})`,
          }}
          className="  text-white w-full md:h-[100vh] h-max   bg-cover bg-center  relative overflow-hidden"
        >
          <div className=" md:absolute relative  top-[20%] left-[10%]  md:w-[1000px]   w-96   items-center     flex md:flex-nowrap flex-wrap md:justify-center  container mx-auto">
            <img
              className="shadow-2xl md:h-[360px] h-52 mt-14 mb-3   object-cover bg-right-bottom  md:w-[300px]  w-36   rounded-md  md:mx-10 mx-0"
              src={url + movies.poster_path}
              alt=""
            />
            {/* div hidden in md */}
            <div className="w-full px-3  md:block hidden">
              <h1
                style={{
                  textShadow:
                    "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
                }}
                className="mx-2  md:text-4xl text-2xl "
              >
                {movies.original_title || movies.name}
              </h1>
              <div className="flex mb-2 items-center  ">
                {
                  //  movies.genres && movies.genres.name && movies.genres.name.map((genre) =>(
                  //   <button
                  //   key={genre}
                  //   type="button"
                  //   className="text-white bg-[#D32444]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2
                  //    focus:outline-none dark:focus:ring-blue-800">
                  //     {genre}
                  //    </button>
                  // ))
                }
              </div>
              <p
                style={{
                  textShadow:
                    "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
                }}
                className="text-gray-100 md:text-md text-sm drop-shadow-2xl"
              >
                {movies.overview}
              </p>
              <div className="flex md:mb-4 mb-1 items-center  px-1">
                <div className="flex items-center ">
                  <img src={Star} className="w-6 " alt="" />
                  <p className="mr-3 ml-1 ">
                    {}
                    <span className="text-gray-100">
                      {movies.vote_average}/10
                    </span>
                  </p>
                </div>
                <p className="mr-3">
                  {movies.runtime}
                  <span className="text-gray-300">min</span>
                </p>
                <span className="border rounded-xl px-2">{}</span>
              </div>
              {/* end her  */}

              <div>
                <div className="flex w-max  items-center">
                  <button
                    type="button"
                    onClick={() => {
                      // Toggle the visibility of the dropdown menu
                      setHide(!hide);
                    }}
                    className="text-gray-300 bg-transparent h-10 mx-2 border border-gray-100 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 "
                  >
                    <img src={Play} className="w-8  mr-2 -ml-1" alt="profile" />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* div block start  */}

        <div className="md:hidden block w-full pt-5">
          <h1
            style={{
              textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
            }}
            className=" mb-2 mx-2 text-center text-white md:text-4xl text-2xl "
          >
            {movies.original_title || movies.name}
          </h1>
          <div>
            <p
              style={{
                textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
              }}
              className="text-gray-100 md:text-md px-4 text-sm drop-shadow-2xl"
            >
              {movies.overview}
            </p>
          </div>
          <div className="mt-3 w-80 mx-auto flex items-center justify-between">
            <div className=" w-2/5 flex">
              <img src={Star} className=" mx-1 w-6" alt="" />
              <span className="text-gray-100">{movies.vote_average}/10</span>
            </div>
            <div className="flex w-max  items-center">
              <button
                type="button"
                onClick={() => {
                  // Toggle the visibility of the dropdown menu
                  setHide(!hide);
                }}
                className="text-gray-300 bg-transparent h-10 mx-2 border rounded-md  border-gray-100 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 "
              >
                <img src={Play} className="w-8  mr-2 -ml-1" alt="profile" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-100 w-full">
          {/* <h1> {movies.release_date} * {movies.runtime}min</h1> */}
        </div>

        {/* end her */}
      </div>
      {/*  */}

      <div
        className={
          hide === false
            ? "hidden "
            : " block  w-full md:h-full h-[100vh]  flex justify-center items-center absolute top-0 backdrop-blur-sm bg-black/60"
        }
        onClick={() => {
          // Toggle the visibility of the dropdown menu
          setHide(!hide);
        }}
      >
        {tvTrailer !== undefined ? (
          // <ReactPlayer
          //   className="relative   react-player"
          //   url={
          //     tvTrailer &&
          //     `https://www.youtube.com/embed/${tvTrailer.key}`
          //   }
          //   controls
          // />

          <iframe
            src={tvTrailer && `https://www.youtube.com/embed/${tvTrailer.key}`}
            className=" relative rounded-2xl auto md:w-[974px] w-80   md:h-[548px] h-80 "
            title="baka"
            frameborder="0"
          ></iframe>
        ) : (
          <p style={{ color: "white" }}>No Trailer available</p>
        )}
      </div>

      {/*  */}

      <div className="container mx-auto my-10 ">
        {cast.length !== 0 ? (
          <div>
            <h1 className="text-[#D32444]  font-semibold md:text-md text-xl uppercase  uppercase w-[85%] mx-auto">
              Top casT
            </h1>
            <div className="flex flex-wrap justify-center ">
              {cast.slice(0, 12).map((ca) => {
                return (
                  <div
                    key={ca.id}
                    className="md:w-80 w-44  my-2 p-2 flex  flew-wrap  items-center"
                  >
                    <div className="md:w-20 mr-1 w-12 md:h-20 h-12">
                      <img
                        className="w-full  ml-0 h-full rounded-full mx-10"
                        src={
                          ca.profile_path === null
                            ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                            : url + ca.profile_path
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-[#99988b]  ">
                      <h1 className="text-gray-100 text-sm ">{ca.name}</h1>
                      <p className="text-sm">{ca.character}</p>
                      <div className="">
                        <p className=""></p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* similar */}

      <div className="   mb-3">
        {similarMovies.length !== 0 ? (
          <div>
            <div className="container mx-auto mb-2">
              <h2 className="text-[#D32444]  font-semibold md:text-md text-xl uppercase  uppercase w-[85%] mx-auto">
                Similar Movies
              </h2>
            </div>
            <div className="md:w-[80%] w-full mx-auto   flex-wrap flex text-white items-center justify-center  ">
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
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {similarMovies.map((movie, index) => {
                  if (movie.poster_path != null) {
                    return (
                      <SwiperSlide key={index}>
                        <Link to={`/movieInfo/${movie.id}/${media_type}`}>
                          <div className="md:w-64 mb-10  w-40 mx-2 my-3 ">
                            <div className=" w-ful  mb-2">
                              <img
                                className="w-full md:h-96 h-60   rounded-sm"
                                src={
                                  movie.poster_path != null &&
                                  `https://image.tmdb.org/t/p/original${movie.poster_path}`
                                }
                                alt=""
                              />
                            </div>
                            <h1 className="h-10 mb-2">
                              {movie.name || movie.original_title}
                            </h1>
                            <div className="flex  items-center justify-between px-1">
                              <div className="flex items-center ">
                                <img src={Star} className="w-6 " alt="" />
                                <p className="mx-1 ">{movie.vote_average}</p>
                              </div>
                              <span className="border rounded-xl text-[10px] p-1 ">
                                {movie.first_air_date || movie.release_date}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MovieInfo;
