// import React, { useEffect, useState } from 'react'

const AnimePage = () => {


  // const [anime , setAnime] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.jikan.moe/v4/anime')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setAnime(data.data);
  //   });
  // })
  return (
  <>
      <div className='w-full flex flex-wrap items-center justify-center   '>
          {/* {
            anime.map((an)=>{
              return(
                an ? <div className='md:w-96 w-80   '>
                <img className='w-full h-80' src="" alt="" />
                <div className='w-full'>
                  <h1>{ an && an.title}</h1>
                </div>
              </div>
              : "loading..."
              )
            })
          } */}
      </div>
  </>
  )
}

export default AnimePage