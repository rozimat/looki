import React from 'react'
import "./Fashion.scss";
import {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import images from "../../dummy-fashion.json";
import {useTranslation} from "react-i18next";


function Fashion() {
  const  {t} = useTranslation();
    const carouselFashion = useRef();
    const [fashions, setFashions] = useState(0);
    const swipeRight = () => {
        if (fashions < images.length - 1) {
          setFashions(fashions => fashions + 1)
        }
        else {
          setFashions(0)
        }
    }
    const swipeLeft = () => {
        if (fashions > 0) {
          setFashions(fashions => fashions - 1)
        }
        else {
          setFashions(images.length - 1)
        }
    }
    useEffect(() => {
      carouselFashion.current.scrollLeft = fashions *300;
    }, [fashions])
    
  
  
    return (
        <div className='fashions'>
        <div ref={carouselFashion}   className='fashion'>
          <button onClick={swipeRight} className='card__btn1'><AiOutlineArrowLeft className='fashion__btn--icon'/></button>
        {
          images.map((item)=>
            <div key={Math.random().toFixed(3)}  className='fashion__item'>
              <Link className='fashion__item--link'>
                <img 
                className='card__item--link__img' 
                src={item} 
                alt="card" />
              </Link>
              <div className='fashion__item--wrapper'>
                  <Link className='fashion__item--wrapper__link'> {t("FASHION")} </Link>
                  <h2  className='fashion__item--wrapper__heading'> {t("This is first Post For Blog")} </h2>
                <div className='fashion__item--wrapper__div'>
                  <h3 className='fashion__item--wrapper__div--price'> {t("Posted by ")}
                  <Link className='fashion__item--wrapper__div--price__link'> {t("Has Teach")} </Link> {t("Nov 2023")} 
                  </h3>
                </div>
              </div>
            </div>
          )
        }
        <button onClick={swipeLeft} className='fashion__btn2'><AiOutlineArrowRight className='fashion__btn--icon'/></button>
        </div>
      </div>
  )
}

export default Fashion;
