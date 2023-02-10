import React from 'react'
import "./Cartinca.scss";
import { Link } from "react-router-dom";
import imgs from "../../dummy-cartinci.json";

function Cartinca() {
  return (
    <div className='cartinca'>
      <div className='cartinca__wrapper'>
      <Link className='cartinca__wrapper--item'>
        <img className='cartinca__wrapper--item__img1' src={imgs[0]} alt="Cartinca" />
      </Link>
      <Link className='cartinca__wrapper--item'>
        <img className='cartinca__wrapper--item__img2' src={imgs[1]} alt="Cartinca" />
      </Link>
      <Link className='cartinca__wrapper--item'>
        <img className='cartinca__wrapper--item__img3' src={imgs[2]} alt="Cartinca" />
      </Link>
    </div>
    </div>
  )
}

export default Cartinca