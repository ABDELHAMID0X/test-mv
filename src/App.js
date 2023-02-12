import './App.css';
import Nav from '../src/component/Nav'
import Home from './component/Home';
import { Route , Routes } from 'react-router-dom';
import Login from './component/Login';
import MovieInfo from './component/MovieInfo';
import AllMovies from './component/AllMovies';
import HomeAnime from './component/HomeAnime';
import AllMv from './component/AllMv';
import AnimeInfo from './component/AnimeInfo';
import AnimePage from './component/AnimePage';
import Test from './component/Test';
import AllCom from './component/AllCom';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/Login' element={<Login/>} ></Route>
      <Route path='/AllMovies' element={<AllMovies/>} ></Route>
      <Route path='/movieInfo/:id/:media_type' element={<MovieInfo/>} ></Route>
      <Route path='/HomeAnime' element={<HomeAnime/>} ></Route>
      <Route path='/AllMv' element={<AllMv/>} ></Route>
      <Route path='/AllCom' element={<AllCom/>}></Route>
      <Route path='/AnimeInfo/:id' element={<AnimeInfo/>} ></Route>
      <Route path='/AnimePage'  element={<AnimePage/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
    </Routes>
    </>
  );
}

export default App; 
