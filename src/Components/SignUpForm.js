import React,{useState} from "react"
import logo from '../Images/logo.png'
import search from '../Images/search.png'
import facebook from '../Images/facebook.png'
import vector from '../Images/Vector.png'

const SignUpForm=()=>{

    let [password,setPassword]= useState("")
    let [confirmPassword, setConfirmPassword]= useState("")
    let [message,setMessage]= useState("")
    let [name,setName]= useState("")
    let [email,setEmail]= useState("")
    let [messageColor, setMessageColor]= useState("")

    function validateForm(){
        if(name===""){
            setMessageColor("redColor")
            setMessage("Error: Please enter your Name.")
        }
        else if(email===""){
            setMessageColor("redColor")
            setMessage("Error: Please enter your Email.")
        } else if(email!=="" && !email.includes('@' && '.')){
            setMessageColor("redColor")
            setMessage("Error: Please enter correct Email.")
        }else if(password.length<3 || password.length>15){
            setMessageColor("redColor")
            setMessage("Error: Password should contain 3 to 15 characters.")
        }
         else if(password!==confirmPassword){
            setMessageColor("redColor")
            setMessage("Error: Please Make sure your passwords and confirm passwords match!")
        } else{
            setMessageColor("greenColor")
            setMessage("Successfully Created!")
        }
    }

    return (
        <div className="main">
             <img src={logo}/>
            <div className="left">
                <p>Find 3D Objects, Mockups <br/> and Ilustration here</p>
            </div>
            <div className="right">
                <h1>Create Account</h1>
                <div className="btn-sec">
                    <button className="btn" id="google"><span>Sign up with Google</span> </button>
                    <button className="btn" id="facebook"><span>Sign up with Facebook</span> </button>
                </div>
                <div>
                    <p>- OR -</p>
                </div>
            <form>
               <div>
                <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div>
                <input type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div>
                <input type="password" className="pass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div>
                <input type="password" className="pass"  placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                </div>
                <button type="submit" onClick={(e)=>validateForm()}> Create Account</button>
            </form>
            {
                {message} && <p className={`${messageColor}`}>{message}</p>
            }</div>
            
        </div>
    )
}
export default SignUpForm