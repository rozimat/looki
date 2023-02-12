import React, {useState} from 'react'
import {useTranslation} from "react-i18next";
import "./AdminPanel.scss";

function AdminPanel() {
  const {t} = useTranslation();
  const [details, setDetails] = useState([{
    category: "",
    img: "",
    title: "",
    rate: "",
    price: "",

  }
])

  const hendleChange = (e)=>{
    setDetails((prev)=>{
      return{
        ...prev,
        [e.terget.name] : e.target.value,
      }
    })
    
  }
 
  return (
    <div className='panel'>
      <div className='panel__wrapper'>
        <form  className='panel__wrapper--form' >
        <div className='panel__wrapper--form__items'>
          <label>{t("Caregory")}</label>
            <select onChange={hendleChange} name="caregory">
              <option value="new product">New Product</option>
              <option value="onsole">Onsole</option>
              <option value="onsole">Onsole</option>
            </select>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Link images table")} </label>
            <input  type="text" placeholder={t("Enter link")} onChange={hendleChange} name="img"/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Title table")} </label>
            <input   type="text" placeholder={t("Enter title")} onChange={hendleChange} name="title"/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("reiting table")} </label>
            <input  type="number" placeholder={t("Enter reiting")} onChange={hendleChange} name="rate"/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Price table")} </label>
            <input    placeholder={t("Enter price")} type="number" onChange={hendleChange} name="price"/>
          </div>
          <div className='panel__wrapper--form__items'>
            <button className='panel__wrapper--form__items--button' type="submit"> {t("Save")} </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminPanel;