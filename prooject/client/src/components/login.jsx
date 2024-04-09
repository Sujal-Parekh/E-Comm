import React, { useState, useEffect, useRef } from 'react';
import { BiRefresh } from "react-icons/bi";
import './web3.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

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
        nav('/index')
        }
        else{
        console.log("you are admin")
        nav('/')
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
    <div>
      <>
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
            <div className="content">
              <div className="checkbox">
              </div>
              <div className="pass-link">
                <Link to="otpverify">Forgot password?</Link>
              </div>
            </div>
            <div className="form-group">
                      <div style={{color:"red"}}>{err}</div>
                    </div>
            <div className="field">
              <input type="submit" defaultValue="Login" />
            </div>
            <div className="signup-link">
               Not a member? <Link to="/regist">Register</Link>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}

export default Login;

//import React, { useState, useEffect, useRef } from 'react';
// import { BiRefresh } from "react-icons/bi";
// import './web3.css'
// import {Link, useNavigate} from "react-router-dom"
// import axios from 'axios';
// function Login() {
//   const [captchaText, setCaptchaText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [err, setErr] = useState('');
//   const [captchaInitialized, setCaptchaInitialized] = useState(false);
//   const navigate = useNavigate();
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (!captchaInitialized) {
//       initializeCaptcha();
//       setCaptchaInitialized(true);
//     }
//   }, [captchaInitialized]);

//   const generateRandomChar = (min, max) =>
//     String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

//   const generateCaptchaText = () => {
//     let captcha = '';
//     for (let i = 0; i < 3; i++) {
//       captcha += generateRandomChar(65, 90);
//       captcha += generateRandomChar(97, 122);
//       captcha += generateRandomChar(48, 57);
//     }
//     return captcha.split('').sort(() => Math.random() - 0.5).join('');
//   };

//   const drawCaptchaOnCanvas = (ctx, captcha) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     const textColors = ['black', 'black'];
//     const letterSpace = 150 / captcha.length;

//     // Set background color to white
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

//     for (let i = 0; i < captcha.length; i++) {
//       const xInitialSpace = 25;
//       const xPos = xInitialSpace + i * letterSpace;
//       const yPos = Math.floor(Math.random() * 16 + 25);

//       ctx.font = 'bold 20px Roboto Mono';
//       ctx.fillStyle = 'black'; // Set text color to black
//       ctx.fillText(captcha[i], xPos, yPos); // Actual text
//     }
//   };

//   const initializeCaptcha = () => {
//     setUserInput('');
//     const newCaptcha = generateCaptchaText();
//     setCaptchaText(newCaptcha);
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     drawCaptchaOnCanvas(ctx, newCaptcha);
//   };

//   const handleUserInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const [inputs,setInputs]=useState({});
//   const nav= useNavigate()
//   const savedata=(e)=>{
//     const name=e.target.name;
//     const value=e.target.value;
//     setInputs({...inputs,[name]:value});
//   };
// //   const handlesubmit = async (e)=>{
// //     e.preventDefault();
// //     console.log(inputs);
    
// //   //   try {
      
// //   //     const result=await axios.post("http://localhost:5000/login",inputs) 
// //   //     localStorage.setItem("token",result.data.data.email)
// //   //     //console.log(result);
// //   //     if(result.data.data.isadmin == false)
// //   //     {
// //   //       console.log("you are user")
// //   //       nav('/index')
// //   //     }
// //   //     else{
// //   //       console.log("you are admin")
// //   //       nav('/')
// //   //     }

// //   //   } catch (error) {
// //   //     console.log("failed post");
// //   //   }
// //   // }
// //   if (userInput === captchaText) {
// //     try {
// //       const res = await axios.post('http://localhost:5000/login', inputs);
// //       localStorage.setItem("token",res.data.data.email)
// //       navigate( '/home');
// //     } catch (e) {
// //       console.log('Login failed:', e);
// //       setErr('Please enter a valid id and password');
// //     }
// //   } else {
// //     setErr('Captcha is incorrect');
// //   }
// // };
// const handleCaptchaSubmit = async () => {
//   if (userInput === captchaText) {
//     try {
//       const res = await axios.post('http://localhost:5000/login', inputs);
//       localStorage.setItem('token', res.data.tok);
      
//       navigate(res.data.data.isAdmin ? '/admin' : '/home');
//     } catch (e) {
//       console.log('Login failed:', e);
//       setErr('Please enter a valid id and password');
//     }
//   } else {
//     setErr('Captcha is incorrect');
//   }
// }; 
// const handleFormSubmit = async (e) => {
//   e.preventDefault();
//   setErr('');
//   if (!email || !password) {
//     setErr('Please fill in all fields');
//     return;
//   }
//   if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
//     setErr('Please enter a valid email address');
//     return;
//   }
//   if (password.length < 6) {
//     setErr('Password should be at least 6 characters long');
//     return;
//   }
//   if (!userInput) {
//     setErr('Please fill in the captcha');
//     return;
//   }
//   handleCaptchaSubmit();
// };

//   return (
//     <div >
//       <>
//   {/* Created By CodingNepal */}
  
//   <div className="wrapper">
//     <div className="title">Login Form</div>
//     <form onSubmit={handleFormSubmit}>
//       <div className="field">
//         <input type="text" name="email" onChange={savedata}required="" />
//         <label>Email Address</label>
//       </div>
//       <div className="field">
//         <input type="password" name="password" onChange={savedata} required="" />
//         <label>Password</label>
//       </div>
//       <div className="">
//                       <div className="">
//                         <canvas
//                           ref={canvasRef}
//                           width="200"
//                           height="70"
//                           color="white"
//                         ></canvas>
//                         <br/>
//                         <button
//                           className="btn btn-primary"
//                           onClick={initializeCaptcha}
//                           style={{color:"white"}}
//                           type='button'
//                         >
//                           <BiRefresh />
//                           {/* <i class="fa-solid fa-arrows-rotate"></i> */}
//                           {/* <i className='fa fa-refresh' />  */}
//                         </button>
                          
//                       </div>
//                       <br/>
//                       {/* <div className="form-group">
//                         <input
//                           className="form-control p_input"
//                           type="text"
//                           placeholder="Enter captcha text in the image"
//                           value={userInput}
//                           onChange={handleUserInputChange}
                          
//                         />
//                       </div> */}
//                       <div className="field">
//         <input type="text" name="email" placeholder="Enter captcha text in the image"  value={userInput}
//                           onChange={handleUserInputChange} />
//       </div>
//                     </div>
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
//       <div className="signup-link">
//          a member? <Link to="/regist">registration</Link>
//        </div>
//      </form>
//    </div>
//  </>

//      </div>
//   )
// }

//  export default Login

             





// import React, { useState, useEffect, useRef } from 'react';
// import { BiRefresh } from "react-icons/bi";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import './web3.css';

// function Login() {
//   const [captchaText, setCaptchaText] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [err, setErr] = useState('');
//   const [captchaInitialized, setCaptchaInitialized] = useState(false);
//   const [inputs, setInputs] = useState({});
//   const navigate = useNavigate();
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (!captchaInitialized) {
//       initializeCaptcha();
//       setCaptchaInitialized(true);
//     }
//   }, [captchaInitialized]);

//   const generateRandomChar = (min, max) =>
//     String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

//   const generateCaptchaText = () => {
//     let captcha = '';
//     for (let i = 0; i < 3; i++) {
//       captcha += generateRandomChar(65, 90);
//       captcha += generateRandomChar(97, 122);
//       captcha += generateRandomChar(48, 57);
//     }
//     return captcha.split('').sort(() => Math.random() - 0.5).join('');
//   };

//   const drawCaptchaOnCanvas = (ctx, captcha) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     const textColors = ['black', 'black'];
//     const letterSpace = 150 / captcha.length;

//     // Set background color to white
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

//     for (let i = 0; i < captcha.length; i++) {
//       const xInitialSpace = 25;
//       const xPos = xInitialSpace + i * letterSpace;
//       const yPos = Math.floor(Math.random() * 16 + 25);

//       ctx.font = 'bold 20px Roboto Mono';
//       ctx.fillStyle = 'black'; // Set text color to black
//       ctx.fillText(captcha[i], xPos, yPos); // Actual text
//     }
//   };

//   const initializeCaptcha = () => {
//     setUserInput('');
//     const newCaptcha = generateCaptchaText();
//     setCaptchaText(newCaptcha);
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     drawCaptchaOnCanvas(ctx, newCaptcha);
//   };

//   const savedata = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const handleUserInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleCaptchaSubmit = async () => {
//     if (inputs.captcha === captchaText) {
//       try {
//         const res = await axios.post('http://localhost:5000/login', inputs);
//         localStorage.setItem('token', res.data.tok);
//         navigate( '/home');
//       } catch (e) {
//         console.log('Login failed:', e);
//         setErr('Please enter a valid id and password');
//       }
//     } else {
//       setErr('Captcha is incorrect');
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setErr('');
//     const { email, password } = inputs;
//     if (!email || !password) {
//       setErr('Please fill in all fields');
//       return;
//     }
//     if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
//       setErr('Please enter a valid email address');
//       return;
//     }
//     if (password.length < 6) {
//       setErr('Password should be at least 6 characters long');
//       return;
//     }
//     if (!userInput) {
//       setErr('Please fill in the captcha');
//       return;
//     }
//     handleCaptchaSubmit();
//   };

//   return (
//     <div>
//       <div className="wrapper">
//         <div className="title">Login Form</div>
//         <form onSubmit={handleFormSubmit}>
//           <div className="field">
//             <input type="text" name="email" onChange={savedata} required="" />
//             <label>Email Address</label>
//           </div>
//           <div className="field">
//             <input type="password" name="password" onChange={savedata} required="" />
//             <label>Password</label>
//           </div>
//           <div className="">
//             <div className="">
//               <canvas
//                 ref={canvasRef}
//                 width="200"
//                 height="70"
//                 color="white"
//               ></canvas>
//               <br />
//               <button
//                 className="btn btn-primary"
//                 onClick={initializeCaptcha}
//                 style={{ color: "white" }}
//                 type='button'
//               >
//                 <BiRefresh />
//               </button>
//             </div>
//             <br />
//             <div className="field">
//               <input type="text" name="captcha" placeholder="Enter captcha text in the image" value={userInput} onChange={handleUserInputChange} />
//             </div>
//           </div>
//           <div className="content">
//             <div className="checkbox">
//               <input type="checkbox" id="remember-me" />
//               <label htmlFor="remember-me">Remember me</label>
//             </div>
//             <div className="pass-link">
//               <a href="#">Forgot password?</a>
//             </div>
//           </div>
//           <div className="field">
//             <input type="submit" defaultValue="Login" />
//           </div>
//           <div className="signup-link">
//             Not a member? <Link to="/register">Register</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;










