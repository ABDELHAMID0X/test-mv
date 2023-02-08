import './App.css';
import Nav from '../src/component/Nav'
import Home from './component/Home';
import { Route , Routes } from 'react-router-dom';
import Login from './component/Login';
import MovieInfo from './component/MovieInfo';
import TvF from './component/TvF';
import AllMovies from './component/AllMovies';
import HomeAnime from './component/HomeAnime';
import AllMv from './component/AllMv';
import AnimeInfo from './component/AnimeInfo';
import AnimePage from './component/AnimePage';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/Login' element={<Login/>} ></Route>
      <Route path='/AllMovies' element={<AllMovies/>} ></Route>
      <Route path='/movieInfo/:id' element={<MovieInfo/>} ></Route>
      <Route path='/HomeAnime' element={<HomeAnime/>} ></Route>
      <Route path='/AllMv' element={<AllMv/>} ></Route>
      <Route path='/TvF/:id' element={<TvF/>} ></Route>
      <Route path='/AnimeInfo/:id' element={<AnimeInfo/>} ></Route>
      <Route path='/AnimePage'  element={<AnimePage/>}></Route>
    </Routes>
    </>
  );
}

export default App; 
