import React from 'react'
import "./Product.scss";
import Cart from "../cart/Cart";
import { Link, Outlet } from 'react-router-dom';
import { useTranslation} from "react-i18next";

function Product() {
  const {t} = useTranslation();
  return (
   <>
    <div className='product'>
      <div className='product__wrapper'>
        <div className='product__wrapper--t'>
          <h2 className='product__wrapper--t__heading'>{t("Our products")}</h2>
          <span className='product__wrapper--t__span'></span>
          <p className='product__wrapper--t__text'> {t("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?")} </p>
        </div>
        <div className='product__wrapper--b'>
          <Link to="/" className='product__wrapper--b__link'> {t("New products")} </Link>
          <Link to="/category2" className='product__wrapper--b__link'> {t("Onsale")} </Link>
          <Link to="/category3" className='product__wrapper--b__link'> {t("Upcoming products")} </Link>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Product