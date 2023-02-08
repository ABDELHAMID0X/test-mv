import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Play from "../assets/jouer.png";
import Star from "../assets/star.png";

import { ThreeDots } from  'react-loader-spinner'


const TvF = () => {
  const { id } = useParams();
  const [tv, setTv] = useState([]);
  fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setTv(data);
      setLoading(true)
    });

    const [cast , setCast] = useState([])
    const [loading , setLoading] = useState(false)
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
    .then((res)=> res.json())
    .then((dt)=>{
      setCast(dt)
     
    })

    // fetch(`https://api.tvmaze.com/shows/${id}/images`)
    // .then((res)=>res.json())
    // .then((img)=>{
    
    // })

    const [number , setNumber] = useState(12)
   

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${tv.image && tv.image.original})`,
        }}
        className="  text-white w-full md:h-[100vh] h-[1200px]  bg-cover bg-center  relative overflow-hidden"
      >
        <div className=" absolute md:top-[30%] top-[10%]  md:left-[5%] left-1 md:w-[1000px] w-96  h-[300px] items-center     flex md:flex-nowrap flex-wrap justify-center  container mx-auto">
          <img className="shadow-2xl h-96 md:w-96 w-80 rounded-xl md:mx-10 mx-0" src={tv.image && tv.image.original} alt="" />
            <div className="">
            <h1 style={{textShadow: '1px 1px 2px black, 0 0 1em black, 0 0 0.2em black'}}  className="mx-2 my-3 text-4xl">{tv.name}</h1>
            <div className="flex mb-2 items-center  ">
            {
                  
                  tv.genres && tv.genres.map(genre =>(
                    <button
                    key={genre}
                    type="button"
                    className="text-white bg-[#D32444]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 
                     focus:outline-none dark:focus:ring-blue-800">
                      {genre}
                     </button>
                  ))
                }
            </div>
          <p style={{textShadow: '1px 1px 2px black, 0 0 1em black, 0 0 0.2em black'}} className="text-gray-100 drop-shadow-2xl">{tv.summary}</p> 
          <div className="flex md:mb-4 mb-1 items-center  px-1">
            <div className="flex items-center ">
              <img src={Star} className="w-6 " alt="" />
              <p className="mr-3 ml-1 ">
                {}
                <span className="text-gray-500">{}/10</span>
              </p>
            </div>
            <p className="mr-3">
              126<span className="text-gray-500">min</span>
            </p>
            <span className="border rounded-xl px-2">{}</span>
          </div>
          <div>
            <div className="flex w-max  items-center">
              <button
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


      <div className="container mx-auto my-10 ">
              <h1 className="text-[#D32444] text-[30px]" >Top casT</h1>
              <div className="flex flex-wrap justify-center">

             
                {
                  loading ?
                  cast.slice(0,number).map((ca)=>{
                    return(
                      <div className="w-96 my-2 p-2 flex  items-center">
                      <img 
                      className="w-20 h-20 rounded-full mx-10"
                      src={ca.character.image && ca.character.image.original} alt="" />
                      <div className="text-[#99988b]">
                        <h1 className="text-gray-100">{ca.person.name}</h1>
                        <p>{ca.character.name}</p>
                        <div className="">
                        <p className="">{ca.person.country && ca.person.country.name} {ca.person.birthday}</p>
                        
                        </div>
                      </div>
                    </div>
                    )
                  })
               : <ThreeDots 
               height="80" 
               width="80" 
               radius="9"
               color="#D32444" 
               ariaLabel="three-dots-loading"
               wrapperStyle={{}}
               wrapperClassName=""
               visible={true}
                /> } 
        </div>
        <button onClick={()=>{
        setNumber(cast.length)
        
        }} className={number >12 ? "hidden"   : "block  mx-auto block text-[#D32444] text-[20px] text-center  "}>see more</button>
        <button onClick={()=>{
        setNumber(12)
        
        }} className={number <=12 ? "hidden" : " block mx-auto text-[#D32444] text-[20px] text-center  "}>hide</button>
      </div>
      
    </>
  );
};

export default TvF;
