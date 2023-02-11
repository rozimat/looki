import React from 'react'
import "./Products.scss";
import Card from "../card/Card";
import { useTranslation} from "react-i18next";

function Products() {
  const {t} = useTranslation();
  return (
    <>
    <div className='products'>
      <div className='products__wrapper'>
        <div className='products__wrapper--t'>
          <h2 className='products__wrapper--t__heading'>{t("New Arrival products")}</h2>
          <span className='products__wrapper--t__span'></span>
          <p className='products__wrapper--t__text'> {t("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?")} </p>
        </div>
        <Card/>
      </div>
    </div>
    </>
  )
}

export default Products;