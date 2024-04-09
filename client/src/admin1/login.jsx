// import React, { useState } from 'react'
// // import './web3.css'
// import styled from 'styled-components';

// import {Link, useNavigate} from "react-router-dom"
// import axios from 'axios';
// function Login() {
//   const [inputs,setInputs]=useState({});
//   const nav= useNavigate()
//   const savedata=(e)=>{
//     const name=e.target.name;
//     const value=e.target.value;
//     setInputs({...inputs,[name]:value});
//   };
//   const handlesubmit = async (e)=>{
//     e.preventDefault();
//     console.log(inputs);
//     try {
//       const result=await axios.post("http://localhost:5000/login",inputs) 
//       localStorage.setItem("token",result.data.data.email)
//       //console.log(result);
//       if(result.data.data.isadmin == false)
//       {
//         console.log("you are user")
//         nav('/')
//       }
//       else{
//         console.log("you are admin")
//         nav('/home')
//       }

//     } catch (error) {
//       console.log("failed post");
//     }
//   }
//   return (
//     <Parth>
//           <div >
//       <>
//   {/* Created By CodingNepal */}
  
//   <div className="wrapper">
//     <div className="title">Login Form</div>
//     <form onSubmit={handlesubmit}>
//       <div className="field">
//         <input type="text" name="email" onChange={savedata}required="" />
//         <label>Email Address</label>
//       </div>
//       <div className="field">
//         <input type="password" name="password" onChange={savedata} required="" />
//         <label>Password</label>
//       </div>
      
//       <div className="content">
//         <div className="checkbox">
//           <input type="checkbox" id="remember-me" />
//           <label htmlFor="remember-me">Remember me</label>
//         </div>
//         <div className="pass-link">
//           <a href="#">Forgot password?</a>
//         </div>
//       </div>
//       <div className="field">
//         <input type="submit" defaultValue="Login" />
//       </div>
//       {/* <div className="signup-link">
//          a member? <Link to="/regist">registration</Link>
//       </div> */}
//     </form>
//   </div>
// </>

//     </div>
//     </Parth>
  
//   )
// }

// export default Login

// const Parth = styled.div`
//     @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
//     *{
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//       font-family: 'Poppins', sans-serif;
//     }
//     html,body{
//       display: grid;
//       height: 100%;
//       width: 100%;
//       place-items: center;
//       background: #f2f2f2;
//       /* background: linear-gradient(-135deg, #c850c0, #4158d0); */
//     }
//     ::selection{
//       background: #4158d0;
//       color: #fff;
//     }
//     .wrapper{
//       width: 380px;
//       background: #fff;
//       border-radius: 15px;
//       box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
//       margin:auto;
//       margin-top:130px
//     }
//     .wrapper .title{
//       font-size: 35px;
//       font-weight: 600;
//       text-align: center;
//       line-height: 100px;
//       color: #fff;
//       user-select: none;
//       border-radius: 15px 15px 0 0;
//       background: linear-gradient(-135deg, #c850c0, #4158d0);
//     }
//     .wrapper form{
//       padding: 10px 30px 50px 30px;
//     }
//     .wrapper form .field{
//       height: 50px;
//       width: 100%;
//       margin-top: 20px;
//       position: relative;
//     }
//     .wrapper form .field input{
//       height: 100%;
//       width: 100%;
//       outline: none;
//       font-size: 17px;
//       padding-left: 20px;
//       border: 1px solid lightgrey;
//       border-radius: 25px;
//       transition: all 0.3s ease;
//     }
//     .wrapper form .field input:focus,
//     form .field input:valid{
//       border-color: #4158d0;
//     }
//     .wrapper form .field label{
//       position: absolute;
//       top: 50%;
//       left: 20px;
//       color: #999999;
//       font-weight: 400;
//       font-size: 17px;
//       pointer-events: none;
//       transform: translateY(-50%);
//       transition: all 0.3s ease;
//     }
//     form .field input:focus ~ label,
//     form .field input:valid ~ label{
//       top: 0%;
//       font-size: 16px;
//       color: #4158d0;
//       background: #fff;
//       transform: translateY(-50%);
//     }
//     form .content{
//       display: flex;
//       width: 100%;
//       height: 50px;
//       font-size: 16px;
//       align-items: center;
//       justify-content: space-around;
//     }
//     form .content .checkbox{
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//     form .content input{
//       width: 15px;
//       height: 15px;
//       background: red;
//     }
//     form .content label{
//       color: #262626;
//       user-select: none;
//       padding-left: 5px;
//     }
//     form .content .pass-link{
//       color: "";
//     }
//     /* background-image{
//       radial-gradient(circle at top right, rgb(36, 9, 119) 0%, rgb(36, 9, 119) 48%,rgb(72, 7, 149) 48%, rgb(72, 7, 149) 53%,rgb(109, 5, 178) 53%, rgb(109, 5, 178) 56%,rgb(145, 2, 208) 56%, rgb(145, 2, 208) 69%,rgb(181, 0, 237) 69%, rgb(181, 0, 237) 100%);
    
