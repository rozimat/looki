import React, {useState ,  useEffect} from 'react'
import {useTranslation} from "react-i18next";
import "./AdminPanel.scss";
import axios from 'axios';



function AdminPanel() {
  const {t} = useTranslation();
  const [ data1, setData1] =useState({});
  const [ data2, setData2] =useState({});
  const [ data3, setData3] =useState({});

  const [ validStatus, setValidStatus]= useState(true);
  const [ invalidStatus, setInvalidStatus]= useState(true);
  const [ formValue, setFormValue]= useState({
    category: "",
    imagee: "",
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
 useEffect(()=>{
  if (formValue.category === "new product"){
    setData1({
      category: formValue.category,
      imagee: formValue.imagee,
      title: formValue.title,
      rate: formValue.rate,
      price: formValue.price,
    })
  }
  else if (formValue.category === "onsole"){
    setData2({
      category: formValue.category,
      imagee: formValue.imagee,
      title: formValue.title,
      rate: formValue.rate,
      price: formValue.price,
    })
  }
  else{
    setData3({
      category: formValue.category,
        imagee: formValue.imagee,
        title: formValue.title,
        rate: formValue.rate,
        price: formValue.price,
    })
  }
  
 },[])



  const getDataSendToServar = (e)=>{
    e.preventDefault();
      const data={
        category: data1.category,
        imagee: data1.imagee,
        title: data1.title,
        rate: data1.rate,
        price: data1.price,

      }
      console.log(data);
    axios.post("https://looki-b5741-default-rtdb.firebaseio.com/newproduct.json",
    data)
    .then((res)=>{
      { res.status ===200 ? setValidStatus(true): setValidStatus(false)}
    })
    .catch((res)=>{
      { res.status ===404 ? setInvalidStatus(true): setInvalidStatus(false)}
    })
  };




  return (
    <div className='panel'>
      <div className='panel__wrapper' style={ validStatus ? { border:"15px solid green" } : { border:"15px solid red" }  }>
        <form  onSubmit={getDataSendToServar}  className='panel__wrapper--form'  >
        <div className='panel__wrapper--form__items'>
          <label>{t("Caregory")}</label>
            <select name="category" onChange={getValuesInput} >
              <option> {t("Choose category")}  </option>
              <option value="new product"> {t("New Product")} </option>
              <option value="onsole"> {t("Onsole")} </option>
              <option value="upcomin"> {t("Upcoming Products")} </option>
            </select>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Link images table")} </label>
            <input  type="text" placeholder={t("Enter link")} name="imagee"  onChange={getValuesInput}/>
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Title table")} </label>
            <input   type="text" placeholder={t("Enter title")} name="title"  onChange={getValuesInput} />
          </div>
          <div className='panel__wrapper--form__items'>
            <label> {t("Reiting table")} </label>
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