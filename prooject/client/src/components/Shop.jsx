import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
// import Pageheader from './Pageheader'
import Footer from './Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, toast } from 'react-toastify'
import { Pagination, PaginationItem, Typography } from "@mui/material";

function Shop() {

  // const [allpd, setAllpd] = useState([])
  const [allsubpd, setAllsubpd] = useState([])
  // Pagination
  const [sort, setSort] = useState('')
  const [row, setRow] = useState(8);
  const prevIcon = () => <Typography color="black">Prev</Typography>;
  const nextIcon = () => <Typography color="black">Next</Typography>;
  const handlePage = (page) => setPage(page);
  const[fdata,setFdata]=useState([])
  const [page, setPage] = useState(1);
  const [data, setdata] = useState([]); // Declare data here
  const nav = useNavigate();
  const par = {
    backgroundColor: "white",
    color: "black"
  };
  const sortdata = (e) => {
     if (sort === "1") {
      const myData = [...product].sort((a, b) => a.product_name.localeCompare(b.product_name));
      // console.log([...product],"product");
      setProduct(myData);
      // console.log(myData?.data,"low to high");
  }
  else if (sort === "2") {
      const myData = [...product].sort((a, b) => b.product_name.localeCompare(a.product_name));
      // console.log([...product],"product");
      setProduct(myData);
      // console.log(myData?.data,"low to high");
  }

    if (sort === "3") {
      const myData = [...product].sort((a, b) => a.price - b.price);
      setProduct(myData);
    }
    else if (sort === "4") {
      const myData = [...product].sort((a, b) => b.price - a.price);
      setProduct(myData);
    }

    else {

      // dat();
    }
  }
  const removewishlist = async (item) => {
    try {
      console.log("removed")
      var items1 = JSON.parse(localStorage.getItem("wishlist"));
      const delitem = items1.filter((data) => data._id !== item._id);
      // setCartitems(delitem);
      dat();
      localStorage.setItem('wishlist', JSON.stringify(delitem));
      dat();
    }
    catch (error) {
      console.log("remove cart err");
    }

  }

  const addtowishlist = async (item) => {
    console.log("added")
    var wishlist = [];
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.length > 0) {
      var count = wishlist.some((object) => object._id == item._id)
      // product.some((prod)=>(item._id,prod._id));
      if (!count) {
        item.userqty = 1;
        wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        // show();
        dat();
      }
      else {
        // notadd();
        dat();
      }
      dat();
    }
    else {
      item.userqty = 1;
      wishlist.push(item);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      // show();
      dat();
    }
  }
  const [product, setProduct] = useState([]);
  // const[productData,setProductData]=useState([])
  var { id } = useParams();
  console.log(id, "category id");
  // const [ser,setSer] = useState('')
  const [se, setSe] = useState(null)

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

  const navigat = useNavigate()

  useEffect(() => {
    dat()
    show()
    allsubpds()

  }, []);

  useEffect(() => {
    sortdata()
    // catefilter()
  }, [sort])

  // const catefilter = () => {
  //   // setSelcate();
  //   if(id===''){}
  //   else{
  //     console.log("catname");
  //     const fidata =product.filter((item) => item.s_cid === id);
  //     setProduct(fidata);
  //   }

  // };
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
    display(id)
    displaySub(id)

  }, [id])

  // useEffect(() => {

  // }, [id])

  // const display = async () => {
  //   if (id) {
  //     try {
  //       axios.get(`http://localhost:5000/category/${id}`).then((result) => {
  //         console.log(result?.data.data);
  //         setProduct(result?.data.data) //fiter product data
  //         // setProductData(result?.data?.data) //all product data
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   } else {
  //     try {
  //       axios.get("http://localhost:5000/alllogo").then((result) => {
  //         setProduct(result?.data)
  //         console.log(result?.data); //fiter product data
  //         // setProductData(result?.data) //all product data
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }
  // }
  
  const display = async () => {
    if (id) {
      try {
        const response = await axios.get(`http://localhost:5000/category/${id}`);
        console.log(response?.data.data);
        setProduct(response?.data.data); // set filtered product data
        // maxminval(response?.data.data);
        // setFdata(response.data.data);


      } catch (error) {
        console.log(error);
      }
    } else {
      dat();
      // try {
      //   const response = await axios.get("http://localhost:5000/alllogo");
      //   console.log(response?.data); // set filtered product data
      //   setProduct(response?.data);
      //   maxminval(response?.data);
      //   setFdata(response.data);


      // } catch (error) {
      //   console.log(error);
      // }
    }
  }

  const filterprice = (min, max) => {
    console.log("max", max, "min", min);
    const filterdata = fdata.filter((item) => item.price >= min && item.price <= max);
    console.log(fdata,"all data");
    console.log(filterdata, "------filter data price1");
    setProduct(filterdata);
    // filterprice2(max,min,fidata);v4sqq7clt
}

const[mn,setMn]=useState({})
const[price,setPrice]=useState(0)

