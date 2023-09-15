import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Trend.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Trend() {
  return (
    <>
    <h1 className='text-film'>Trending Movies

</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        autoplay={{delay: 3000}}
         loop={true}
        modules={[Autoplay]}
        className="Corucel"
      >
        
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//ctMserH8g2SeOAnCw5gFjdQF8mo.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//9m161GawbY3cWxe6txd1NOHTjd0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//2ii07lSwHarg0gWnJoCYL3Gyd1j.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//2vFuG6bWGyQUzYS9d69E5l85nIz.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//2QL5j6mB4ZpyBcVr0WO9H9MQGBu.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//AeR5k8Sp3zc2Ql4tT6CmgqspsEq.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//9n2tJBplPbgR2ca05hS5CKXwP2c.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//A3m5GJu5kzAKK2wkGlzErlCCElT.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//9iLZ42pwPYaHjfjly6ERZfpxCS3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//6IafiYxaqR2MxCnEC29bi6637eo.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='Swipers'><img src="https://image.tmdb.org/t/p/original//b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
