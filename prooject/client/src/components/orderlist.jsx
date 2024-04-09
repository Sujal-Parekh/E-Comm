import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
// import Pageheader from './Pageheader'
// import Products from './Products'
import Footer from './Footer'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import { useNavigate } from 'react-router';


// function Orderlist() {
// //   return (
// //     <div>
     
// //       {/* <Pageheader/> */}
      
// //     </div>
// //   )

// const [data, setData] = useState([]);
// const [cartitems,setCartitems] = useState([]);
// const navi = useNavigate();
// const [prfile,setPrfile] = useState();
// const tok = localStorage.getItem("token");

// useEffect(() => {
//   // if (!tok) {
//   //   console.log("token not found");
//   //   // navi('/login')
//   // } else {
//     profile();
//     // var tok = localStorage.getItem("token");  
//     all(tok)
//   // }  
// }, []);


// const profile = async () => {
//   try {
//     const res = await axios.get(`http://localhost:5000/auth/${tok}`);
//     console.log(res.data);
//     if(res.data === "Token is expired ")
//     {
//       // console.log(res.data);
//       // localStorage.removeItem("token");
//       // navi("/login");
//     }
//     else{
//       setPrfile(res.data);
//       console.log("admin =" + res.data.isAdmin)
//       // all(res.data.tok);
//     }
//   } catch (error) {
//     console.log("profile err", error);
//     //localStorage.removeItem("token");
//       navi("/login");
//   }
// };

// const all = async (em) => {
//   // try {
//   //   const res = await axios.get(`http://localhost:5000/odlist/${em}` )
//   //   setData(res.data);
//   //   console.log("all order list",res.data)
//   // } catch (error) {
//   //   console.log(error)
//   // }
// }

// return (
//   <>
//   <ToastContainer/>
//     <div className="container-scroller"  style={{backgroundColor:'white',color:"black"}}> 
//       {/* <UserSidebar/>  */}
//        <div className=""  style={{backgroundColor:'white',color:"black"}}>
//        <Topbar/>
//       <Navbar/>
//         <div className="main-panel"  style={{backgroundColor:'white',color:"black"}}>
//           <div className="content-wrapper"  style={{backgroundColor:'white',color:"black"}}>
//             <div className="row"  style={{backgroundColor:'white',color:"black"}}>
// {data?.map((item,index) => (
// <>


//   <div className="col-md-4 col-sm-6 col-xs-12 col-lg-3 grid-margin stretch-card text-center" style={{ backgroundColor: 'white', color: 'black' }}>
//     <div className="card" style={{ backgroundColor: 'white', color: 'black' }}>
//       <div className="card-body">
//           <div className="text-md-center text-xl-center">
//           <img src={`http://localhost:5000/images/orderimage.png`} height="170px" width="170px" />
//           </div>
//         <div className="bg-gray text-center">
//           <div className="text-md-center text-xl-center">
//             <h5>{item.orderstatus}</h5>
//           </div>
//           <div className="text-md-center text-xl-center">
//             <h5>{item.date}</h5>
//           </div>
//           <div className="text-md-center text-xl-center">
//             <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal${index}`}>
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="modal fade" id={`exampleModal${index}`} tabIndex={-1} role="dialog" aria-labelledby={`exampleModalLabel${index}`} aria-hidden="true">
//     <div className="modal-dialog text-center" role="document" style={{ backgroundColor: 'white', color: 'black' }}>
//       <div className="modal-content text-center" style={{ backgroundColor: 'white', color: 'black' }}>
//         <div className="modal-body">
//           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">×</span>
//           </button>
//           {item.orderdetaildata.map((data1)=>(
//             <div>
//             <div className="text-md-center text-xl-center">
//               <img src={`http://localhost:5000/images/${data1.pimg}`} height="170px" width="170px" />
//             {/* <img src={http://localhost:5000/images/${item.image[0]}} height="170px" width="170px" /> */}
//           </div>
//           <div className="text-md-center text-xl-center ">
//             {/* <h2>{data1.pname}</h2> */}
//           </div>
//           <div className="text-md-center text-xl-center">
//             <p>{data1.pname}</p>
//           </div>
//           <div className="text-md-center text-xl-center">
//             <h6>{data1.price} .rs</h6>
//           </div>
//         </div>  
//           ))}
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" data-dismiss="modal">
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </>
// ))}
//             </div>
//           </div>
//         </div>
//       </div> 
//      </div>
//      <Footer/>

