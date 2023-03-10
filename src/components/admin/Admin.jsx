import React, {useState, useEffect} from 'react'
import "./Admin.scss";
import { useNavigate } from 'react-router-dom';
function Admin() {
  const navigate= useNavigate();
  const [error, setError] = useState(true);
  const [values, setValues] = useState(
    [
      {
        login: "",
        parol: "",
      },
    ]
  )
  useEffect(()=>{
    localStorage.setItem("logi", "12345678@gmail.com")
    localStorage.setItem("paro", "12345678")
  },[])
  function sentTrueValue(){
    localStorage.setItem("protect", true)
  }
  function sentFalseValue(){
    localStorage.setItem("protect", false)
  }
    const getValue=(e)=>{
      setValues((prev)=>{
        return{
          ...prev,
          [e.target.name]: e.target.value,
        }
      })
    }
    const checkLogin = localStorage.getItem('logi');
    const checkPassword = localStorage.getItem('paro');
    function submitValue(e){
      e.preventDefault();
      if (values.login ===checkLogin &&  values.parol ===checkPassword){
        navigate("/adminpanel");
      }
      else{
        setError(false);
      }  
    }
  return (
    <div className='admin'> 
      <div className='admin__panel'>
        <div className='admin__panel--l'>
          <div className='see__passwords' >
          <h2> Login: {checkLogin}</h2>
          <h2> Parol: {checkPassword}</h2>
          </div>
          <img className='admin__panel--l__img' src="https://image.shutterstock.com/image-vector/customer-service-icon-user-headphone-260nw-519942469.jpg" alt="" />
        </div>
        <form onSubmit={submitValue}  className='admin__panel--r'>
          {! error ? <h2 style={{background: "red", padding: "20px"}}> Your parol or login is invalid</h2> : null}
          <label> Admin login </label>
          <input className='admin__panel--r__wrapper--email' type="text" onChange={getValue} name="login"/>
          <label> Admin parol</label>
          <input className='admin__panel--r__wrapper--password' type="text"  onChange={getValue} name="parol"/>
          <button type='submit' className='admin__panel--r__button'>Enter</button>
        </form>
      </div>
    </div>
  )
}

export default Admin