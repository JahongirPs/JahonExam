import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Hollywood.css';

// import required modules

import { Autoplay, Pagination } from 'swiper/modules';

export default function Holluwood() {
  return (
    <>
    <h1 className='text'>Hollywood Movies</h1>
      <Swiper
      slidesPerView={7}
      spaceBetween={50}
      autoplay={{delay: 3000}}
       loop={true}
      modules={[Autoplay]}
      className="Corucel2"
      >
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//vcQQx1z5iUbqZ3uJXvfCCMN3HPb.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//7F7SdcPBD5nUHgbX1F6niKd4ofp.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//a2pORKd7quQ0kn4GhhwLwbGoDqz.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//hkx6p7bTw2dOs4nSk6ZGTnEjCjW.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//3ysJfgS96U4SfI2owoEhB81tD6x.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//qDFb1ZDvUqJvPF7HniZnmLXsDpQ.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//dLfPOTB9zlGCNZJinYvf9yygaX6.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//2ii07lSwHarg0gWnJoCYL3Gyd1j.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//9n2tJBplPbgR2ca05hS5CKXwP2c.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//6IafiYxaqR2MxCnEC29bi6637eo.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//3ysJfgS96U4SfI2owoEhB81tD6x.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//zRQITMLvVi8z2Xz12Bi6wvbZE82.jpg" alt="" className="imagescad" /></SwiperSlide>
        <SwiperSlide><img src="https://image.tmdb.org/t/p/original//w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg" alt="" className="imagescad" /></SwiperSlide>
      </Swiper>
    </>
  );
}
