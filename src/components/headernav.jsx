import React from 'react'
import { Button } from 'antd'; 
import "./header.css"
function Headernav() {
  return (
    <div className='header'>

   <div className='logo'>
     <span className='text'>ATools</span>
     <span className='dot'>.</span>
   </div> 
   <div className='links'>
   <a>  <Button  className='free-trial ' style={{"backgroundColor":"#012943" , "border": "none"}} type="primary">Start Free Trial</Button></a>
   <a>  <Button  style={{"backgroundColor":"#fb8500" , "border": "none"}} type="primary">Login</Button></a>
   
   </div>
   

    </div>
  )
}

export default Headernav