import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Profil from "../assets/profil-de-lutilisateur.png";
import Star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import list from "../assets/liste.png";

const Nav = () => {
  // The useNavigate hook allows navigation to a different route within the app
  const navigate = useNavigate();

  // State to keep track of the search term entered in the search bar
  const [search, setSearch] = useState("");

  // State to keep track of the TV shows that match the search term
  const [tv, setTv] = useState([]);

  const [value, setValue] = useState("");

  // State to keep track of the visibility of the dropdown menu
  const [hide, setHide] = useState(false);
  // Fetch data from the TV Maze API using the search term
  fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then((response) => {
      // Convert the response to JSON
      return response.json();
    })
    .then((data) => {
      // Update the state with the TV shows that match the search term
      setTv(data);
    })
    .catch((err) => console.error(err));

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && value !== "") {
      setSearch(value);
    }
    if(value ===""){setSearch(value)}
  };

  const onChange = (event) => setValue(event.target.value);

  return (
    <>
      <div className="w-full  backdrop-blur-sm bg-black/30 fixed z-30">
        <div className="container    mx-auto p-5 md:flex flex flex-wrap items-center justify-between  ">
          <NavLink to="/">
            <p className="text-[#D32444] w-32">Logo</p>
          </NavLink>
          <div
            onClick={() => {
              // Toggle the visibility of the dropdown menu
              setHide(!hide);
              console.log(hide);
            }}
            className="md:hidden block  w-10"
          >
            <img src={list} alt="" />
          </div>
          <div
            className={
              hide === false
                ? "relative flex  items-center "
                : "relative md:block hidden "
            }
          >
            <div className="absolute max-h-80 overflow-y-scroll  backdrop-blur-sm bg-black/90 text-white top-20   md:w-96 w-full flex-wrap items-center justify-center left-0   rounded-xl flex  ">
              {tv
                .filter((tv) => {
                  // Filter the TV shows based on the search term
                  return tv.show.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((t, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() =>{
                        navigate(`TvF/${t.show.id}`)
                        setSearch('')
                      }
                         }
                      className="w-80 border rounded-2xl px-2 flex items-center m-4 py-4"
                    >
                      <div className="h-[80px] w-[80px]  ">
                        <img
                          src={t.show.image && t.show.image.original}
                          className="w-full h-full rounded-xl"
                          alt="movie"
                        />
                      </div>
                      <div className=" w-64">
                        <h1 className="m-2">{t.show.name}</h1>
                        <div className="flex items-center justify-between px-1">
                          <div className="flex items-center ">
                            <img src={Star} className="w-6 " alt="" />
                            <p className="mx-1 ">
                              {t.show.rating ? t.show.rating.average : ""}/10
                            </p>
                          </div>
                          <p>{t.show.id}</p>
                          <span className="border rounded-xl px-2">PG13</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <input
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              type="search"
              id="search-navbar"
              className="  md:my-0 my-5  md:w-80 w-64 p-2 h-12 pl-10 text-sm text-gray-100 border  border-gray-100 rounded-lg bg-transparent "
              placeholder="Search..."
            />
            <NavLink to="/Login">
              <button
                type="button"
                className="   text-white bg-transparent h-12 mx-2 border border-gray-100 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 "
              >
                <img src={Profil} className="w-4  mr-2 -ml-1" alt="profile" />
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
