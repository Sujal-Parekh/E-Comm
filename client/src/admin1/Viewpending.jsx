// import 'react-toastify/dist/ReactToastify.min.css'
// import {ToastContainer,toast} from 'react-toastify'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router';
// // import Insertlogo from './Insertlogo'
// // import updatelogo from './updatelogo'
import 'react-toastify/dist/ReactToastify.min.css'
import {ToastContainer,toast} from 'react-toastify'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';
//pagination code
import {Pagination,PaginationItem,Typography,getListItemTextUtilityClass,} from "@mui/material";
import ReactPaginate from "react-paginate";

function Viewpending() {
  const [data, setData] = useState([]);
  const navi = useNavigate();
  //pagination
  const [row,setRow] = useState(8);
  const prevIcon = () => <Typography color="black">Prev</Typography>;
  const nextIcon = () => <Typography color="black">Next</Typography>;
  const handlePage = (page) => setPage(page);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / 8);
  // const totalPages = Math.ceil((data?.length || 0) / 8);

  const pageContent = data.slice((page - 1) * 8, page * 8);
  // const pageContent = data ? data.slice((page - 1) * 8, page * 8) : [];
  var tok = localStorage.getItem("token");
  useEffect(() => {
    all();
    if (!tok) {
      console.log("token not found");
      navi('/login')
    } else {
      all();
    }
    all();
  }, []);
  const wish_alerts = () => {
    toast.success("order move to dispatch", {
        position: "top-center"
    });
};
  // const show = (name1) => {
  //   toast.success("Product " + name1 , {
  //     position: "top-center"
  //   });
  // };

  const all = async () => {
    try {
      const res = await axios.get("http://localhost:5000/porder")
      console.log("porder data",res.data)
      setData(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  const updatestatus = async(id,status)=>{
      try {
        if(status === "pending")
        {
          const res1=axios.get(`http://localhost:5000/dispatch/${id}`);
          all(); 
          wish_alerts("Dispatched");
        }
        else if(status === "dispatch")
        {
          const res2=axios.get(`http://localhost:5000/arrived/${id}`);
          all(); 
          wish_alerts()
          // show("Arrived");
        }
        else
        {
          all();
        }
        all();
      } catch (error) {
        console.log("error",error)
      }
  }
  const par ={
    backgroundColor:"white",
    color:"black"
  };

  return (
    <div>
      <ToastContainer />
    <div className="theme-loader">
<div className="loader-track">
<div className="preloader-wrapper">
<div className="spinner-layer spinner-blue">
  <div className="circle-clipper left">
    <div className="circle" />
  </div>
  <div className="gap-patch">
    <div className="circle" />
  </div>
  <div className="circle-clipper right">
    <div className="circle" />
  </div>
</div>
<div className="spinner-layer spinner-red">
  <div className="circle-clipper left">
    <div className="circle" />
  </div>
  <div className="gap-patch">
    <div className="circle" />
  </div>
  <div className="circle-clipper right">
    <div className="circle" />
  </div>
</div>
<div className="spinner-layer spinner-yellow">
  <div className="circle-clipper left">
    <div className="circle" />
  </div>
  <div className="gap-patch">
    <div className="circle" />
  </div>
  <div className="circle-clipper right">
    <div className="circle" />
  </div>
</div>
<div className="spinner-layer spinner-green">
  <div className="circle-clipper left">
    <div className="circle" />
  </div>
  <div className="gap-patch">
    <div className="circle" />
  </div>
  <div className="circle-clipper right">
    <div className="circle" />
  </div>
</div>
</div>
</div>
</div>
{/* Pre-loader end */}
<div id="pcoded" className="pcoded">
<div className="pcoded-overlay-box" />
<div className="pcoded-container navbar-wrapper">

{/* navbar */}
<Navbar/>

{/* <div className="pcoded-main-container"> */}
<div className="pcoded-wrapper">
  {/* sidebar */}
  <Sidebar/>
  <div className="pcoded-content">
    {/* Page-header start */}
     {/* Page-header end */}
    <div className="pcoded-inner-content">
      {/* Main-body start */}
      <div className="main-body">
        <div className="page-wrapper">
          {/* Page-body start */}
          <div className="page-body">
            {/* <Alllogo/> */}
<br></br><br></br>

            <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Order Status</h4>
                <div className="table-responsive">
                  <br></br>
                  <table className="table">
                    <br></br>
                    <thead>
                      <tr>
                        {/* <th>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                            </label>
                          </div>
                        </th> */}
                        <th> Client Name </th>
                        <th> Order No </th>
                        <th> Product Cost </th>
                        {/* <th> Project </th>
                        <th> Payment Mode </th> */}
                        {/* <th> Start Date </th> */}
                        <th></th>
                        <th> Order Status </th>
                      </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(pageContent)? pageContent?.map((item,key) => (
                      <tr>
                        
                        <td>
                          <span className="pl-2">{item.user}</span>
                        </td>
                        <td> {item.orderid} </td>
                        <td> {item.amount/100} </td>


                        <td>{item.date} </td>
                        <td>
                          <div className="">
                            <button className="btn btn-success" onClick={()=>updatestatus(item.orderid,item.orderstatus)}>{item.orderstatus}</button>
                          </div>
                        </td>
                      </tr>
                    )):<p>no data</p>}  
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
            {/* <Insertlogo/> */}
          </div>
          {/* Page-body end */}
        </div>
        <div id="styleSelector"> </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default Viewpending

