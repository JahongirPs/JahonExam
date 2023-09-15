import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Bollywood.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Bollywood() {
  return (
    <>
    <h1 className='text-film'>Bollywood Movies

</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        autoplay={{delay: 3000}}
         loop={true}
        modules={[Autoplay]}
        className="Corucel"
      >
        
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//5OFUCydVG9cSS5hMk4A6XNt1oH4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//axIU0Ay88ZSfZHL5AlsQm64Bcb8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//jDjmnEuNUfWHg8rbW6u8mylkcO0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//kIMYSzp1fH1H9adKplekLD9BuNi.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//kIMYSzp1fH1H9adKplekLD9BuNi.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//5Jfk2p3iGrChUKkl0cBD5krr2u8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//aY5cMtwZqt6yXZwrLLEa6czvRMY.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//4tdV5AeojEdbvn6VpeQrbuDlmzs.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//qwp5hqxrOHfCyBP8vLG8vxXvxho.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//vT17lPUglrAzjEqMwjPpIDe49ty.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//iEFuHjqrE059SmflBva1JzDJutE.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
