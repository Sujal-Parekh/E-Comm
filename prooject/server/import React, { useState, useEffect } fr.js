import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';import 'react-toastify/dist/ReactToastify.min.css'
import {ToastContainer,toast} from 'react-toastify'

function Odform() {
     const [cartitems, setCartitems] = useState([]);
     const [inputs, setInputs] = useState({});
     const [err, setErr] = useState('');
     const [data, setData] = useState([]);
     const [payid, setPayid] = useState('');
     const [orid, setOrid] = useState('');
     const [sign, setSign] = useState('');
     const [loading, setLoading] = useState(false);
     const navigat = useNavigate();

     const show = () => {
          toast.success("Network Error", {
            position: "top-center"
          });
     };

     useEffect(() => {
          const fetchData = async () => {
               const tok = localStorage.getItem("token");
               if (!tok) {
                    navigat('/login');
               } else {
                    try {
                         const res = await axios.get(`http://localhost:5000/auth/${tok}`);
                         if (res.data === "Token is expired ") {
                              localStorage.removeItem("token");
                              navigat("/login");
                         } else {
                              setData(res.data);
                              console.log("profile data", data);
                              getcart();
                         }
                    } catch (error) {
                         console.log("profile err", error);
                    }
               }
          };
          fetchData();
     }, [navigat]);

     const totalcart = () => {
          return cartitems.reduce((total, item) => total + Number(item.price * item.userqty), 0)
     }

     const getcart = () => {
          const product = JSON.parse(localStorage.getItem("product"));
          console.log("cart ", product)
          setCartitems(product);
          console.log("cart ", cartitems)
     }

     const handelpayment = async (amt) => {
          try {
               setLoading(true);
               const { data: paymentData } = await axios.post('http://localhost:5000/payment', { amount: amt });
               console.log("payment data", paymentData);
               handelopenrazorpay(paymentData);
               
               
          } catch (error) {
               console.log("payment error", error);
          } finally {
               setLoading(false);
          }
     }

     const handelopenrazorpay = (dat) => {
          if (window.Razorpay) {
               const options = {
                    "key": "rzp_test_0yPlbNRf5AdsX7", // Enter the Key ID generated from the Dashboard
                    "amount": dat.amount / 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": dat.currency,
                    "name": "Lapworld",
                    "description": "Test Transaction",
                    "order_id": dat.id, // This is a sample Order ID. Pass the id obtained in the response of Step 1
                    "handler": function (response) {
                        console.log("response", response);
                        setPayid(response.razorpay_payment_id);
                        setOrid(response.razorpay_order_id);
                        setSign(response.razorpay_signature);
                        axios.post('http://localhost:5000/verify', { response: response }).then((res) => {
                            if (res.status === 200) {
                              axios.post('http://localhost:5000/order', {
                                   product: cartitems,
                                   payid: payid,
                                   // orderid:orid,
                                   // signature:sign,
                                   amount: data.amount,
                                   email: data.email,
                                   fname: inputs.fname,
                                   lname: inputs.lname,
                                   phone: inputs.phone,
                                   country: inputs.country,
                                   state: inputs.state,
                                   city: inputs.city
                              });
                              console.log("Order placed successfully");
                                console.log("if condition", res);
                                // localStorage.removeItem("product");
                                getcart();
                                // navigat('/home');
                            } else {
                             
                                console.log("else condition", res);
                            }
                        });
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };
               const rzp = new window.Razorpay(options);
               rzp.open();     
               }
               else{
                    show();
                    console.log("please login again")
               }
          
           
          
     }

     const handelchange = (e) => {
          setInputs({ ...inputs, [e.target.name]: e.target.value })
     }

     const handelsubmit = (e) => {
          e.preventDefault();
          handelpayment(totalcart());
     }

     return (
          <div>
          <ToastContainer/>
               <div className="container-scroller"><br /></div>
               <div className="container-scroller">
                    <div className="card col-lg-4 mx-auto">
                         <div className="card-body px-5 py-5">
                              <h3 className="card-title mb-3">Product Data</h3>
                              {cartitems?.map((item) => (
                                   <div key={item.id}>
                                        <span className="text-right">{item.name}</span>
                                        <span className="text-right">{item.price}</span>
                                   </div>
                              ))}
                              <div className="text-center">
                                   Total : {totalcart()} .rs
                              </div>
                              <div className="text-center">
                                   <button
                                        type="submit"
                                        className="btn btn-primary btn-block enter-btn"
                                   >
                                        Change
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="container-scroller">
                    <div className="card col-lg-4 mx-auto">
                         <div className="card-body px-5 py-5">
                              <h3 className="card-title text-left mb-3">Fill Address Information</h3>
                              <form onSubmit={handelsubmit}>
                                   <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="fname" className="form-control p_input" onChange={handelchange} />
                                   </div>
                                   <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="lname" className="form-control p_input" onChange={handelchange} />
                                   </div>
                                   <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" maxLength={10} className="form-control p_input" onChange={handelchange} />
                                   </div>
                                   <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" name="address" className="form-control p_input" onChange={handelchange} />
                                   </div>
                                   <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" name="country" className="form-control p_input" onChange={handelchange} />
                                   </div>
                                   <div className="form-group">
                                        <label>State</label>
                                        <input type="text" name="state" className="form-control p_input" onChange={handelchange} />
                                   </div>
                                   <div className="form-group">
                                        <label>City</label>
                                        <input type="text" name="city" className="form-control p_input" onChange={handelchange} />
                                   </div>
                                   <div className="form-group text-center">
                                        <label>{err}</label>
                                   </div>
                                   <div className="text-center">
                                        <button
                                             type="submit"
                                             className="btn btn-primary btn-block enter-btn"
                                             disabled={loading} // Disable button when loading
                                        >
                                             {loading ? 'Processing...' : 'Next'}
                                        </button>
                                   </div>
                                   <br />
                                   <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block enter-btn">
                                             Cancel
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               <div className="container-scroller"><br /></div>
          </div>
     )
}

export default Odform;