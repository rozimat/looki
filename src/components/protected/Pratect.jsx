import React from 'react'
import { Navigate } from "react-router-dom";
function Pratect() {
  const isLoggiding = true;
  if (isLoggiding){
    return  <Navigate  to={"/admin"} replace />
  }
  else {
    return  <Navigate to={"/adminpanel"}  />
  }
}
export default Pratect