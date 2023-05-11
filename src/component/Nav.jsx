import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import list from "../assets/liste.png";

const Nav = () => {
  // The useNavigate hook allows navigation to a different route within the app
  const navigate = useNavigate();

  // State to keep track of the search term entered in the search bar

  // State to keep track of the TV shows that match the search term
  const [tv, setTv] = useState([]);

  const [value, setValue] = useState("");
  const [icml, seticml] = useState("");
  // State to keep track of the visibility of the dropdown menu
  const [hide, setHide] = useState(true);
  // Fetch data from the TV Maze API using the search term
  fetch(`
  https://api.themoviedb.org/3/search/multi?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&query=${icml}&page=1&include_adult=false`)
    .then((response) => {
      // Convert the response to JSON
      return response.json();
    })
    .then((data) => {
      // Update the state with the TV shows that match the search term
      setTv(data.results);
      // console.log(data)
    })
    .catch((err) => console.error(err));

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && value !== "") {
      seticml(value);
    }
    if (value === "") {
      seticml(value);
    }
  };

  const onChange = (event) => setValue(event.target.value);
  const url = "https://image.tmdb.org/t/p/original";

  const tp = [
    {
      name: "Popular",
      value: "popular",
    },
    {
      value: "top_rated",
      name: "Top rated",
    },
    {
      value: "now_playing",
      name: "Now playing",
    },
    {
      value: "upcoming",
      name: "Upcaming",
    },
  ];

  return (
    <>
      <div className="w-full h-max backdrop-blur-sm bg-black/30 fixed z-30">
        <div className="container    mx-auto px-5 md:py-5 py-2 md:flex flex flex-wrap items-center justify-between  ">
          <NavLink to="/">
            <p
              onClick={(e) => {
                setHide(true);
              }}
              className="text-[#D32444] w-32"
            >
              Logo
            </p>
          </NavLink>
          <div
            onClick={() => {
              // Toggle the visibility of the dropdown menu
              setHide(!hide);
            }}
            className="sm:hidden block  w-8"
          >
            <img className="w-full" src={list} alt="" />
          </div>
          <div
            className={
              hide === false
                ? "relative flex  items-center  flex-wrap "
                : "relative sm:block hidden "
            }
          >
            <div className="absolute max-h-80 overflow-y-scroll  backdrop-blur-sm bg-black/90 text-white top-20   md:w-96 w-full flex-wrap items-center justify-center left-0   rounded-xl flex  ">
              {tv
                .filter((tg) => tg.media_type !== "person")
                .map((t, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(`movieInfo/${t.id}/${t.media_type}`);
                        seticml("");
                        setHide(true);
                      }}
                      className="w-80 border rounded-2xl px-2 flex items-center m-4 py-4"
                    >
                      <div className="h-[100px] w-[90px]  ">
                        <img
                          src={
                            t.poster_path || t.backdrop_path !== null
                              ? url + t.poster_path || url + t.backdrop_path
                              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                          }
                          className="w-full h-full rounded-xl"
                          alt="movie"
                        />
                      </div>
                      <div className=" w-64">
                        <h1 className="m-2">{t.original_title || t.name}</h1>
                        <div className="flex items-center justify-between px-1">
                          <div className="flex items-center ">
                            <img src={Star} className="w-6 " alt="" />
                            <p className="mx-1 ">{t.vote_average}/10</p>
                          </div>
                          <p>{}</p>
                          <span className="border rounded-xl px-2">
                            {t.media_type}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex items-center">
              <input
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                type="search"
                id="search-navbar"
                className="  md:my-0 my-5  md:w-80 w-60 p-2 h-12 pl-10 text-sm text-gray-100 border  border-gray-100 rounded-lg bg-transparent "
                placeholder="Search..."
              />
              <select
                style={{
                  backgroundImage:
                    "linear-gradient(to right top, #0b0c17, #0f0e25, #130e33, #1c0a3e, #2b0047)",
                }}
                name=""
                id=""
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max mx-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  setHide(true);
                  navigate(`AllMv/${selectedValue}`);
                }}
              >
                {tp.map((option) => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
