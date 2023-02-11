import React from 'react'
import {useTranslation} from "react-i18next";
import "./AdminPanel.scss";

function AdminPanel() {
  const {t} = useTranslation();

  return (
    <div className='panel'>
      <div className='panel__wrapper'>
        <form className='panel__wrapper--form'>
        <div className='panel__wrapper--form__items'>
          <label>{t("Caregory")}</label>
            <select>
              <option value="new product"> {t("New product")}</option>
              <option value="onsole"> {t("Onsole")} </option>
              <option value="upcomin product"> {t("Upcoming Product")}  </option>
            </select>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Link images table")} </label>
            <input type="text" placeholder={t("Enter link")}/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Title table")} </label>
            <input type="text" placeholder={t("Enter title")}/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("reiting table")} </label>
            <input type="number" placeholder={t("Enter reiting")}/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Price table")} </label>
            <input  placeholder={t("Enter price")} type="number"/>
          </div>
          <div className='panel__wrapper--form__items'>
            <button className='panel__wrapper--form__items--button'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminPanel