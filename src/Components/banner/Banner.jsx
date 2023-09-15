import React from 'react'
import './Banner.css'
import LogoImg from "../../img/logo.png"
import Arrow from "../../img/arrow.png"
const Banner = () => {
  return (
    <div className='navbar'>
        <div className='firstbox'> 
      <div className='logo'>
        <img src={LogoImg} alt="" />
      </div>
      <div className='links'>
        <span className='textRuoter'>HOME</span>
        <span className='textRuoter'>TV-SHOWS</span>
        <span className='textRuoter'>MOVIES</span>
        <span className='textRuoter'>NEW</span>
        <span className='textRuoter'>POPULAR</span>
      </div>
      </div>
      <div className='Second'>
        <div className='country'>
       
            <span className='textRuoter'>COUNTRIES <img src={Arrow} alt="" /></span>
        </div>
        <div className='search'>
            <input className='inp' type="text" placeholder='Search'/>
            </div> 
      </div>
    </div>
  )
}

export default Banner;