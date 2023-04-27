import React, { useState } from "react";
import { useEffect } from "react";
const SampleTask=()=>{
  const[counter,setCounter]=useState(0);
  const HandleClick=()=>setCounter(counter+1);
  useEffect(()=>{
    console.log('inside UseEffect');
  },[])
  return(
    <>
    
      <button style={{marginTop: '50px'}} onClick={HandleClick}>Click Me</button>;
      <div>{counter}</div>;
    </>
  )
}
export default SampleTask
