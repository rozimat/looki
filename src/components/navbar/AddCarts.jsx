import React from 'react';
import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import {AiOutlineDelete, AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./Addcarts.scss";
import { useSelector} from "react-redux";
import { useDispatch} from "react-redux";
import cartSlice from '../../store/sliceReduc';

function Navbar() {
  const dispatch = useDispatch();
  const {removeCart } = cartSlice.actions;
  const {cartItems}= useSelector((state)=>state.cart);
  const {total}= useSelector((state)=>state.cart);
  
  


  const  { t} = useTranslation();
  return (
    <div className='addCart'>
      <div className='addCart__t'>
        <div className='addCart__t--wrapper'>
          <h2> {t("Cart")} </h2>
          <span className='addCart__t--wrapper__span'></span>
          <div className='addCart__t--wrapper__links'>
            <Link to='/'> {t("Home")} <GrFormNext/> </Link>
            <Link to='/carts'> {t("Cart")} </Link>
          </div>
        </div>
      </div>
      <div className='addCart__b'>
        <div className='addCart__b--t'>
          <div className='addCart__b--t--wrapper'>
            <h2 className='addCart__b--t--wrapper__heading'> {t("Your cart items")} </h2>
          </div>
          <div className='addCart__b--t--wrapBootm'>
            <ul>
              <li> {t("Product Image")} </li>
              <li> {t("Product Name")} </li>
              <li> {t("Stock Status")} </li>
              <li> {t("Qty")} </li>
              <li> {t("Price")} </li>
              <li> {t("Action")} </li>
              <li> {t("Checkout")} </li>
            </ul>
            <div className='addCart__b--t--wrapBootm__wrap'>
              { 
                cartItems.map((item)=>
                  <div className='carta'>
                    <Link className='carta__link'>
                      <img className='carta__link--img' src={item.imagee} alt="" />
                    </Link>
                    <p className='carta__text'> {item.title }</p>
                    <button className='carta__button'> In satick</button>
                    <div className='carta__wrapper'>
                      <span className='carta__wrapper--count'> {1}</span>
                      <div className='carta__wrapper--wrap'>
                        <button> <AiOutlinePlus/></button>
                        <button> <AiOutlineMinus/></button>
                      </div>
                      <p className='carta__wrapper--price'>${item.price}</p>
                      <AiOutlineDelete onClick={()=>dispatch(removeCart(item))}  className='carta__wrapper--trash'/>
                      <button className='carta__wrapper--btn'> Add To Cart </button>
                    </div>
                  </div>
                )
                
              }

            </div>
          </div>
        </div>
        <div className='addCart__b--b'>
          <div className='total'>
            <h2>Total costin</h2>
            <h1>Total : $ {total} </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar