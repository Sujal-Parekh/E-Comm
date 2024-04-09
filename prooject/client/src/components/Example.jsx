import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
// import Pageheader from './Pageheader'
import Footer from './Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , useNavigate ,useParams} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, toast } from 'react-toastify'

function Example() {
const [product, setProduct] = useState([]);
  // const[productData,setProductData]=useState([])
  var { id } = useParams();
  console.log(id,"dsfdf");
  // const [ser,setSer] = useState('')
  const [se, setSe] = useState(null)
 
  const wish_alerts = () => {
    toast.success("Product Added to Wishlist", {
        position: "top-center"
    });
};
  const navigat = useNavigate()

  useEffect(() => {
    dat()
    show();

  }, []);



  // const DeleteButton = async (itemId) => {
  //   console.log(itemId);
  //   try {
  //     const response = await axios.delete(http://localhost:5000/dellogo/${itemId})

  //     console.log(response.data);
  //     dat()

  //   } catch (error) {
  //     console.log("catch err", error)
  //   }

  // }

  useEffect(() => {
    if (id) {
        try {
            axios.get(`http://localhost:5000/category/${id}`).then((result) => {
                console.log(result.data.data);
                setProduct(result?.data?.data) //fiter product data
                // setProductData(result?.data?.data) //all product data
            })
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            axios.get("http://localhost:5000/alllogo").then((result) => {
                setProduct(result?.data) //fiter product data
                // setProductData(result?.data) //all product data
            })
        } catch (error) {
            console.log(error)
        }

    }
}, [id])

  const dat = async () => {
    try {
      const res = await axios.get("http://localhost:5000/alllogo")
      console.log(res.product)
      setProduct(res.data)
    } catch (error) {
      console.log("data fond", error)
    }
  }
  const sear = async (ser) => {
    try {
      const res = await axios.get("http://localhost:5000/search-logo/" + ser)
      console.log("search data", res.data)
      setProduct(res.data)
      // if (Array.isArray(res.data)) {
      //   setSe(res.data);
      // } else {
      // setSe([]); // Set to an empty array if not an array
      // }
    } catch (error) {
      console.log("search found", error)
    }
  }
  const addToCart = (product1) => {
    console.log("data", product1)
    var a = [];
    a = JSON.parse(localStorage.getItem('cart_list')) || [];

    if (a.length > 0) {
      var count = a.some((product) => product._id === product1._id);
      if (!count) {
        product1.user_qty = 1;
        a.push(product1)
        localStorage.setItem('cart_list', JSON.stringify(a));
        // window.location.reload()
        console.log("item added")
        wish_alerts()
      } else {
        // alert("Product Already Exist...")
        console.log("already exists if else")
        wish_alerts()
      }
    } else {
      product1.user_qty = 1;
      a.push(product1)
      localStorage.setItem('cart_list', JSON.stringify(a));
      // window.location.reload();
      console.log("item added else")
    }
  }
  const [cname, setCname] = useState([]);
  // useEffect(() => {
  //   show();
  // }, [])

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

  return (
    <div>
      <ToastContainer/>
      {/* <Topbar /> */}

      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 1 }}
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: 410 }}
              >
                <div className="nav-item dropdown">
                  {/* {cname?.map((item,index) => (
                    <Link to={`/shop/${item._id}`} className="nav-link" data-toggle="dropdown">
                      {item.cname} 
                    </Link>

                  ))} */}
                    {cname?.map((item,index) => {
                      console.log("item",item);
                      return(
                        <div key={item._id}>
                        <label className="nav-link"   onClick={() =>navigat(`/shop/${item._id}`)}>{item.cname}</label>
                      </div>

                  )})}
                  {/* <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href="" className="dropdown-item">
                      Men's Dresses
                    </a>
                    <a href="" className="dropdown-item">
                      Women's Dresses
                    </a>
                    <a href="" className="dropdown-item">
                      Baby's Dresses
                    </a>
                  </div> */}
                </div>
                {/* <a href="" className="nav-item nav-link">
                  Shirts
                </a>
                <a href="" className="nav-item nav-link">
                  Jeans
                </a>
                <a href="" className="nav-item nav-link">
                  Swimwear
                </a>
                <a href="" className="nav-item nav-link">
                  Sleepwear
                </a>
                <a href="" className="nav-item nav-link">
                  Sportswear
                </a>
                <a href="" className="nav-item nav-link">
                  Jumpsuits
                </a>
                <a href="" className="nav-item nav-link">
                  Blazers
                </a>
                <a href="" className="nav-item nav-link">
                  Jackets
                </a>
                <a href="" className="nav-item nav-link">
                  Shoes
                </a> */}
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link">
                    Home
                  </a>
                  <a href="shop.html" className="nav-item nav-link active">
                    Shop
                  </a>
                  <a href="detail.html" className="nav-item nav-link">
                    Shop Detail
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a href="cart.html" className="dropdown-item">
                        Shopping Cart
                      </a>
                      <a href="checkout.html" className="dropdown-item">
                        Checkout
                      </a>
                    </div>
                  </div>
                  <a href="contact.html" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <a href="" className="nav-item nav-link">
                    Login
                  </a>
                  <a href="" className="nav-item nav-link">
                    Register
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* <Pageheader/> */}
    

     
      
    </div>
  )
}

export default Example



