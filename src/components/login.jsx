import { Checkbox } from 'antd'
import React from 'react'
import { useState } from 'react'
import "./login.css" 
import image from "./login.jpg" 
import axios from "axios"



function Login() { 
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("") 
    const [open, setOpen] = useState(false);

    function handleChange(e){
        if(e.target.type==='password')
        setpassword(e.target.value)
        else 
        setemail(e.target.value) 
        
    } 

    async function handleSubmit(){ 
        try {
            const fetchedData = await axios.post("https://reqres.in/api/login",{
                "email": email,
                "password": password
            }) 
            if(fetchedData){
                {
                  alert("Success")
                }
            }
        } catch (error) {
            console.log( error) 
            alert("Failed "+error)
            Error(error);
        }

    }
   
  return (
   


    <div class="login">

      <div class="login-card">

  
        <div class="login-form">
          <h1>Welcome Back</h1>
          <h4>Hello Guyz</h4>
          <input type="text" placeholder="Email Address *" onChange={handleChange} value={email}></input>
          <input type="password" placeholder="Password *" onChange={handleChange} value={password}></input>  
          <button onClick={handleSubmit}>Login</button>
          <div className='bottom'>
            <span className='remember-password'> <Checkbox /> Remember Password</span>
          <a className='forgot-password'>Forgot Password?</a>

          </div>
        </div> 
        <img src={image} alt=""></img>


      </div>




    </div>
    
  )
}

export default Login