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
import { Pagination, PaginationItem, Typography } from "@mui/material";



function Wishlist() {
    const [data, setData] = useState([]);
    const [cartitems,setCartitems] = useState([]);
    const navi = useNavigate();
    const [prfile,setPrfile] = useState();
    var tok = localStorage.getItem("token");
    //pagination ocde
    const prevIcon = () => <Typography color="black">Prev</Typography>;
    const nextIcon = () => <Typography color="black">Next</Typography>;
    const handlePage = (page) => setPage(page);
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(data.length / 8);
    const pageContent = data.slice((page - 1) * 8, page * 8);
    const par = {
        backgroundColor: "white",
        color: "black"
      };
    useEffect(() => {
      getwishlist();
    }, []);
  
  
    const getwishlist = async () => {
       let product = [];
       product = JSON.parse(localStorage.getItem("wishlist"));
       console.log("cart ", product)
       setData(product);
       console.log("cart ", cartitems)
     }
  
    const addtocart = async (item) =>{
      var product = [];
      product = JSON.parse( localStorage.getItem("product")) || [];
      if(item.qty == 0)
      {
       
        getwishlist();
      }
      else if(product.length >0)
      {
          var count = product.some((object)=> object._id == item._id) 
          // product.some((prod)=>(item._id,prod._id));
          if(!count){
            item.userqty = 1;
            product.push(item);
            localStorage.setItem("product",JSON.stringify(product));    
            show();
            removewishlist(item);
            getwishlist();
          }
          else{
            notadd();getwishlist();
          }
       getwishlist();
      }
      else{
        item.userqty = 1;
        product.push(item);
        localStorage.setItem("product",JSON.stringify(product));
        show();
        removewishlist(item);
        getwishlist();
      }
    }
  
  const removewishlist = async (item) =>{
    try {
      console.log("removed")
      var items1 = JSON.parse(localStorage.getItem("wishlist"));
      const delitem = items1.filter((data) => data._id !== item._id);
      getwishlist();
      localStorage.setItem('wishlist', JSON.stringify(delitem));
      getwishlist();
    }
    catch (error) {
      console.log("remove wishlist err");
    }
  }
  
  const addtowishlist = async (item) =>{
      console.log("added")
      var wishlist = [];
      wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if(wishlist.length >0)
      {
          var count = wishlist.some((object)=> object._id == item._id) 
          if(!count){
            item.userqty = 1;
            wishlist.push(item);
            localStorage.setItem("wishlist",JSON.stringify(wishlist));    
            getwishlist();
          }
          else{
            // notadd();
            getwishlist();
          }
          getwishlist();
      }
      else{
        item.userqty = 1;
        wishlist.push(item);
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
        getwishlist();
      }
    }
  
  
  // const removecart = (item) =>{
  //   try {
  //     console.log("removed")
  //     var items1 = JSON.parse(localStorage.getItem("product"));
  //     const delitem = items1.filter((data) => data._id !== item._id);
  //     getwishlist();
  //     localStorage.setItem('product', JSON.stringify(delitem));
  //     getwishlist();
  //   }
  //   catch (error) {
  //     console.log("remove cart err");
  //   }
  //   all();
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
    const show = () => {
      toast.success("Added to cart Successfully", {
        position: "top-center"
      });
    };
  
    const notadd = () => {
      toast.success("Item is already in cart", {
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
           removewishlist(product1)
            wish_alerts()
          } else {
            
            wish_alerts1()
          }
        } else {
          product1.user_qty = 1;
          a.push(product1)
          localStorage.setItem('cart_list', JSON.stringify(a));
          wish_alerts()
          removewishlist(product1)
          
        }
      }
  
   
  
   
    
  
  return (
    <div>
       <>
    <ToastContainer/>
      <div className="container-scroller"  style={{backgroundColor:'white',color:"black"}}> 
        {/* <UserSidebar/>  */}
         <div className=""  style={{backgroundColor:'white',color:"black"}}>
          {/* <UserNavbar /> */}
          <Topbar/>
          <Navbar/>
          <b><h1 align="center">your liked products are here</h1></b>
          <div className="row" style={{width:"80%"}}>
                {/* {Array.isArray(product) && product.length > 0 ? product.map((item, index) => ( */}
                 {Array.isArray(pageContent) && pageContent.length > 0 ? pageContent.map((item, index) => (

                  
                  <div key={index} className="card product-item  col-lg-4 ">
                    {console.log("#####",item)}

                    <div className="text-md-center text-xl-right">
{
  JSON.parse(localStorage.getItem('wishlist'))?.find(obj => obj._id === item._id) ? 
<button type="button" className='btn' style={{color:"red",fontSize:"30px",border:"15px"}} onClick={() => removewishlist(item)}>
  <i className='fas fa-heart'/>
</button>
:
<button type="button" className='btn' style={{color:"gray",fontSize:"30px",border:"15px"}} onClick={() => addtowishlist(item)}>
  <i className='fas fa-heart'/>
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
                        <h6>${item.price}</h6>
                       
                      </div>
                    </div>

                    <div className="card-footer d-flex justify-content-between bg-light border" >
                      <a href="" className="btn btn-sm text-dark p-0" onClick={()=>navi(`/detail/${item._id}`)}>
                        <i className="fas fa-eye text-primary mr-1" /  >
                        View Detail
                      </a>
                      <div onClick={() => addToCart(item)} >
                        <Link className="btn btn-sm text-dark p-0" >
                          <i className="fas fa-shopping-cart text-primary mr-1"  />
                          Add To Cart
                          </Link>
                      </div>
                      
                    </div>

                  </div>
                )) : (<p>no data</p>)}

              </div>
              <Pagination
          style={par} align="center"
          count={totalPages} page={page}
          color={"primary"} rowsPerPage={8}
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
<Footer/>
    </>
    </div>
  )
}

export default Wishlist