const maxminval = (product) => {
    if(product.length > 0 ){
    console.log(product,"data1....");
    const maxprice = product.reduce((maxprice, item) => {
        return Math.max(maxprice, Number(item.price))
    }, Number(product[0].price));
console.log(maxprice,"maxvalue");
   
const minprice = product.reduce((minprice, item) => {
        return Math.min(minprice, Number(item.price))
    }, Number(product[0].price));

    console.log(minprice,"minimum val");
    // var upto = Math.floor(maxprice / 4);
    setMn({ max: maxprice, min: minprice });
    var up = Math.floor(maxprice / 4);
    var md1 = Math.floor(maxprice / 4);
    var md2 = Math.floor(maxprice / 1.9);
    var ov = Math.floor(maxprice / 1.2);
    setPrice({
        upto: up,
        mid1: md1,
        mid2: md2,
        over: ov
    })
   console.log(price.upto,"all prices")
   console.log(price.mid1,"all prices")
   console.log(price.mid2,"all prices")
   console.log(price.over,"all prices")
    console.log(mn,"all prices")

    // console.log("up to " , price.upto)
    // console.log( price.mid1," - " , price.mid2)
    // console.log("over" , price.over)
}
}

  const displaySub = async () => {
    try {
      axios.get(`http://localhost:5000/subcategory/${id}`).then((result) => {
        setProduct(result?.data.data) //fiter product data
        // setProductData(result?.data) //all product data
        console.log(result?.data.data);
      })
    } catch (error) {
      console.log(error)
    }
  }

  const dat = async () => {
    try {
      const res = await axios.get("http://localhost:5000/alllogo")
      console.log(res.product)
      setProduct(res.data)
      setFdata(res.data);
      maxminval(res.data);
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
  const [cat, setCname] = useState([]);
  // useEffect(() => {
  //   show();
  // }, [])
  const allsubpds = async (selectedCategory) => {
    console.log("all subpds");
    try {
      const res = await axios.post("http://localhost:5000/allsubcategory");
      console.log("sub categorys", res?.data.data)
      setAllsubpd(res?.data.data);
    } catch (error) {
      console.log(error);
    }
  };


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
  const totalPages = Math.ceil((product?.length || 0) / 6);
  // const pageContent = product ? product.slice((page - 1) * 6, page * 6) : [];
  const pageContent = Array.isArray(product) ? product.slice((page - 1) * 6, page * 6) : [];


  return (
    <div>
      <ToastContainer />
      <Topbar />

      <div className="container-fluid">
        <div className="row border-top px-xl-5">


          <div className="col-lg-3 d-none d-lg-block" style={{ height: 65, marginTop: "-1px", padding: "0 30px" }} >
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
              className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
              id="navbar-vertical"
            >

              {/* <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }}>
  {cat?.map((item) => (
    <div className="nav-item dropdown" >
      
      <label className="nav-link" data-toggle="dropdown" onClick={() => navigat(`/shop/${item._id}`)}>
        {item.cname}
        <i className="fa fa-angle-down float-right mt-1" />
      </label>
      
    </div>
  ))}
</div> */}
              {/* <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: 410 }}
              >
                <div className="nav-item dropdown">
                    {cat?.map((item,index) => {
                      console.log("item",item);
                      return(
                        <div key={item._id}>
                        <label className="nav-link"   onClick={() =>navigat(`/shop/${item._id}`)}>{item.cname}</label>
                      </div>
  
                  )
                  })}
                  
                 
                </div>
              
              </div>  */}


              {/* <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }}>
  {cat?.map((item) => (
  

    <div className="nav-item dropdown" key={item._id}>

    
       
    <Link className="nav-link" to={`/shop/${item._id}`} data-toggle="dropdown">
      {item.cname}
      <i className="fa fa-angle-down float-right mt-1" />
    </Link>
  
      
      <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
        {allsubpd.filter((subItem) => subItem.cid === item._id).map((subItem) => (
          <Link to={`/shop/${subItem._id}`} className="dropdown-item" key={subItem._id}>
            {subItem.subname}
          </Link>
        ))}
      </div>
    </div>
  ))}
</div>  */}
              <div className="navbar-nav w-100 overflow-hidden" style={{ height: 420 }}>
                {/* <div className="nav-item dropdown">
                    {cat?.map((item) => {
                      console.log("item",item);
                      return(
                        <div key={item._id}>
                        <label className="nav-link"   onClick={() =>navigat(`/shop/${item._id}`)}>{item.cname}</label>
                      </div>
  
                  )
                  })}
                  
                 
                </div>
               */}
                {cat?.map((item) => (
                  <div className="nav-item dropdown" key={item._id}>
                    <label className="nav-link" data-toggle="dropdown" >
                      <i className="fa fa-angle-down float-right mt-1" />

                      {item.cname}
                    </label>
                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                      {allsubpd.filter((subItem) => subItem.cid === item._id).map((subItem) => (
                        <label onClick={() => navigat(`/shop/${subItem._id}`)} className="dropdown-item" key={subItem._id}>
                          {subItem.subname}

                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* <Component cat={cat} allsubpd={allsubpd} navigat={navigat} /> */}
            </nav>
          </div>
          {/* <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
             
<div className="collapse navbar-collapse justify-content-between"id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/index" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link to="/shop" className="nav-item nav-link">
                    Shop
                  </Link>
                  <Link to="/cart" className="nav-item nav-link">
                    Cart
                  </Link>
                  <Link to="/checkout" className="nav-item nav-link">
                    Checkout
                  </Link>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                  
                </div> 
              </div>
            </nav>
          </div> */}
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
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

      {/* <Pageheader/> */}
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300, backgroundColor: "white" }}
        >
          <h1 className="font-wei   ght-semi-bold text-uppercase mb-3">Our Shop</h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-12">

            {/* Color Start */}
            {/* <div className="border-bottom mb-4 pb-4">

              <h5 className="font-weight-semi-bold mb-4">Filter by Price </h5>
              <input className="me-2" type="radio" name="pricefilter" onChange={() => filterprice(mn.min, price.upto)} />
              <label> {`upto ${price.upto}`}</label>
              <br />
              <input className="me-2" type="radio" name="pricefilter" onChange={() => filterprice(price.mid1, price.mid2)} />
              <label> {`${price.mid1} - ${price.mid2}`}</label>
              <br />
              <input className="me-2" type="radio" name="pricefilter" onChange={() => filterprice(price.over, mn.max)} />
              <label> {`over ${price.over}`}</label>
              <br />
              <input className="me-2" type="radio" name="pricefilter" onChange={() => display()} />
              <label> None</label>

            </div> */}
 
              <h5 className="font-weight-semi-bold mb-4">Filter by Price</h5>
              <input className="me-2"type="radio" name="pricefilter" onChange={() => filterprice(mn.min, price.upto)} />
                                                    <label> {`upto ${price.upto}`}</label>
                                                    <br />
                                                    <input className="me-2"type="radio" name="pricefilter" onChange={() => filterprice(price.mid1, price.mid2)} />
                                                    <label> {`${price.mid1} - ${price.mid2}`}</label>
                                                    <br />
                                                    <input className="me-2" type="radio" name="pricefilter" onChange={() => filterprice(price.over, mn.max)} />
                                                    <label> {`over ${price.over}`}</label>
                                                    <br />
                                                    <input className="me-2" type="radio" name="pricefilter" onChange={()=>display()} />
                                                    <label> None</label>



            {/* Color End */}

            {/* Size Start */}
            
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        onChange={(e) => sear(e.target.value)}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                  {/* <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a className="dropdown-item" href="#">
                        Latest
                      </a>
                      <a className="dropdown-item" href="#">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="#">
                        Best Rating
                      </a>

                    </div>
                  </div> */}
                  <div className="dropdown ml-4">
                    <div>
                      <select className="btn border dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false" onChange={(e) => setSort(e.target.value)}>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="triggerId"
                        ></div>
                        <option value="0"> Filter</option>
                        {/* <option value="1">a-z</option>
                        <option value="2">z-a</option> */}
                        <option value="3">Low to High</option>
                        <option value="4">High to Low</option>
                        {/* <option onClick={dat()}>None</option> */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row" style={{ width: "100%" }}>
                {/* {Array.isArray(product) && product.length > 0 ? product.map((item, index) => ( */}
                {Array.isArray(pageContent) && pageContent.length > 0 ? pageContent.map((item, index) => (


                  <div key={index} className="card product-item  col-lg-4 ">
                    {/* {console.log("#####", item)} */}

                    <div className="text-md-center text-xl-right">
                      {
                        JSON.parse(localStorage.getItem('wishlist'))?.find(obj => obj._id === item._id) ?
                          <button type="button" className='btn' style={{ color: "red", fontSize: "30px", border: "15px" }} onClick={() => removewishlist(item)}>
                            <i className='fas fa-heart' />
                          </button>
                          :
                          <button type="button" className='btn' style={{ color: "gray", fontSize: "30px", border: "15px" }} onClick={() => addtowishlist(item)}>
                            <i className='fas fa-heart' />
                          </button>
                      }

                    </div>
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img className="img-fluid w-100"
                        src={`http://localhost:5000/public/images/${item.images[0]}`}

                        alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{item.logoname}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>₹{item.price}</h6>

                      </div>
                    </div>

                    <div className="card-footer d-flex justify-content-between bg-light border" >
                      <a href="" className="btn btn-sm text-dark p-0" onClick={() => navigat(`/detail/${item._id}`)}>
                        <i className="fas fa-eye text-primary mr-1" />
                        View Detail
                      </a>
                      <div onClick={() => addToCart(item)} >
                        <Link className="btn btn-sm text-dark p-0" >
                          <i className="fas fa-shopping-cart text-primary mr-1" />
                          Add To Cart
                        </Link>
                      </div>

                    </div>

                  </div>
                )) : (<div></div>)}

              </div>
              <Pagination
                style={par} align="center"
                count={totalPages} page={page}
                color={"primary"} rowsPerPage={row}
                onChange={(event, value) => handlePage(value)}
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: prevIcon,
                      next: nextIcon,
                    }} {...item}
                  />
                )}
              />
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop



