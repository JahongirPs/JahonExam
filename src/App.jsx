import logo from './logo.svg';
import './App.css';
import Banner from './Components/banner/Banner';
import Slider from './Components/Swiper/Swiper';
import { useEffect } from 'react';
import Corucel from './Components/CorucelFilms/CorucelFilm';
import Mincorucel from './Components/corucel-min/CorucelMin';
import Trend from './Components/TrendingMovies/Trend';
import Holluwood from './Components/Hollywood/Hollywood';
import Bollywood from './Components/Bollywood/Bollywood';


function App() {

  return (
    <>
    <Banner/>
    <Slider/>
    <div className='corucels-cad'>
    <Mincorucel/>
    <Corucel/>
    <Trend/>
    <Holluwood/>
    <Bollywood/>
    </div>
   
    </>
  );
}
export default App;

