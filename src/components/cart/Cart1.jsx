import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {BsFillStarFill} from "react-icons/bs";
import axios from 'axios';


function Cart1() {
  const images1 = [1,2,3];
  const [ dataBase1, setDataBase1]= useState([]);
  const [ dataCategory1, setDataCategory1]= useState([]);
  const carouselWrapperEl1 = useRef();
  const [currentImage1, setCurrentImage1] = useState(0);
  useEffect(()=>{
    axios
    .get("https://looki-b5741-default-rtdb.firebaseio.com/looki.json")
    .then(({data})=>{
      const  newData1 = Object.keys(data).map((item)=>{
        return{
          ...data[item],
          id:item,
        };
      });
      setDataBase1(newData1);
    })
    .catch((error)=>{
      alert("Error in Fairbase's url")
    })
  },[]);
  
  return (
    <div className='category1'>
      <h1>categor 1</h1>
    </div>
  )
}

export default Cart1
