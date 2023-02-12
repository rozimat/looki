import React, {useState , useRef} from 'react'
import {useTranslation} from "react-i18next";
import "./AdminPanel.scss";
import axios from 'axios';



function AdminPanel() {

  const {t} = useTranslation();
  const [ formValue, setFormValue]= useState({
    category: "",
    img: "",
    title: "",
    rate: "",
    price: "",
  })
  const getValuesInput=(e)=>{
    setFormValue((prev)=>{
      return{
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }
  const getDataSendToServar = (e)=>{
    e.preventDefault();
    const data={
      category: formValue.category,
      img: formValue.img,
      title: formValue.title,
      rate: formValue.rate,
      price: formValue.price,
      
    }
    axios.post("https://looki-b5741-default-rtdb.firebaseio.com/looki.json",
    data)
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className='panel'>
      <div className='panel__wrapper'>
        <form onSubmit={getDataSendToServar}  className='panel__wrapper--form' >
        <div className='panel__wrapper--form__items'>
          <label>{t("Caregory")}</label>
            <select onChange={getValuesInput} name="category">
              <option value="new product">New Product</option>
              <option value="onsole">Onsole</option>
              <option value="onsole">Onsole</option>
            </select>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Link images table")} </label>
            <input  type="text" placeholder={t("Enter link")} nema="img"  onChange={getValuesInput}/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Title table")} </label>
            <input   type="text" placeholder={t("Enter title")} name="title"  onChange={getValuesInput} />
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("reiting table")} </label>
            <input  type="number" placeholder={t("Enter reiting")} name="rate" onChange={getValuesInput} />
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Price table")} </label>
            <input    placeholder={t("Enter price")} type="number"  name="price"  onChange={getValuesInput}/>
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