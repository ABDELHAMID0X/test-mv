import React from 'react';
import loginCover from '../assets/loginCover.png'


 const Login=()=> {
  return (
    <div>

    <section class="min-h-screen flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage:`url(${loginCover})`}}>
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide">WELCOME</h1>
                <p class="text-3xl my-4">Watch your favorites movie now for free</p>
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-black" >
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{backgroundImage:`url(${loginCover})`}}>
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <div class="py-6 space-x-2">
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-blue-800">f</span>
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-green-800">G+</span>
                    <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-cyan-500">t</span>
                </div>
                <p class="text-gray-100">
                    or use your sakamovie account 
                </p>
                <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div class="pb-2 pt-4">
                        <input type="email" name="username" id="username" placeholder="username" class=" block w-full p-4 text-lg rounded-sm bg-black"/>
                    </div>
                    <div class="pb-2 pt-4">
                        <input class="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <p href="#">Forgot your password?</p>
                    </div>
                    <div class="px-4 pb-2 pt-4">
                        <button class="uppercase block w-full p-4 text-lg rounded-full bg-red-800 hover:bg-red-900 focus:outline-none">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    </section>


    </div>
  )
};
export default Login;
