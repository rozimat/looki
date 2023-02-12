import React, {useState} from 'react'
import { Navigate } from "react-router-dom";

function Pratect() {
  const [getState, setGetState] = useState(true);
  if(getState){
    return <Navigate to="/adminpanel"/>
  }
  else{
    return <Navigate to="/admin" replace />
  } 
}

export default Pratect