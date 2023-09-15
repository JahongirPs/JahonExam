import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper/modules';
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";

import "./Swiper.css";
import axios from 'axios';
import BannerImg from "../../img/Banner_img1.png"



export default function Slider() {
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?&with_networks=213", {
      headers: {
          "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODY5Yjc5Y2ZmYTFjNGQ0NWU0YTBmZWYyY2IwYzE2OSIsInN1YiI6IjY1MDFhM2E3ZDdkY2QyMDExYzYwZjI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jMe7EsduCFrNZD_rgIpf9vs6pLEukoPp6p_C1QBeQdg"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);
    
 

  
  return (
    <>
      <Swiper
      
modules={[Autoplay]}
autoplay={{delay: 3000}}
loop={true}
className="mySwiper"
      >
        <SwiperSlide><img src='https://image.tmdb.org/t/p/original//kGzFbGhp99zva6oZODW5atUtnqi.jpg' alt="" />
        <div className="box_cad">
            <h2 className="name_film">The Godfather Part</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
       
          <img src='https://image.tmdb.org/t/p/original//dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">Your Name</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">Pulp Fiction</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">The Lord of the Rings</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//gavyCu1UaTaTNPsVaGXT6pe5u24.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">Cinema Paradiso</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">The Shawshank Redemption</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//vI3aUGTuRRdM7J78KIdW98LdxE5.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">Dilwale Dulhania</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">Spirited Away</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//dqK9Hag1054tghRQSqLSfrkvQnA.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">The Dark Knight</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          
          <img src='https://image.tmdb.org/t/p/original//zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg' alt="" />
          <div className="box_cad">
            <h2 className="name_film">Pulp Fiction</h2>
            <div className="btn_table">
              <button className="btn1">Play</button>
              <button className="btn2">More Info</button>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
  
}
