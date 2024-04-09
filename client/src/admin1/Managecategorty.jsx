
// import 'react-toastify/dist/ReactToastify.min.css'
// import {ToastContainer,toast} from 'react-toastify'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router';
// //pagination code
// import {Pagination,PaginationItem,Typography} from "@mui/material";
// import ReactPaginate from "react-paginate";

// function Managecategorty() {
//    // Pagination
//   const [row, setRow] = useState(8);
//   const prevIcon = () => <Typography color="black">Prev</Typography>;
//   const nextIcon = () => <Typography color="black">Next</Typography>;
//   const handlePage = (page) => setPage(page);
//   const [page, setPage] = useState(1);
//   const [data, setdata] = useState([]); // Declare data here
//   const nav = useNavigate();

//   useEffect(() => {
//     dat();
//   }, []);

//   const par = {
//     backgroundColor: "white",
//     color: "black"
//   };
//   const DeleteButton = async (itemId) => {
//     console.log(itemId);
//     try {
//       const response = await axios.delete(`http://localhost:5000/dellogo/${itemId}`);
//       console.log(response.data);
//       dat();
//     } catch (error) {
//       console.log("catch err", error);
//     }
//   };

//   const dat = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/getcategory");
//       console.log(res.data);
//       setdata(res.data);
//     } catch (error) {
//       console.log("error found", error);
//     }
//   };

//   const totalPages = Math.ceil((data?.length || 0) / 6);
//   // const pageContent = data ? data.slice((page - 1) * 4, page * 4) : [];
//   const pageContent = Array.isArray(data) ? data.slice((page - 1) * 4, page * 4) : [];


//   return (
//     <div>
//       <div>  
//       <>
//       <div className="theme-loader">
//     <div className="loader-track">
//       <div className="preloader-wrapper">
//         <div className="spinner-layer spinner-blue">
//           <div className="circle-clipper left">
//             <div className="circle" />
//           </div>
//           <div className="gap-patch">
//             <div className="circle" />
//           </div>
//           <div className="circle-clipper right">
//             <div className="circle" />
//           </div>
//         </div>
//         <div className="spinner-layer spinner-red">
//           <div className="circle-clipper left">
//             <div className="circle" />
//           </div>
//           <div className="gap-patch">
//             <div className="circle" />
//           </div>
//           <div className="circle-clipper right">
//             <div className="circle" />
//           </div>
//         </div>
//         <div className="spinner-layer spinner-yellow">
//           <div className="circle-clipper left">
//             <div className="circle" />
//           </div>
//           <div className="gap-patch">
//             <div className="circle" />
//           </div>
//           <div className="circle-clipper right">
//             <div className="circle" />
//           </div>
//         </div>
//         <div className="spinner-layer spinner-green">
//           <div className="circle-clipper left">
//             <div className="circle" />
//           </div>
//           <div className="gap-patch">
//             <div className="circle" />
//           </div>
//           <div className="circle-clipper right">
//             <div className="circle" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Pre-loader end */}
//   <div id="pcoded" className="pcoded">
//     <div className="pcoded-overlay-box" />
//     <div className="pcoded-container navbar-wrapper">
      
//       {/* navbar */}
//       <Navbar/>
      
//       {/* <div className="pcoded-main-container"> */}
//         <div className="pcoded-wrapper">
//           {/* sidebar */}
//           <Sidebar/>
//           <div className="pcoded-content">
//             {/* Page-header start */}
//              {/* Page-header end */}
//             <div className="pcoded-inner-content">
//               {/* Main-body start */}
//               <div className="main-body">
//                 <div className="page-wrapper">
//                   {/* Page-body start */}
//                   <div className="page-body">
//                     <br></br>
//                     <br></br>
//                     {/* <Card/> */}
//                     <div className="row ">
//              <div className="col-12 grid-margin">
//                <div className="card">
//                  <div className="card-body">
//                    <h4 className="card-title"> all categories</h4>
//                    <div className="table-responsive">
//                      <table className="table">
//                        <thead>
//                          <tr>
//                            <th>
//                              <div className="form-check form-check-muted m-0">
//                                <label className="form-check-label">
//                                  <input
//                                    type="checkbox"
//                                    className="form-check-input"
//                                  />
//                                </label>
//                              </div>
//                            </th>
//                            {/* <th> Client Name </th>
//                            <th> Order No </th>
//                            <th> Product Cost </th> */}
//                            <th> caetgory </th> 
//                            <th> remove </th>
//                          </tr>
//                        </thead>
//                        <tbody>
//                        {/* {Array.isArray(pageContent)?pageContent?.map((item,key) => ( */}
//                        {/* {Array.isArray(pageContent) && pageContent.map((item, index) => (
                   
