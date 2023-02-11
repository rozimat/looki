import React, {useEffect, useState, useRef} from 'react'
import "./BigSwiper.scss";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import images from "../../dummy-images.json";


function BigSwiper() {
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
        carouselWrapperEl.current.scrollLeft = currentImage * 1519.2;
    }, [currentImage])
    useEffect(() => {
        setInterval(() => {
            setCurrentImage(currentImage => currentImage + 1)
        }, 2000)
    }, [])
  return (
        <div className="swiper">
            <button  className="swiper__btn1" onClick={swipeLeft}><FiArrowLeft className='swiper__btn1--icon'/></button>
            <div className="swiper__wrapper" ref={carouselWrapperEl}>
                {images.map((carouselItem, index) => (
                    <div className="swiper__wrapper--imgs" key={index}>
                        <img
                            className="swiper__wrapper--imgs__img"
                            src={carouselItem}
                            alt="Photo"
                            width="100%"
                        />
                    </div>
                ))}
            </div>
            <div className="swiper__dots">
                {
                    images.map((dot, index) =>
                        <div  onClick={() => { setCurrentImage(index)}}
                          style={currentImage === index ? { background: "black", transform: "scale(1.5)" } : null}
                          className="swiper__dots--items" key={index}></div>
                    )
                }
            </div>
            <button className="swiper__btn2" onClick={swipeRight}> <FiArrowRight className='swiper__btn1--icon'/> </button>
        </div>
    );
}


export default BigSwiper