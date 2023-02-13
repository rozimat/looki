import React, {useState, useEffect, useRef} from 'react';
import {v4 as uuidv4} from "uuid";
import "./Cart.scss";
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {BsFillStarFill} from "react-icons/bs";
import axios from 'axios';


function Cart3() {
  const images = [1,2,3,4,8];
  const [ dataBase, setDataBase]= useState([]);
  const carouselWrapperEl = useRef();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(()=>{
    axios
    .get("https://looki-b5741-default-rtdb.firebaseio.com/upcoming.json")
    .then(({data})=>{
      const  newData = Object.keys(data).map((item)=>{
        return{
          ...data[item],
          id:item,
        };
      });
      setDataBase(newData);
    })
    .catch((error)=>{
      alert("Error in Fairbase's url")
    })
  },[]);
  
  
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
      carouselWrapperEl.current.scrollLeft = currentImage *300;
  }, [currentImage])


  return (
      <div className='carts'>
      <div ref={carouselWrapperEl}   className='cart'>
        <button onClick={swipeRight} className='cart__btn1'><AiOutlineArrowLeft className='cart__btn--icon'/></button>
      {
        dataBase.map((item)=>
        
          <div key={item.id}  className='cart__item'>
            <Link className='cart__item--link'>
              <img 
              className='cart__item--link__img' 
              src={item.imagee} 
              alt="cart" />
            </Link>
            <div className='cart__item--wrapper'>
                <h2  className='cart__item--wrapper__heading'> {item.title} </h2>
                {images.map((item=><> <span key={uuidv4()} className='cart__item--wrapper__span'> <BsFillStarFill/> </span></>))}
              <div className='cart__item--wrapper__div'>
                <h3 className='cart__item--wrapper__div--price'>${item.price}</h3>
                <AiOutlineShoppingCart className='cart__item--wrapper__div--icon'/>
              </div>
            </div>
          </div>
        )
      }
      <button onClick={swipeLeft} className='cart__btn2'><AiOutlineArrowRight className='cart__btn--icon'/></button>
      </div>
    </div>
  )
}

export default Cart3;

