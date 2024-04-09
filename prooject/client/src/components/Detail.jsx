import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Topbar from './Topbar'
import Navbar from './Navbar'
// import Pageheader from './Pageheader'
import { Link, useNavigate , useParams} from 'react-router-dom'
import Products from './Products'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify'


function Detail() {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  const [oneproduct, setOneProduct] = useState([])
  const [oneCat, setOneCat] = useState([])
  const { id } = useParams();
  console.log(id,"idddddddddddddd");


  useEffect(() => {
    getItem();
}, []);


  
const getItem = async () => {
  try {
      console.log("get item","pppppppppppppppppppppppp")
      const product_res = await axios.get("http://localhost:5000/oneproduct/" + id);
      setOneProduct(product_res.data)
      const cid = product_res.data.cid
      console.log(product_res.data,"ciddddddd");
      if (product_res.data.cid){
          const category_res = await axios.get("http://localhost:5000/one-cat/" + cid);
          setOneCat(category_res.data)
      }
      // console.log("data set")
      console.log(product_res.data.cid);
  } catch (error) {
      console.log("error : " + error);
  }
}
// const addToCart = (product1) => {
//   console.log("data", product1)
//   var a = [];
//   a = JSON.parse(localStorage.getItem('cart_list')) || [];
// console.log(a,"aaaaaaaaaaa");
//   if (a.length > 0) {
//     var count = a.some((product) => product._id === product1._id);
//     console.log(count,"counttttttttttttt");
//     if (!count) {
//       product1.user_qty = 1;
//       a.push(product1)
//       localStorage.setItem('cart_list', JSON.stringify(a));
//       // window.location.reload()
//       console.log("item added")
//     } else {
//       // alert("Product Already Exist...")
//       console.log("already exists if else")
//     }
//   } else {
//     product1.user_qty = 1;
//     a.push(product1)
//     localStorage.setItem('cart_list', JSON.stringify(a));
//     // window.location.reload();
//     console.log("item added else")
//   }
// }
const wish_alerts = () => {
  toast.success("Product Added to cart", {
    position: "top-center"
  });
};
const wish_alerts1 = () => {
  toast.error("Product already  Added to cart", {
    position: "top-center"
  });
};
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

      wish_alerts()
    } else {

      wish_alerts1()
    }
  } else {
    product1.user_qty = 1;
    a.push(product1)
    localStorage.setItem('cart_list', JSON.stringify(a));
    wish_alerts()

  }
}
const [category_name, setCategory_name] = useState([]);
useEffect(() => {
  show();
}, [])

const show = async () => {
  try {
      const result = await axios.get("http://localhost:5000/category").then((result) => {
          setCategory_name(result?.data)

      })
  } catch (error) {
      console.log(error)
  }
}


  return (
    <div>
      <ToastContainer/>
      <Topbar/>
      {/* <Navbar/> */}
      <div>
      <div className="container-fluid mb-5">
  <div className="row border-top px-xl-5">
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
          {/* <div className="navbar-nav mr-auto py-0">
            <Link to="/index" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/shop" className="nav-item nav-link">
              Shop
            </Link>
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
          </div> */}
         <div className="navbar-nav mr-auto py-0">
                  {/* <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      categories
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div className="nav-item dropdown">
                        {cat?.map((item) => {
                          console.log("item", item);
                          return (
                            <div key={item._id}>
                              <label className="nav-link" onClick={() => navigat(`/shop/${item._id}`)}>{item.cname}</label>
                            </div>

                          )
                        })}


                      </div>

                    </div>
                  </div> */}
                  <Link to="/index" className="nav-item nav-link">
                    Home
                  </Link>
                  {/* <Link to="/shop" className="nav-item nav-link">
                    Shop */}
                      {/* <Link to='/shop' className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Shop
                    </Link>
                    <div className="nav-item dropdown">
                  
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div className="nav-item dropdown">
                        {cat?.map((item) => {
                          // console.log("item", item);
                          return (
                            <div key={item._id}>
                              <label className="nav-link" onClick={() => navigat(`/shop/${item._id}`)}>{item.cname}</label>
                            </div>

                          )
                        })}


                      </div>

                    </div>
                  </div>
                  </Link> */}
<Link to="/shop" className="nav-item nav-link">
                    Shop
                </Link>
                {/* <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  data-toggle="dropdown"  aria-expanded="false">
                        categories
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="nav-item dropdown">
                        {cat?.map((item) => {
                          // console.log("item", item);
                          return (
                            <div key={item._id}>
                              <label className="nav-link" onClick={() => navigat(`/shop/${item._id}`)}>{item.cname}</label>
                            </div>

                          )
                        })}


                      </div>

                    </div>
                </div> */}
                  <Link to="/cart" className="nav-item nav-link">
                    Cart
                  </Link>
                  <Link to="/checkout" className="nav-item nav-link">
                    Checkout
                  </Link>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                  <Link to="/list" className="nav-item nav-link">
                    orderlist
                  </Link>
                </div>
        </div>
      </nav>
      
    </div>
  
</div>

    </div>
    <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300,  }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/shop">shop</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">product detail</p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
  <div className="row px-xl-5">
    <div className="col-lg-5 pb-5">
      <div
        id="product-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
         <div className="carousel-inner border">
          <div className="carousel-item active">
            <img src={`http://localhost:5000/public/images/${oneproduct?.images?.[0]}`} className="w-100 h-100" />
          </div>
         
        </div> 
        
        
      </div>
    </div>
    <div className="col-lg-7 pb-5">
      <h3 className="font-weight-semi-bold">{oneproduct.logoname}</h3>
     
      <h3 className="font-weight-semi-bold mb-4">price:{oneproduct.price}</h3>
      <p className="mb-4">
      product description:  {oneproduct.description}
      </p>
      <div className="d-flex mb-3">
        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
        <p className="mb-4">
        {oneproduct.size}
      </p>
      </div>
      <div className="d-flex mb-3">
      <p className="text-dark font-weight-medium mb-0 mr-3">colour:</p>
       <b> <p className="text-dark font-weight-medium mb-0 mr-3" >
        {oneproduct.color}
      </p></b>
      
        {/* <form>
        
            {
              oneproduct.size?.map((data,index)=>{
                console.log(data,"MMMMMMMMMMM");
               return(  <div className="custom-control custom-radio custom-control-inline"><input
                type="radio"
                className="custom-control-input"
                id={index}
                name="size"
              
              />
              <label className="custom-control-label" htmlFor={index}>
              {data}
              </label></div>)
              })
            }
             */}
            {/* <input
              type="radio"
              className="custom-control-input"
              id="size-1"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-1">
              XS
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-2"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-2">
              S
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-3"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-3">
              M
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-4"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-4">
              L
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-5"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-5">
              XL
            </label>
          </div> */}
        {/* </form> */}
      </div>
      {/* <div className="d-flex mb-4">
        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-1"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-1">
              Black
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-2"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-2">
              White
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-3"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-3">
              Red
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-4"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-4">
              Blue
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-5"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-5">
              Green
            </label>
          </div>
        </form>
      </div> */}
      <div className="d-flex align-items-center mb-4 pt-2">
        {/* <div className="input-group quantity mr-3" style={{ width: 130 }}>
          <div className="input-group-btn">
            <button className="btn btn-primary btn-minus">
              <i className="fa fa-minus" />
            </button>
          </div>
          <input
            type="text"
            className="form-control bg-secondary text-center"
            defaultValue={1}
          />
          <div className="input-group-btn">
            <button className="btn btn-primary btn-plus">
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
       */}
        {/* <button className="btn btn-primary px-3" onClick={() => addToCart(oneproduct)} >
          <i className="fa fa-shopping-cart mr-1" /> Add To Cart
        </button> */}
       <div onClick={() => addToCart(oneproduct)} >
                        <Link className="btn btn-sm text-dark p-0" >
                          <i className="fas fa-shopping-cart text-primary mr-1" />
                          Add To Cart
                        </Link>
                      </div>
             </div>
      <br></br><br></br>
      <div className="d-flex pt-2">
        <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
        <div className="d-inline-flex">
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
            <i className="fab fa-pinterest" />
          </a>
        </div>
      </div>
    </div>
  </div>


