import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Mincorucel.css';

// import required modules

import { Autoplay, Pagination } from 'swiper/modules';

export default function Mincorucel() {
  return (
    <>
    <h1 className='text'>Discovery</h1>
      <Swiper
      slidesPerView={7}
      spaceBetween={50}
      autoplay={{delay: 3000}}
       loop={true}
      modules={[Autoplay]}
      className="Corucel2"
      >
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//m0bV3qBiJBBlpFaaKjwHo13MVjm.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//amtOltTVcK9vQtL1iQS6p3LBi05.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//yii7eIlaw1MRMfa7FTA6mW8hBUQ.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//3n2TjKw3HrwDqgVgcynvantOfS3.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//zDUZKdCMESNbylWGybN4FMaUckG.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//gMDRoKAN4b4oPgkOcBoV4RW0LsD.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//1Vj73YrMj4OLBppgZdWXoGZlsGI.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//5MkBAawsj7O9zitVtzMXagyrIBw.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//yJEFbFax9fb8ePB0rK9UIQoXMG4.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//yogK95l1lK8wyDK9N1YfOiGYJJ8.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//2N4LXvTkUwPRkbvyzdmzvtnCHgR.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//5YfFibGB0Mjcl2RHUqztlPBCJp8.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//tRB52F0AoLvjxZn1TtgoBc4DXnw.jpg" alt="" className="imagescad" /></SwiperSlide>
      </Swiper>
    </>
  );
}