//                          <tr>
//                            <td>
//                            </td>
//                            <td>
//                            </td>
//                            <td> {item.subname} </td>
                           
                           
//                            <td>
//                              <div className="badge badge-outline-success">
//                              </div>
//                            </td>
//                          </tr>
//                         )):<p>no data</p>}  */}
//                         {Array.isArray(pageContent) && pageContent.length > 0 ? (
//   pageContent.map((item, index) => (
//     <tr key={index}>
     
//       <td> {item.cname}</td>
//       <td>
//         <div className="badge badge-outline-success">
//         </div>
//       </td>
//     </tr>
//   ))
// ) : (
//   <tr>
//     <td colSpan="4">No data</td>
//   </tr>
// )}

//                        <Pagination
//                     style={par} align="center"
//                     count={totalPages} page={page}
//                     color={"primary"} rowsPerPage={row}
//                     onChange={(event, value) => handlePage(value)}
//                     renderItem={(item) => (
//                       <PaginationItem
//                         components={{
//                           previous: prevIcon,
//                           next: nextIcon,
//                         }} {...item}
//                       />
//                     )}
//                   />
//                        </tbody>
//                      </table>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>                  
//                   </div>
//                   {/* Page-body end */}
//                 </div>
//                 <div id="styleSelector"> </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   {/* </div>/ */}
//       </>
//     </div>
//     </div>
//   )
// }

// export default Managecategorty
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';
//pagination code
import { Pagination, PaginationItem, Typography } from "@mui/material";
import ReactPaginate from "react-paginate";

function Managecategorty() {
  // Pagination
  const [row, setRow] = useState(8);
  const prevIcon = () => <Typography color="black">Prev</Typography>;
  const nextIcon = () => <Typography color="black">Next</Typography>;
  const handlePage = (page) => setPage(page);
  const [page, setPage] = useState(1);
  const [data, setdata] = useState([]); // Declare data here
  const nav = useNavigate();
  const wish_alerts = () => {
    toast.success("category are removed", {
        position: "top-center"
    });
};

  useEffect(() => {
    dat();
  }, []);

  const par = {
    backgroundColor: "white",
    color: "black"
  };

  const DeleteButton = async (itemId) => {
    console.log(itemId);
    try {
      const response = await axios.delete(`http://localhost:5000/delcategory/${itemId}`);
      console.log(response.data);
      dat();
      wish_alerts()
    } catch (error) {
      console.log("catch err", error);
    }
  };

  const dat = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getcategory");
      console.log(res.data);
      setdata(res.data.data); // Update this line to setdata(res.data.data);
    } catch (error) {
      console.log("error found", error);
    }
  };

  const totalPages = Math.ceil((data?.length || 0) / 4);
  const pageContent = Array.isArray(data) ? data.slice((page - 1) * 4, page * 4) : [];

  return (
    <div>
      <div>
        <>
        <ToastContainer/>
          <div className="theme-loader">
            {/* Loader code */}
          </div>
          <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box" />
            <div className="pcoded-container navbar-wrapper">
              <Navbar />
              <div className="pcoded-wrapper">
                <Sidebar />
                <div className="pcoded-content">
                  <div className="pcoded-inner-content">
                    <div className="main-body">
                      <div className="page-wrapper">
                        <div className="page-body">
                          <br />
                          <br />
                          <div className="row">
                            <div className="col-12 grid-margin">
                              <div className="card">
                                <div className="card-body">
                                  <h4 className="card-title">All manage Categories</h4>
                                  <br></br>
                                  <div className="table-responsive">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th>
                                            <div className="form-check form-check-muted m-0">
                                              <label className="form-check-label">
                                                <input
                                                  type="checkbox"
                                                  className="form-check-input"
                                                />
                                              </label>
                                            </div>
                                          </th>
                                          <th>Category</th>
                                          <th>delete</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {Array.isArray(pageContent) && pageContent.length > 0 ? (
                                          pageContent.map((item, index) => (
                                            <tr key={index}>
                                              <td>{index + 1}</td>
                                              <td>{item.cname}</td>
                                              <td>
                                                <button
                                                  onClick={() => DeleteButton(item._id)}
                                                  className="btn btn-outline-danger"
                                                >
                                                  Remove
                                                </button>
                                              </td>
                                            </tr>
                                          ))
                                        ) : (
                                          <tr>
                                            <td colSpan="3">No data</td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Managecategorty;
