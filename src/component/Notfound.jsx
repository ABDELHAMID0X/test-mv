import React from "react";
import Errorpage from '../assets/404.jpg'
import { Link } from "react-router-dom";
const Notfound = () => {
 

  return (
    <>
       <div  className="w-full h-[100vh] flex items-center flex-row-reverse bg-cover md:bg-center " style={{
          backgroundImage: `url(${Errorpage})`,
        }}>
          
          <div style={{fontFamily: 'Roboto'}} className=" w-max text-center md:mr-32 ">
              
              <h1  className="text-[130px] text-fuchsia-600 ">404</h1>
              <h1 className="text-3xl mb-2 text-fuchsia-500">Page Not Found</h1>
              <p className="text-white  text-gray-200 mb-3">maybe the page you're looking for is not found or never existed</p>
              <Link to="/" >
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Go Home</button>
              </Link>
          </div>


       </div>
    </>
  );
};

export default Notfound;
