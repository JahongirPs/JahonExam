import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CoruselFilm.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Corucel() {
  return (
    <>
    <h1 className='text-film'>Featured</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        autoplay={{delay: 3000}}
         loop={true}
        modules={[Autoplay]}
        className="Corucel"
      >
        
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//j7FwgVFjpsToIJ5Lt5y2K4N5pKm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//3mrli3xsGrAieQks7KsBUm2LpCg.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//qbWtbhoKtqta3rQDOe5ed80oB1X.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//A3m5GJu5kzAKK2wkGlzErlCCElT.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//yF1eOkaYvwiORauRCPWznV9xVvi.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//waBWlJlMpyFb7STkFHfFvJKgwww.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//jn7U0C8ZKjL1M8skZ5lBdSLYcST.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//2vFuG6bWGyQUzYS9d69E5l85nIz.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
