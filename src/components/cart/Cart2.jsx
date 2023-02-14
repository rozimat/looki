import React, {useState, useEffect, useRef} from 'react';
import "./Cart.scss";
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import axios from 'axios';
import {useDispatch} from "react-redux";
import cartSlice from '../../store/sliceReduc';
import Star2 from './Star2';
function Cart2() {
  const {addToCart } = cartSlice.actions;
  const dispatch = useDispatch();
  const [ dataBase, setDataBase]= useState([]);
  const carouselWrapperEl = useRef();
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(()=>{
    axios
    .get("https://looki-b5741-default-rtdb.firebaseio.com/onsole.json")
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
  },[dataBase]);
  const swipeRight = () => {
      if (currentImage < dataBase.length - 1) {
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
          setCurrentImage(dataBase.length - 1)
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
                <Star2 star={item.rate}/>
              <div className='cart__item--wrapper__div'>
                <h3 className='cart__item--wrapper__div--price'>${item.price}</h3>
                <button onClick={()=>dispatch(addToCart(item))}  className='cart__item--wrapper__div--icon'> <AiOutlineShoppingCart/></button>
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
export default Cart2;
