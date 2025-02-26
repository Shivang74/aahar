import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
    function showAlert() {
    alert('We are working on this, please wait for some time.');
}
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your E-mail' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button onclick="showAlert()"> {currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By proceeding, I agree to terms and privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
            
        </form>
      Chandika!
    </div>
  )
}

export default LoginPopup
