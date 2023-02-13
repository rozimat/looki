import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import {AiOutlineShopping, AiOutlineSearch, AiOutlineHeart,AiFillInstagram, AiOutlineSwap, AiOutlineFacebook,AiFillTwitterSquare, AiOutlineYoutube} from "react-icons/ai";
import {RiAdminLine, RiPhoneLine} from "react-icons/ri";
import logo from "../../images/logo.png";
import {useTranslation} from "react-i18next";
import "./Header.scss";
import Footer from '../footer/Footer';



function Header() {
  const {t, i18n} = useTranslation();
  const languageChanger=(e)=>{
    i18n.changeLanguage(e.target.value);
    if(e.target.value === localStorage.getItem("lang")){
      i18n.changeLanguage(e.target.value);
      localStorage.setItem("lang", "en");
    }
    else{
      i18n.changeLanguage(e.target.value);
      localStorage.setItem("lang", "fr")
    }
  }

  return (
    <>
      <div className='header'>
      <div className='header__t'>
      <div className='header__t2'>
        <div className='header__t2--media'>
          <Link className='header__t2--media__link'> <AiOutlineFacebook className='header__t2--media__link'/> </Link>
          <Link className='header__t2--media__link'> <AiFillTwitterSquare className='header__t2--media__link'/> </Link>
          <Link className='header__t2--media__link'> <AiOutlineYoutube className='header__t2--media__link'/> </Link>
          <Link className='header__t2--media__link'> <AiFillInstagram className='header__t2--media__link'/> </Link>
        </div>
        <div className='header__t2--numbers'> 
          <a className='header__t2--numbers__link' href="tel:+998996389899"> <RiPhoneLine className='header__t2--numbers__link--icon'/> {t("tel")}:(+998)99-638-98-99</a>
        </div>
        <div className='header__t2--items'>
          <select className='header__t2--items__similar'>
            <option> {t("Settings")}</option>
            <option> {t("My accaunt")} </option>
            <option> {t("Checkout")} </option>
            <option> {t("Singout")} </option>
          </select>
          <select className='header__t2--items__similar'>
            <option value="usd"> {t("USD $")} </option>
            <option value="eur"> {t("EUR  €")} </option>
          </select>
          <select onChange={languageChanger}  className='header__t2--items__similar'>
            <option value="en"> {t("EN")} </option>
            <option value="fr"> {t("FR")} </option>
          </select>
        </div>
      </div>
      </div>
      <div className='header__b'>
        <div className='header__b--logo'>
          <Link  className='header__b--logo__link'>
            <img src={logo} alt="LOGO" />
          </Link>
        </div>
        <div className='header__b--category'>
          <Link to='/' className='header__b--category__link'>{t("HOME")}</Link>
          <Link to="/shop" className='header__b--category__link'>{t("SHOP")}</Link>
          <Link to="/pages" className='header__b--category__link'>{t("PAGES")}</Link>
          <Link to="/blogs" className='header__b--category__link'>{t("BLOGS")}</Link>
          <Link to="/contacts" className='header__b--category__link'>{t("CONTACT US")}</Link>
        </div>
        <div className='header__b--search'>
          <AiOutlineSearch className='header__b--search__icon'/>
        </div>
        <div className='header__b--carts'>
          <Link className='header__b--carts__nested'>
            <AiOutlineSwap className='header__b--carts__nested--icon'/>
            <p className='header__b--carts__nested--p'>0</p>
          </Link>

          <div className='header__b--carts__nested'>
            <AiOutlineHeart className='header__b--carts__nested--icon'/>
            <p className='header__b--carts__nested--p'>0</p>
          </div>

          <Link to='/carts' className='header__b--carts__nested'>
            <AiOutlineShopping className='header__b--carts__nested--icon'/>
            <p className='header__b--carts__nested--p'>0</p>
          </Link>
          
        </div>
        <div className='header__b--admin'>
          <Link to="/admin" className='header__b--admin__link'>
            <p>{t("ADMIN")}</p>
            <RiAdminLine className='header__b--admin__icon'/>
          </Link>
        </div>
      </div>
    </div>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Header;