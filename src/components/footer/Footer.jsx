import React from 'react'
import "./Footer.scss";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import carts from "../../dummy-carspay.json";
import logos from "../../images/logo.png";
import { AiFillInstagram, AiOutlineFacebook,AiFillTwitterSquare, AiOutlineYoutube} from "react-icons/ai";
function Footer() {
  const {t} = useTranslation();

  return (
    <div className='footer'>
      <div className='footer__t'>
        <div className='footer__t--div1'>
          <Link className='footer__t--div1__link'>
            <img className='footer__t--div1__link--logo' src={logos} alt="" />
          </Link>
          <h2 className='footer__t--div1__text'>
            {t("We are a team of professional designers and developers that create high quality wordpress plugins, Html, React Template.")}
          </h2>
          <div className='footer__t--div1__wrapper'>
            <Link className='footer__t--div1__wrapper--link'> <AiFillInstagram className='footer__t--div1__wrapper--link__icon'/> </Link>
            <Link className='footer__t--div1__wrapper--link'> <AiOutlineFacebook className='footer__t--div1__wrapper--link__icon'/> </Link>
            <Link className='footer__t--div1__wrapper--link'> <AiFillTwitterSquare className='footer__t--div1__wrapper--link__icon'/>  </Link>
            <Link className='footer__t--div1__wrapper--link'> <AiOutlineYoutube className='footer__t--div1__wrapper--link__icon'/>  </Link>
          </div>
        </div>
        <div className='footer__t--div2'>
          <div className='footer__t--div2__wrapper'>
            <h2 className='footer__t--div2__wrapper--heading'> {t("Information")} </h2>
            <span className='footer__t--div2__wrapper--span'></span>
          </div>
          <Link className='footer__t--div2__link' > {t("About us")} </Link>
          <Link className='footer__t--div2__link'> {t("Payment")} </Link>
          <Link className='footer__t--div2__link'> {t("Contact us")} </Link>
          <Link className='footer__t--div2__link'> {t("Stores")} </Link>
        </div>
        <div className='footer__t--div3'>
          <div className='footer__t--div3__wrapper'>
              <h2 className='footer__t--div3__wrapper--heading'> {t("Social Links")} </h2>
              <span className='footer__t--div3__wrapper--span'></span>
            </div>
            <Link className='footer__t--div3__link'> {t("New products")} </Link>
            <Link className='footer__t--div3__link'> {t("Best sales")} </Link>
            <Link className='footer__t--div3__link'> {t("Login")} </Link>
            <Link className='footer__t--div3__link'> {t("My account")} </Link>
        </div>
        <div className='footer__t--div4'>
            <div className='footer__t--div4__wrapper'>
              <h2 className='footer__t--div4__wrapper--heading'> {t("Newsletter")} </h2>
              <span className='footer__t--div4__wrapper--span'></span>
            </div>
            <p  className='footer__t--div4__text'>
              {t("Subcribe to the TheFace mailing list to receive update on mnew arrivals, special offers and other discount information.")}
            </p>
            <form className='footer__t--div4__form'>
              <input className='footer__t--div4__form--email' type="email" placeholder={t("Enter your email")}/>
              <button className='footer__t--div4__form--btn' type='submit'> {t("Sign up")}  </button>
            </form>
        </div>
      </div>
      <div className='footer__b'>
        <h3 className='footer__b--heading'> {t("Copyright")}
          <Link className='footer__b--heading__link'> {t(" © HasThemes.")} </Link>
          {t(" All Rights Reserved")}  
        </h3>
        <div className='footer__b--carts'>
          {
            carts.map((item)=>
              <Link>
                <img src={item} alt="" />
              </Link> 
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
