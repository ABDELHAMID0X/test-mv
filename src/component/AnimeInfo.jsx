import React from 'react'
import Play from '../assets/jouer.png'
import Star from '../assets/star.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Quiter from '../assets/retirer.png'

const AnimeInfo = () => {

  const [hide, setHide] = useState(false);
  const { id } = useParams();
  useEffect(()=>{
    fetch(
      `https://api.jikan.moe/v4/anime/${id}`
    )
    .then((res) => res.json())
    .then((data) => {
      setAnime(data.data);
    });
  });

  const [anime , setAnime] = useState([])
  return (
    <>
        <div
        style={{
          backgroundImage: `url(${anime.trailer && anime.trailer.images.maximum_image_url})`,
        }}
        className=" relative  text-white w-full md:h-[100vh] h-[1200px]  bg-cover bg-center   relative overflow-hidden"
      >
        <div className=" absolute md:top-[30%] top-[10%]  md:left-[5%] left-1 md:w-[1000px] w-96  h-[300px] items-center     flex md:flex-nowrap flex-wrap justify-center  container mx-auto">
          <img className="shadow-2xl h-96 md:w-80 w-80 rounded-xl md:mx-10 mx-0" src={anime.images && anime.images.jpg.image_url} alt="" />
            <div className="">
            <h1 style={{textShadow: '1px 1px 2px black, 0 0 1em black, 0 0 0.2em black'}}  className="mx-2 my-3 text-4xl">{ anime &&  anime.title}</h1>
            <div className="flex mb-2 items-center  ">
              {
                
                //  anime.genres.name && anime.genres.name.map(name =>(
                //   <button
                //   key={name}
                //   type="button"
                //   className="text-white bg-[#D32444]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 
                //    focus:outline-none dark:focus:ring-blue-800">
                //     {name}
                //    </button>
                // ))
              }
            </div>
          <p style={{textShadow: '1px 1px 2px black, 0 0 1em black, 0 0 0.2em black'}} className="text-gray-100 text-sm drop-shadow-2xl">{anime.synopsis}</p> 
          <div className="flex mt-2 md:mb-4 mb-1 items-center  px-1">
            <div className="flex  items-center ">
              <img src={Star} className="w-6 " alt="" />
              <p className='mr-2 '>
                <span className="">{anime.score}/10</span>
              </p>
            </div>
            <p className="mr-2">
              126<span className="text-gray-500">min</span>
            </p>
            <span className="border rounded-xl px-2"> {anime.aired && anime.aired.prop.from.day}/{anime.aired && anime.aired.prop.from.month}/{anime.aired && anime.aired.prop.from.year} </span>
          </div>
          <div>
            <div className="flex w-max  items-center">
              <button 
                          onClick={() => {
                            // Toggle the visibility of the dropdown menu
                            setHide(!hide);
                            console.log(hide);
                          }}
                type="button"
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
     
    <div className={ hide === false
                ? "hidden "
                : " block  w-full md:h-full h-[1200px] flex justify-center items-center absolute top-0 backdrop-blur-sm bg-black/60"}>
   <div className='relative'>
   <iframe  className='rounded-2xl auto md:w-[974px] w-96   md:h-[548px] h-80 '  src={anime.trailer && anime.trailer.embed_url} title="TVアニメ『BLEACH 千年血戦篇』ティザーPV／２０２２年１０月放送開始" frameborder="0" allow={hide === false ?  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" : "stopVideo"} allowfullscreen></iframe>
    <span
                  onClick={() => {
                    // Toggle the visibility of the dropdown menu
                    setHide(!hide);
                  }}
    className='absolute top-0  right-0 '><img src={Quiter} alt="" /></span>
   </div>
    </div>
    </>
  )
}

export default AnimeInfo