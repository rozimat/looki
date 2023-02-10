import React from 'react';
import "./Cart.scss";
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BsFillStarFill} from "react-icons/bs";


function Cart() {

  const a=[1,2,3,4,5];
  return (
      <div className='carts'>
      <div className='cart'>
      {
        a.map((item)=>
          <div className='cart__item'>
            <Link className='cart__item--link'>
              <img 
              className='cart__item--link__img' 
              src="https://template.hasthemes.com/looki/looki/assets/img/product/1.png" 
              alt="cart" />
            </Link>
            <div className='cart__item--wrapper'>
                <h2  className='cart__item--wrapper__heading'>All Natural Makeup Beauty Cosmetics</h2>
                {a.map((item=><> <span className='cart__item--wrapper__span'> <BsFillStarFill/> </span></>))}
              <div className='cart__item--wrapper__div'>
                <h3 className='cart__item--wrapper__div--price'>$11.34</h3>
                <AiOutlineShoppingCart className='cart__item--wrapper__div--icon'/>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Cart