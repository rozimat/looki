import React from 'react'
import "./Card.scss";
import {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {BsFillStarFill} from "react-icons/bs";
import { v4} from "uuid";

function Card() {
  
    const images=[1,2,3,4,5];
    const carouselWrapperEl = useRef();
    const [currentImage, setCurrentImage] = useState(0);
    const swipeRight = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage => currentImage + 1)
        }
        else {
            setCurrentImage(0)
        }
    }
    const swipeLeft = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage => currentImage - 1)
        }
        else {
            setCurrentImage(images.length - 1)
        }
    }
    useEffect(() => {
        carouselWrapperEl.current.scrollLeft = currentImage *1300;
    }, [currentImage])
    
    
  
  
    return (
        <div className='cards'>
        <div ref={carouselWrapperEl}   className='card'>
          <button onClick={swipeRight} className='card__btn1'><AiOutlineArrowLeft className='cart__btn--icon'/></button>
        {
          images.map((item)=>
            <div key={v4()}   className='card__item'>
              <Link className='card__item--link'>
                <img 
                className='card__item--link__img' 
                src="https://template.hasthemes.com/looki/looki/assets/img/product/10.png" 
                alt="card" />
              </Link>
              <div className='card__item--wrapper'>
                  <h2  className='card__item--wrapper__heading'>All Natural Makeup Beauty Cosmetics</h2>
                  {images.map((item=><>  <span key={item} className='card__item--wrapper__span'> <BsFillStarFill/> </span></>))}
                <div className='card__item--wrapper__div'>
                  <h3 className='card__item--wrapper__div--price'>$11.34</h3>
                  <AiOutlineShoppingCart className='cart__item--wrapper__div--icon'/>
                </div>
              </div>
            </div>
          )
        }
        <button onClick={swipeLeft} className='card__btn2'><AiOutlineArrowRight className='cart__btn--icon'/></button>
        </div>
      </div>
  )
}

export default Card;