//     } */
//     form .field input[type="submit"]{
//       color: #fff;
//       border: none;
//       padding-left: 0;
//       margin-top: -10px;
//       font-size: 20px;
//       font-weight: 500;
//       cursor: pointer;
//       background: linear-gradient(-135deg, #c850c0, #4158d0);
//       transition: all 0.3s ease;
//     }
//     form .field input[type="submit"]:active{
//       transform: scale(0.95);
//     }
//     form .signup-link{
//       color: #262626;
//       margin-top: 20px;
//       text-align: center;
//     }
//     form .pass-link a,
//     form .signup-link a{
//       color: #4158d0;
//       text-decoration: none;
//     }
//     form .pass-link a:hover,
//     form .signup-link a:hover{
//       text-decoration: underline;
//     }  
// `


import React, { useState, useEffect, useRef } from 'react';
import { BiRefresh } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
function Login() {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [err, setErr] = useState('');
  const [captchaInitialized, setCaptchaInitialized] = useState(false);
  const nav = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!captchaInitialized) {
      initializeCaptcha();
      setCaptchaInitialized(true);
    }
  }, [captchaInitialized]);

  const generateRandomChar = (min, max) =>
    String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

  const generateCaptchaText = () => {
    let captcha = '';
    for (let i = 0; i < 3; i++) {
      captcha += generateRandomChar(65, 90);
      captcha += generateRandomChar(97, 122);
      captcha += generateRandomChar(48, 57);
    }
    return captcha.split('').sort(() => Math.random() - 0.5).join('');
  };

  const drawCaptchaOnCanvas = (ctx, captcha) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const textColors = ['black', 'black'];
    const letterSpace = 150 / captcha.length;

    // Set background color to white
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let i = 0; i < captcha.length; i++) {
      const xInitialSpace = 25;
      const xPos = xInitialSpace + i * letterSpace;
      const yPos = Math.floor(Math.random() * 16 + 25);

      ctx.font = 'bold 20px Roboto Mono';
      ctx.fillStyle = 'black'; // Set text color to black
      ctx.fillText(captcha[i], xPos, yPos); // Actual text
    }
  };

  const initializeCaptcha = () => {
    setUserInput('');
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawCaptchaOnCanvas(ctx, newCaptcha);
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const [inputs, setInputs] = useState({ email: '', password: '' }); // Initialize state with email and password fields

  const savedata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleCaptchaSubmit = async () => {
    if (userInput === captchaText) {
      try {
        const res = await axios.post('http://localhost:5000/login', inputs);
        // localStorage.setItem('token', res.data.tok);
        // localStorage.setItem('token', res.data.email);
        localStorage.setItem("token",res.data.data.email)
        if(res.data.data.isadmin == false)
        {
        console.log("you are user")
        nav('/')
        }
        else{
        console.log("you are admin")
        nav('/home')
        }
      } catch (e) {
        console.log('Login failed:', e);
        setErr('Please enter a valid id and password');
      }
    } else {
      setErr('Captcha is incorrect');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    const { email, password } = inputs; // Destructure email and password from inputs state
    if (!email || !password) {
      setErr('Please fill in all fields');
      return;
    }
    if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      setErr('Please enter a valid email address');
      return;
    }
   
    if (!userInput) {
      setErr('Please fill in the captcha');
      return;
    }
    handleCaptchaSubmit();
  };

  return (
    <Parth>
    <div>
     
        <div className="wrapper">
          <div className="title">Login Form</div>
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <input type="text" name="email" onChange={savedata} required="" />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="password" name="password" onChange={savedata} required="" />
              <label>Password</label>
            </div>
            <div className="">
              <div className="">
                <canvas
                  ref={canvasRef}
                  width="200"
                  height="70"
                  color="white"
                ></canvas>
                <br />
                <button
                  className="btn btn-primary"
                  onClick={initializeCaptcha}
                  style={{ color: "white" }}
                  type='button'
                >
                  <BiRefresh />
                </button>
              </div>
              <br />
              <div className="field">
                <input type="text" name="captcha" placeholder="Enter captcha text in the image" value={userInput} onChange={handleUserInputChange} />
              </div>
            </div>
           
            <div className="form-group">
                      <div style={{color:"red"}}>{err}</div>
                    </div>
            <div className="field">
              <input type="submit" defaultValue="Login" />
            </div>
          </form>
        </div>
      
    </div>
    </Parth>
  );
}

