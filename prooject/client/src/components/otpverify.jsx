import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import validator from 'validator';
import './web3.css';

function OtpVerify() {
     const [step , setStep] = useState(1)
     const [one,setOne] = useState();
     const [two,setTwo] = useState();
     const [three,setThree] = useState();
   
     const [loader,setLoader] = useState(false);

     const next = () =>{
          setStep(step + 1)    
     }
     const back = () =>{
          setStep(step - 1)    
     }

     const St1 = ({onnext})=>{
          const [email,setEmail] = useState('');
          const [err,setErr] = useState('')
          const [msg,setMsg] = useState('')
     
          const handelsubmit = async (e) =>{
              
               e.preventDefault();
               console.log("name:",email);
               if(email == '')
               {
                    setErr("Please enter email");
                    return;
               }
              //  else if(!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/))
              else if(!validator.isEmail(email))
               {
                    setErr("Please enter email properly");
                    return;
               }
               else{

                    setErr('');
                    setLoader(true);
                    setMsg("otp is being sent")
                    setOne(email);
                    axios.post("http://localhost:5000/sendotp",{
                         'email':email
                    }).then((res)=>{
                         console.log("res.data",res.data);
                         if(res.status === 200)
                         {
                          setLoader(false);
                              onnext();
                         }
                         else{
                              console.log("error");
                         }
                    })    
               }    
          }
          return(
               <>

           
<div className="wrapper">
                
<div className="title">Login </div>
                  <form>
                    <div className="field">
                     
                      <input
                        type="text"
                        className=""
                        name="email"
                        value={email}
                        placeholder="enter email"
                        onChange={(e) => setEmail(e.target.value)}

                        required
                      />
                    </div>
                    <div className="">
                      <div style={{color:"red"}}>{err}{msg}</div>
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="field"
                        onClick={handelsubmit}
                        disabled={loader}
                        
                        style={{color:"blue"}}
                      >
                        {loader ? 'Processing...':'Get Otp'}
                      </button>
                    </div>  
                  </form>
                
              </div>
</>
          )
     }
     
     
     const St2 = ({onnext,onback})=>{
          const [otp,setOtp] = useState('');
          const [err,setErr] = useState('')
     
          const handelsubmit = async () => {
            console.log("email:" + otp);
            if (String(otp) === '') {
                setErr("Please enter otp");
                return;
            } else if (!String(otp).match(/^[0-9]{6,6}$/)) {
                setErr("Please enter otp properly");
                return;
            } else {
                setErr('');
                setLoader(true);
        
                try {
                  console.log("email: new" + otp);
                    const res = await axios.post("http://localhost:5000/submitotp", {
                        'email': one,
                        'otp': otp
                    });
                    console.log("res data",res.data);
                    if (res.data === "otp verified") {
                        setLoader(false);
                        onnext();
                    } else {
                        setLoader(false);
                        setErr("Wrong otp");
                        return;
                    }
                } catch (error) {
                    setLoader(false);
                    setErr("Error occurred while verifying OTP");
                    console.error("Error occurred:", error);
                }
            }
        }
        const handleOtpChange = (e) => {
            setOtp(e.target.value);
            setErr(''); // Clear error message
        }
          return(
               <>

           
<div className="wrapper">
<div className="title">verifyotp </div>
            
                             
                             <form>
                    <div className="field">
                      
                                 <input
                                   type="number"
                                   className=""
                                   name="email"
                                   placeholder="enter otp"
                                   maxLength={6}
                                   value={otp}
                                   onChange={(e) => setOtp(e.target.value)}
                                   required
                                 />
                               </div>
                               <div className="">
                                 <div style={{color:"red"}}>{err}</div>
                               </div>
                               <div className="form-group">
                                 <button
                                   type="button"
                                   className="field"
                                   onClick={handelsubmit}
                                   disabled={loader}
                                 >
                                   {loader ? 'Processing...':'Verify'}
                                 </button>
                               </div>  
                             </form>
                          </div> 
           </>
          )
     }
     
    //  const St3 = ({ onnext, onback }) => {
    //     const [password, setPassword] = useState('');
    //     const [err, setErr] = useState('');
    //     const [loader, setLoader] = useState(false); // Added loader state
    //     const nav = useNavigate();
    
    //     const handelsubmit = () => {
    //         console.log("Password:" + password);
    
    //         if (!password.trim()) {
    //             setErr("Please enter a password");
    //             return;
    //         } else if (password.trim().length < 6) {
    //             setErr("Password must be at least 6 characters");
    //             return;
    //         } else {
    //             setErr('');
    //             setLoader(true);
    //             // Assuming setThree is a function passed as a prop
    //             // You need to define it or import it from another file
    //             setThree(password);
    //             axios.post("http://localhost:5000/uppassword", {
    //                 'email': one, // Assuming 'one' is defined somewhere
    //                 'pass': password
    //             })
    //             .then((res) => {
    //                 console.log("res.data", res.data);
    //                 if (res.status === 200) {
    //                     setLoader(false);
    //                     nav('/'); // Navigate to home page on success
    //                 } else {
    //                     console.log("error");
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Error:", error);
    //                 setLoader(false);
    //                 setErr("An error occurred. Please try again later.");
    //             });
    //         }
    //     }
    
    //     return (
    //         <>
    //             <div className="wrapper">
    //                 <div className="title">New Password</div>
    //                 <form>
    //                     <div className="form-group">
    //                         <input
    //                             type="password"
    //                             className=""
    //                             name="password"
    //                             value={password}
    //                             placeholder="Enter a new password"
    //                             onChange={(e) => setPassword(e.target.value)}
    //                             required
    //                         />
    //                     </div>
    //                     <div className="form-group">
    //                         <div style={{ color: "red" }}>{err}</div>
    //                     </div>
    //                     <div className="form-group">
    //                         <button
    //                             type="button"
    //                             className="field"
    //                             onClick={handelsubmit}
    //                             disabled={loader}
    //                         >
    //                             {loader ? 'Processing...' : 'Update password'}
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </>
    //     );
    // }
     const St3 = ({onnext,onback})=>{
          const [password,setPassword] = useState('');
          const [err,setErr] = useState('');
          const nav = useNavigate();
     
          const handelsubmit = () =>{
               console.log("Password:"+ password);
              //  validator.is
            //   onnext();
            
        
            if(!password.trim()) {
                    setErr("Please enter password")
                    return;
               }
               else if (password.trim().length < 6) {
                    setErr("Password must be at least 6 characters");
                    return;
               }
               else{
                    setErr('');
                    setLoader(true);
                    setThree(password);
                    axios.post("http://localhost:5000/uppassword",{
                         'email':one,
                         'pass':password
                    }).then((res)=>{
                         console.log("res.data",res.data);
                         if(res.status === 200)
                         {
                              setLoader(false);
                              nav('/');
                         }
                         else{
                              console.log("error");
                         }
                    })    
               }
               
          }
     
          return(
               <>
              <div className="wrapper">
<div className="title">new password </div>
            
                            
                             <form>
                               <div className="field">
                                 <input
                                   type="password"
                                   className=""
                                   name="password"
                                   value={password}
                                   placeholder="enter a new password"
                                   onChange={(e) => setPassword(e.target.value)}
                                  
                                   required
                                 />
                               </div>
                               <div className="form-group">
                                 <div style={{color:"red"}}>{err}</div>
                               </div>
                               <div className="field">
                                 <button
                                   type="button"
                                   className="field"
                                   onClick={handelsubmit}
                                   disabled={loader}
                                 >
                                    {loader ? 'Processing...':'Update password'}
                                 </button>
                               </div>  
                             </form>
                           </div>
           </>
          )
     }
     
     
    //  const St4 = ({onback})=>{
    //       const [phone,setPhone] = useState('');
    //       const [err,setErr] = useState('')
     
    //       const chphone = (e)=>{
    //            setPhone(e.target.value);
               
    //       }
    //       const handelsubmit = (e) =>{
    //            e.preventDefault();
    //            // console.log("phone:"+ phone);
    //            // setFour(e.target.value);
    //            if(phone == '')
    //            {
    //                 setErr("Please enter phone number")
    //                 return;
    //            }
    //            else if(!phone.match(/^[0-9]{10,}$/))
    //            {
    //                 setErr("Phone number can contain numbers only");
    //                 return;
    //            }
    //            else{
    //                 setErr('');
    //                 console.log(one,two,three,phone)
                    
    //            }
               
               
    //       }
     
    //       return(
    //            <>
    //                 <div className="wrapper">
    //    <div className="title">Step-4</div>
    //    <form>
    //      <div className="field">
    //        <input required type="text" onChange={chphone} />
    //       <label>Phone Number</label>
    //     </div>
    //     <div className="field">
    //       <input type="submit" className='byn' value="Submit" onClick={handelsubmit}/>
    //     </div>
    //     <div className="field">
    //       <input type="button" className='byn' value="Previous" onClick={onback}/>
    //     </div>
    //     <div className="field">
    //       {err}
    //     </div>
    //   </form>
    // </div>          
    //            </>
    //       )
    //  }
     


     const display= () =>{
          switch(step){
               case 1:
                    return <St1 onnext={next}/>
               case 2:
                    return <St2 onnext={next}  onback={back} />
               case 3:
                    return <St3 onnext={next} onback={back} />
            //    case 4:
            //         return <St4 onnext={next} onback={back} />
               default:
                    return null;
          }
     }


  return (
    <div className="wrapper">
          {display()}
    </div>
  )
};


export default OtpVerify