{/* 






  <div className="row px-xl-5">
    <div className="col">
      <div className="nav nav-tabs justify-content-center border-secondary mb-4">
        <a
          className="nav-item nav-link active"
          data-toggle="tab"
          href="#tab-pane-1"
        >
          Description
        </a>
        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">
          Information
        </a>
        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">
          Reviews (0)
        </a>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab-pane-1">
          <h4 className="mb-3">Product Description</h4>
          <p>
            Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
            Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam
            ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed
            sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
            Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum
            accusam sadipscing, eos dolores sit no ut diam consetetur duo justo
            est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor
            accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt
            tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea
            invidunt.
          </p>
          <p>
            Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum.
            Amet dolore tempor consetetur sed lorem dolor sit lorem tempor.
            Gubergren amet amet labore sadipscing clita clita diam clita. Sea
            amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum.
            Ea erat sed et diam takimata sed justo. Magna takimata justo et amet
            magna et.
          </p>
        </div>
        <div className="tab-pane fade" id="tab-pane-2">
          <h4 className="mb-3">Additional Information</h4>
          <p>
            Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
            Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam
            ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed
            sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
            Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum
            accusam sadipscing, eos dolores sit no ut diam consetetur duo justo
            est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor
            accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt
            tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea
            invidunt.
          </p>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">
                  Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                </li>
                <li className="list-group-item px-0">
                  Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                </li>
                <li className="list-group-item px-0">
                  Duo amet accusam eirmod nonumy stet et et stet eirmod.
                </li>
                <li className="list-group-item px-0">
                  Takimata ea clita labore amet ipsum erat justo voluptua.
                  Nonumy.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">
                  Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                </li>
                <li className="list-group-item px-0">
                  Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                </li>
                <li className="list-group-item px-0">
                  Duo amet accusam eirmod nonumy stet et et stet eirmod.
                </li>
                <li className="list-group-item px-0">
                  Takimata ea clita labore amet ipsum erat justo voluptua.
                  Nonumy.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-pane-3">
          <div className="row">
            <div className="col-md-6">
              <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
              <div className="media mb-4">
                <img
                  src=""
                  alt="Image"
                  className="img-fluid mr-3 mt-1"
                  style={{ width: 45 }}
                />
                <div className="media-body">
                  <h6>
                    John Doe
                    <small>
                      {" "}
                      - <i>01 Jan 2045</i>
                    </small>
                  </h6>
                  <div className="text-primary mb-2">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <i className="far fa-star" />
                  </div>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="mb-4">Leave a review</h4>
              <small>
                Your email address will not be published. Required fields are
                marked *
              </small>
              <div className="d-flex my-3">
                <p className="mb-0 mr-2">Your Rating * :</p>
                <div className="text-primary">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="message">Your Review *</label>
                  <textarea
                    id="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mb-0">
                  <input
                    type="submit"
                    defaultValue="Leave Your Review"
                    className="btn btn-primary px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
</div>

      {/* <Products/> */}
      <Footer/>
    </div>
  )
}

export default Detail