export default Login;

const Parth = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    html,body{
      display: grid;
      height: 100%;
      width: 100%;
      place-items: center;
      background: #f2f2f2;
      /* background: linear-gradient(-135deg, #c850c0, #4158d0); */
    }
    ::selection{
      background: #4158d0;
      color: #fff;
    }
    .wrapper{
      width: 380px;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
      margin:auto;
      margin-top:130px
    }
    .wrapper .title{
      font-size: 35px;
      font-weight: 600;
      text-align: center;
      line-height: 100px;
      color: #fff;
      user-select: none;
      border-radius: 15px 15px 0 0;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
    }
    .wrapper form{
      padding: 10px 30px 50px 30px;
    }
    .wrapper form .field{
      height: 50px;
      width: 100%;
      margin-top: 20px;
      position: relative;
    }
    .wrapper form .field input{
      height: 100%;
      width: 100%;
      outline: none;
      font-size: 17px;
      padding-left: 20px;
      border: 1px solid lightgrey;
      border-radius: 25px;
      transition: all 0.3s ease;
    }
    .wrapper form .field input:focus,
    form .field input:valid{
      border-color: #4158d0;
    }
    .wrapper form .field label{
      position: absolute;
      top: 50%;
      left: 20px;
      color: #999999;
      font-weight: 400;
      font-size: 17px;
      pointer-events: none;
      transform: translateY(-50%);
      transition: all 0.3s ease;
    }
    form .field input:focus ~ label,
    form .field input:valid ~ label{
      top: 0%;
      font-size: 16px;
      color: #4158d0;
      background: #fff;
      transform: translateY(-50%);
    }
    form .content{
      display: flex;
      width: 100%;
      height: 50px;
      font-size: 16px;
      align-items: center;
      justify-content: space-around;
    }
    form .content .checkbox{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    form .content input{
      width: 15px;
      height: 15px;
      background: red;
    }
    form .content label{
      color: #262626;
      user-select: none;
      padding-left: 5px;
    }
    form .content .pass-link{
      color: "";
    }
    /* background-image{
      radial-gradient(circle at top right, rgb(36, 9, 119) 0%, rgb(36, 9, 119) 48%,rgb(72, 7, 149) 48%, rgb(72, 7, 149) 53%,rgb(109, 5, 178) 53%, rgb(109, 5, 178) 56%,rgb(145, 2, 208) 56%, rgb(145, 2, 208) 69%,rgb(181, 0, 237) 69%, rgb(181, 0, 237) 100%);
    
    } */
    form .field input[type="submit"]{
      color: #fff;
      border: none;
      padding-left: 0;
      margin-top: -10px;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      background: linear-gradient(-135deg, #c850c0, #4158d0);
      transition: all 0.3s ease;
    }
    form .field input[type="submit"]:active{
      transform: scale(0.95);
    }
    form .signup-link{
      color: #262626;
      margin-top: 20px;
      text-align: center;
    }
    form .pass-link a,
    form .signup-link a{
      color: #4158d0;
      text-decoration: none;
    }
    form .pass-link a:hover,
    form .signup-link a:hover{
      text-decoration: underline;
    }  
`