//   </>

// )

// }



function Orderlist() {
  const [data, setData] = useState([]);
  // const [cartitems,setCartitems] = useState([]);
  const navi = useNavigate();
  // const [prfile,setPrfile] = useState();
  const tok = localStorage.getItem("token");

  useEffect(() => {
    all()
  }, []);

  
  // const profile = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:5000/auth/${tok}`);
  //     console.log(res.data);
  //     if(res.data === "Token is expired ")
  //     {
  //       // console.log(res.data);
  //       // localStorage.removeItem("token");
  //       // navi("/login");
  //     }
  //     else{
  //       setPrfile(res.data);
  //       console.log("admin =" + res.data.isAdmin)
  //       all(res.data.email);
  //     }
  //   } catch (error) {
  //     console.log("profile err", error);
  //     //localStorage.removeItem("token");
  //       navi("/login");
  //   }
  // };

  const all = async () => {
    console.log("gggggggfuuhfouwhdfoahfushfsouofhsiufhsdiufhsdiufuh");

    try {
      // const res = await fetch("http://localhost:5000/orderlist/" + tok)
      // setData(res.data);
      // console.log("all order list",res.json());
      // console.log(res.data)
      const res = await axios.get(`http://localhost:5000/orderlist/`+ tok);
const data = await res.data; // Parse JSON response
setData(data); // Assuming setData is a function to update state or perform some action with the data
console.log("all order list", data); // Log the parsed data

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <ToastContainer/>
      <div className="container-scroller"  style={{backgroundColor:'white',color:"black"}}> 
        {/* <UserSidebar/>  */}
         <div className=""  style={{backgroundColor:'white',color:"black"}}>
          {/* <UserNavbar /> */}
          <Topbar/>
          <Navbar/>
          <div className="main-panel"  style={{backgroundColor:'white',color:"black"}}>
            <div className="content-wrapper"  style={{backgroundColor:'white',color:"black"}}>
              <div className="row"  style={{backgroundColor:'white',color:"black"}}>
{data?.map((item,index) => (
  <>

  
    <div className="col-md-4 col-sm-6 col-xs-12 col-lg-3 grid-margin stretch-card text-center" style={{ backgroundColor: 'white', color: 'black' }}>
      <div className="card" style={{ backgroundColor: 'white', color: 'black' }}>
        <div className="card-body">
            <div className="text-md-center text-xl-center">
            <img src={`http://localhost:5000/public/images/cart_empty.png`} height="170px" width="170px" />
            </div>
          <div className="bg-gray text-center">
            <div className="text-md-center text-xl-center">
              <h5>{item.orderstatus}</h5>
            </div>
            <div className="text-md-center text-xl-center">
              <h5>{item.date}</h5>
            </div>
            <div className="text-md-center text-xl-center">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal${index}`}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id={`exampleModal${index}`} tabIndex={-1} role="dialog" aria-labelledby={`exampleModalLabel${index}`} aria-hidden="true">
      <div className="modal-dialog text-center" role="document" style={{ backgroundColor: 'white', color: 'black' }}>
        <div className="modal-content text-center" style={{ backgroundColor: 'white', color: 'black' }}>
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            {item.orderdetaildata.map((data1)=>(
              <div>
              <div className="text-md-center text-xl-center">
                <img src={`http://localhost:5000/public/images/${data1.pimg}`} height="170px" width="170px" />
              {/* <img src={http://localhost:5000/images/${item.image[0]}} height="170px" width="170px" /> */}
            </div> 
            <div className="text-md-center text-xl-center ">
              {/* <h2>{data1.pname}</h2> */}
            </div>
            <div className="text-md-center text-xl-center">
              <p>{data1.pname}</p>
            </div>
            <div className="text-md-center text-xl-center">
              <h6>{data1.price} .rs</h6>
            </div>
          </div>  
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
))}: (<p>no data</p>)
              </div>
            </div>
          </div>
        </div> 
       </div>
<Footer/>
    </>

  )
}

export default Orderlist
