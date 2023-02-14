import React from 'react'
import {AiOutlineStar } from "react-icons/ai";
import {FaStarHalf, FaStar} from "react-icons/fa";
import styled from "styled-components";
const Star3 =({rate})=>{
  const ratingStar =  Array.from({length:5}, (elem, index)=>{
    let number = index + 0.5;
    debugger;
    return ( 
        <span key={index}>
        { rate >= index + 1 ? (
            <FaStar className='icons1'/> 
          ) : rate >= number ? (
          <FaStarHalf className='icons'/>
          ) : ( 
          <AiOutlineStar className='icons'/>
        )}
      </span>
    );
    });
    return(
      <Wrapper>
        <div className='icon-style'>
          {ratingStar}
        </div>
      </Wrapper>
    );
  }
  const Wrapper = styled.section`
    .icon-style{
      display: flex;
      gap: 0.2rem;
      
    }
    .icons1{
      color: gold;
    }
  `
export default Star3;
