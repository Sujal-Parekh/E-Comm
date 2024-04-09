import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Topbar() {
  const [cat, setCname] = useState([]);

  useEffect(() => {
    // dat()
    show()
    // allsubpds()

  }, []);
  const show = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getcategory")
      
      setCname(result.data.data);
      console.log(result.data.data);

    } catch (error) {
      console.log(error)
    }
  }
  
  
  const navigate = useNavigate();
  
  const [totcart, setTotcart] = useState([])
  const cartnum = () => {
    var ct = [];
    ct = JSON.parse(localStorage.getItem('cart_list')) || [];
    setTotcart(ct.length);
  }
  useEffect(() => {
    cartnum();
  })
  const [totwish, setTotwish] = useState([])
  const wishnum = () => {
    var ct = [];
    ct = JSON.parse(localStorage.getItem('wishlist')) || [];
    setTotwish(ct.length);
  }
  useEffect(() => {
    wishnum();
  })

  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href="">
                FAQs
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">
                Help
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">
                Support
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-instagram" />
              </a>
              <a className="text-dark pl-2" href="">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
           
          </div>
          <div className="col-lg-3 col-6 text-right">
            <Link to="/wishlist" className="btn border">

              <i className="fas fa-heart text-primary" />
              <sup><b> <i> <span style={{ padding: "11px 11px" }} >
                <span className='count' style={{ color: "black", margin: "-5px 0 5px -9px" }}>{totwish}</span>
              </span>
              </i></b></sup>
            </Link>

            <Link to="/cart" className="btn border">
              <i className="fas fa-shopping-cart text-primary" />
              <sup> <b><i>  <span style={{ padding: "10px 10px" }} >
                <span className='count' style={{ color: "black", margin: "-5px 0 5px -9px" }}>{totcart}</span>
              </span>
              </i></b></sup>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Topbar
