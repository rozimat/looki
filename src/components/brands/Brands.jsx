import React from 'react'
import "./Brands.scss";
import logotip from "../../dummy-brands.json";
import {Link} from "react-router-dom";


function Brands() {
  return (
    <div className='brands'>
      <div className='brands__wrapper1'>
        <div className='brands__wrapper2'>
          {
            logotip.map((item, index)=>
              <>
                <Link className='brands__wrapper--link' key={index}>
                  <img className='brands__wrapper--link__img' src={item} alt="Brands" />
                </Link>
              </>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Brands