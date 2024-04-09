import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
// import Pageheader from './Pageheader'
import Footer from './Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Checkout() {
  const cart_list = JSON.parse(localStorage.getItem('cart_list'));
  const [cartData, setCartData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [err, setErr] = useState('');
  const [data, setData] = useState([]);
  const [payid, setPayid] = useState('');
  const [orid, setOrid] = useState('');
  const [sign, setSign] = useState('');
  const [profile,setProfile] = useState();
  const tok = localStorage.getItem("token");
const[loading,setLoading]=useState(false)
  const navi = useNavigate()
  
    
  useEffect(() => {
   
      getcart();
        
  }, [])
  const pfdata = async ()=>{
    const res= await axios.get('')
  }
  
  const getcart = () => {
    const product = JSON.parse(localStorage.getItem('cart_list'));
    setCartData(product)
    console.log("get cart data", cartData)
  }
  useEffect(() => {
    const fetchData = async () => {
      const tok = localStorage.getItem("token");
      if (!tok) {
        // navi('/login');
      } else {
        try {
          const res = await axios.get(`http://localhost:5000/auth/${tok}`);
          if (res.data === "Token is expired ") {
            // localStorage.removeItem("token");
            // navi("/login");
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
  }, [navi]);

  const totalcart = () => {
    // return cartData.reduce((total, item) => total + Number(item.user_qty * item.price), 0)
    return cartData ? cartData.reduce((total, item) => total + Number(item.user_qty * item.price), 0) : 0;
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
        "key": "rzp_test_dBUhnvelCNNpac", // Enter the Key ID generated from the Dashboard
        "amount": dat.amount / 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": dat.currency,
        "name": "E SHOPPER",
        "description": "Test Transaction",
        "order_id": dat.id, // This is a sample Order ID. Pass the id obtained in the response of Step 1
        "handler": function (response) {
          console.log("response", response);
          setPayid(response.razorpay_payment_id);
          axios.post('http://localhost:5000/verify', { response: response }).then((res) => {
            if (res.status === 200) {
              axios.post('http://localhost:5000/order', {
                product: cartData,
                payid:response.razorpay_payment_id,
                orderid: response.razorpay_order_id,
                signature: response.razorpay_signature,
                amount: dat.amount,
                email:localStorage.getItem("token"),
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
             localStorage.removeItem('cart_list');

              getcart();
              navi('/list');
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
    else {
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
      <Topbar />
      <Navbar />
      {/* <Pageheader /> */}
      <form onSubmit={handelsubmit}>

        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input type="text" name="fname" className="form-control p_input" onChange={handelchange} />

                  </div>
                
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input type="text" name="email" className="form-control p_input"onChange={handelchange} />

                  </div>
                  <div className="col-md-6 form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phone" maxLength={10} className="form-control p_input" onChange={handelchange} />

                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control p_input" onChange={handelchange} />

                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="new address for shipping address"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <input type="text" name="country" className="form-control p_input" onChange={handelchange} />

                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input type="text" name="state" className="form-control p_input" onChange={handelchange} />

                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input type="text" name="city" className="form-control p_input" onChange={handelchange} />

                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input className="form-control" type="text" placeholder={123} />
                  </div>
                  {/* <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newaccount"
                      />
                      <label className="custom-control-label" htmlFor="newaccount">
                        Create an account
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="shipto"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="shipto"
                        data-toggle="collapse"
                        data-target="#shipping-address"
                      >
                        Ship to different address
                      </label>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="form-group text-center">
                <label>{err}</label>
              </div>
              
            </div>
            {cartData?.map((item, index) => (

              <div className="col-lg-4">
                <div className="card border-secondary mb-5">
                  <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="font-weight-medium mb-3">Products</h5>
                    <div className="d-flex justify-content-between">
                      <p>{item.logoname}</p>
                      <p>${item.price}</p>
                    </div>

                  </div>
                  <div className="card-footer border-secondary bg-transparent">
                    <div className="d-flex justify-content-between mt-2">
                      <h5 className="font-weight-bold">Total</h5>
                      <h5 className="font-weight-bold">{totalcart()} </h5>
                    </div>
                  </div>
                </div>
                <div className="card border-secondary mb-5">
                  
                  <div className="card-footer border-secondary bg-transparent">
                    <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" onClick={() => handelpayment(totalcart())}>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>


        <Footer />
      </form>
    </div>
  )
}

export default Checkout
