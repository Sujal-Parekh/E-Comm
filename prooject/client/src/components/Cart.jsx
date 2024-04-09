import React, { useEffect } from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
// import Pageheader from './Pageheader'
import Footer from './Footer'
import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const AddToCart = () => {
  const [cname, setCname] = useState([]);
  

  const show = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getcategory")//.then((result) => {
      //   setCname(result?.data)
      //   console.log(result.data,"dddddddddddd");
      // console.log(setCname);
      // console.log("logggggggg",setCname);
      // })
      setCname(result.data.data);
     
    } catch (error) {
      console.log(error)
    }
  }
  function handleNavigation(label) {
    window.location.href = `/${label.toLowerCase()}`; // navigate to the lowercase label
  }

  const cart_list = JSON.parse(localStorage.getItem('cart_list'));
  const [cartData, setCartData] = useState([]);
  const navi = useNavigate()
  useEffect(() => {
    getcart();
  }, [])

  const removeFromCart = (item) => {
    const newCartData = cartData.filter((data) => data._id !== item._id);
    setCartData(newCartData)
    localStorage.setItem('cart_list', JSON.stringify(newCartData))
  }

  const getcart = () => {
    const product = JSON.parse(localStorage.getItem('cart_list'));
    setCartData(product)
    console.log("get cart data", cartData)
  }

  console.log("cartData", cartData);
  const handleQuantity = (qty, index, total) => {
    cartData[index] = { ...cartData[index], user_qty: qty, total_amt: parseInt(qty) * parseInt(cartData[index].price), };
    setCartData([...cartData]);
    localStorage.setItem('cart_list', JSON.stringify(cartData));

  };

  const totalcart = () => {
    // return cartData.reduce((total, item) => total + Number(item.user_qty * item.price), 0)
    return cartData ? cartData.reduce((total, item) => total + Number(item.user_qty * item.price), 0) : 0;
}
  
  
  return (
    <div>
      <Topbar />
      <Navbar />
      {/* <Pageheader /> */}


      {/*  */}
      {/* <div>
  <div><h1>CART DATA</h1></div>
{cartData.map((item)=>(
  <>
  <div>{item.logoname}</div>
  <div>{item.price}</div>
  <div></div>
  <div></div>
  <div></div>
  </>
  ))}
</div> */}

      {/*  */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <tbody className="align-middle">  <tr>
                <th>Products</th>
                <th>Pname</th>
                <th>Price</th>
                <th>size</th>
                  {/* <th>color</th> */}
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>


                {cartData?.map((item, index) => (

                  <tr>
                    <td className="align-middle">
                      <img
                        src={`http://localhost:5000/public/images/${item.images[0]}`}
                        alt="" style={{ width: 50 }} />
                    </td>
                    <td className="align-middle">{item.logoname}</td>

                    <td className="align-middle">{item.price} rs</td>
                    <td className="align-middle">{item.size} size</td>
                    {/* <td className="align-middle">{item.price} rs</td> */}
                   
                    <td className="align-middle">
                      {/* === */}
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: 100 }}
                      >
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-primary btn-minus" onClick={() => {
                            if (item.user_qty > 1) {
                              handleQuantity(item.user_qty - 1, index);
                            } else {

                            }

                          }}>
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={item.user_qty}
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-primary btn-plus" onClick={() => {
                            if (item.quantity > item.user_qty) {
                              handleQuantity(item.user_qty + 1, index);
                            } else {

                            }
                          }}>
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">{item.user_qty * item.price}</td>
                    <td className="align-middle">
                      <button className="btn btn-sm btn-primary" onClick={(e) => {
                        console.log(item, "cartdata"); removeFromCart(item)
                      }}>
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                ))

                }


              </tbody>
            </table>
          </div>

          <div className="col-lg-4">
           
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
              </div>

              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">{totalcart()}</h5>
                </div>
                < Link to="/checkout" className="btn btn-block btn-primary my-3 py-3" >
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AddToCart;

