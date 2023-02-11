import React from 'react'
import "./CardBlogs.scss";
import { Link } from 'react-router-dom';
import { useTranslation} from "react-i18next";
import Fashion from '../fashion/Fashion';

function CardBlogs() {
  const {t} = useTranslation();
  return (
    <>
    <div className='cardblogs'>
      <div className='cardblogs__wrapper'>
        <div className='cardblogs__wrapper--t'>
          <h2 className='cardblogs__wrapper--t__heading'>{t("From our Latest Blogs")}</h2>
          <span className='cardblogs__wrapper--t__span'></span>
          <p className='cardblogs__wrapper--t__text'> {t("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?")} </p>
        </div>
        <div className='cardblogs__wrapper--b'>
          <Fashion/>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardBlogs;