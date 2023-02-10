import React from 'react'
import "./Delivery.scss";
import {TbTruckDelivery} from "react-icons/tb";
import {ImBoxRemove} from "react-icons/im";
import {BsHeadset, BsCreditCard2Back} from "react-icons/bs";

import {useTranslation} from "react-i18next";

function Delivery() {
  const {t} = useTranslation();
  return (
    <div className='delivery'>
      <div className='delivery__card'>
        <div className='delivery__card--item'>
          <TbTruckDelivery className='delivery__card--item__icon'/>
          <span>
            <h4>{t("Free Shipping")}</h4>
            <p>{t("On all orders over $75.00")}</p>
          </span>
        </div>

        <div className='delivery__card--item'>
          <ImBoxRemove className='delivery__card--item__icon'/>
          <span>
            <h4>{t("Free Returns")}</h4>
            <p>{t("Returns are free within 9 days")}</p>
          </span>
        </div>

        <div className='delivery__card--item'>
          <BsHeadset className='delivery__card--item__icon'/>
          <span>
            <h4>{t("100% Payment Secure")}</h4>
            <p>{t("Your payment are safe with us.")}</p>
          </span>
        </div>

        <div className='delivery__card--item'>
          <BsCreditCard2Back className='delivery__card--item__icon'/>
          <span>
            <h4>{t("Support 24/7")}</h4>
            <p>{t("Contact us 24 hours a day")}</p>
          </span>
        </div>
       
      </div>
    </div>
  )
}

export default Delivery
