// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {Pagination,PaginationItem,Typography} from "@mui/material";
// import ReactPaginate from "react-paginate";

// function Allproduct() {
//  //pagination
//  const [row,setRow] = useState(8);
//  const prevIcon = () => <Typography color="black">Prev</Typography>;
//  const nextIcon = () => <Typography color="black">Next</Typography>;
//  const handlePage = (page) => setPage(page);
//  const [page, setPage] = useState(1);
//  // const totalPages = Math.ceil(data.length / 8);
//  // const pageContent = data.slice((page - 1) * 8, page * 8);
//  const totalPages = Math.ceil((data?.length || 0) / 6);
 
//  // const pageContent = data.slice((page - 1) * 8, page * 8);
//  const pageContent = data ? data.slice((page - 1) * 8, page * 8) : [];
 
//   const [data, setdata] = useState([]);
// const nav= useNavigate()
//   useEffect(() => {
//     dat()
//   }, []);
//   const par ={
//     backgroundColor:"white",
//     color:"black"
//   };
//   const updateButton = async (itemId) => {
//     console.log(itemId);
//     try {
//       const response = await axios.put(`http://localhost:5000/updatelogo/${itemId}`)

//       console.log(response.data);
//       dat()

//     } catch (error) {
//       console.log("catch err", error)
//     }

//   }
//   const DeleteButton = async (itemId) => {
//     console.log(itemId);
//     try {
//       const response = await axios.delete(`http://localhost:5000/dellogo/${itemId}`)

//       console.log(response.data);
//       dat()

//     } catch (error) {
//       console.log("catch err", error)
//     }

//   }
//   const dat = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/alllogo")
//       console.log(res.data)
//       setdata(res.data)
//     } catch (error) {
//       console.log("error found", error)
//     }
//   }
//   // const [data, setdata] = useState([]);
//   // useEffect(() => {
//   //   dat();
//   // }, []);

//   // const dat = async () => {
//   //   try {
//   //     const res = await axios.get("http://localhost:5000/alllogo");
//   //     console.log(res.data);
//   //     setdata(res.data);
//   //   } catch (error) {
//   //     console.log("catch err", error);
//   //   }
//   // };

//   return (
//     <div className="mb-4"> {/* Add margin-bottom to the outer div */}
//       <br></br><br></br>
//       <div className="row">
//         { Array.isArray(pageContent)?pageContent?.map((item, index) => (
//           <div key={index} className="col-md-4 col-sm-6 col-xs-12 col-lg-3 mb-3"> {/* Add margin-bottom to each card component */}
//             <div className="card" style={{ width: "16rem" }}>
//               <img
//                 // src={`http://localhost:5000/public/images/${item.images[0]}`}
//                 src={`http://localhost:5000/public/images/${item.images[0]}`}
//                 className="card-img-top"

//                 alt="..."
//                 height="150px"
//                 width="150px"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{item.logoname}</h5>
//                 <p className="card-text">$ {item.price}</p>
//               </div>
//               <ul className="list-group list-group-flush">
//                 <h5 className="list-group-item">{item.description}</h5>
//               </ul>
//               <div className="card-body">
//               <button type="text" className="btn btn-success mr-3" onClick={() => nav(`/updatelogo/${item._id}`)}>Edit</button>
//                 {/* <button type="text" className="btn btn-success mr-2" onClick={() => nav('/updatelogo/${item._id}')}>
//                   Edit
//                 </button> */}
//                 <button type="text" className="btn btn-danger" onClick={() => DeleteButton(item._id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//          <Pagination
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
//       </div>
//     </div>
//   );
// }

// export default Allproduct;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Pagination, PaginationItem, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

function Allproduct() {
  // Pagination
  const [row, setRow] = useState(8);
  const prevIcon = () => <Typography color="black">Prev</Typography>;
  const nextIcon = () => <Typography color="black">Next</Typography>;
  const handlePage = (page) => setPage(page);
  const [page, setPage] = useState(1);
  const [data, setdata] = useState([]); // Declare data here
  const nav = useNavigate();
  const wish_alerts = () => {
    toast.success("product  are removed ", {
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

  const updateButton = async (itemId) => {
    console.log(itemId);
    try {
      const response = await axios.put(`http://localhost:5000/updatelogo/${itemId}`);
      console.log(response.data);
      dat();
    } catch (error) {
      console.log("catch err", error);
    }
  };

  const DeleteButton = async (itemId) => {
    console.log(itemId);
    try {
      const response = await axios.delete(`http://localhost:5000/dellogo/${itemId}`);
      console.log(response.data);
      dat();
      wish_alerts()
    } catch (error) {
      console.log("catch err", error);
    }
  };

  const dat = async () => {
    try {
      const res = await axios.get("http://localhost:5000/alllogo");
      console.log(res.data);
      setdata(res.data);
    } catch (error) {
      console.log("error found", error);
    }
  };

  const totalPages = Math.ceil((data?.length || 0) / 4);
  const pageContent = data ? data.slice((page - 1) * 4, page * 4) : [];

  return (
    <div className="mb-4">
      <br /><br />
    <ToastContainer/>

      <div className="row">
        {Array.isArray(pageContent) && pageContent.map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-12 col-lg-3 mb-3">
            <div className="card" style={{ width: "16rem" }}>
              <img
                src={`http://localhost:5000/public/images/${item.images[0]}`}
                className="card-img-top"
                alt="..."
                height="150px"
                width="150px"
              />
              <div className="card-body">
                <h5 className="card-title">{item.logoname}</h5>
                <p className="card-text">$ {item.price}</p>
              </div>
              <ul className="list-group list-group-flush">
                <h5 className="list-group-item">inventory:{item.quantity}product</h5>
                <h5 className="list-group-item">size:{item.size}</h5>
                <h5 className="list-group-item">colour:{item.color}</h5>

              
              </ul>
              <div className="card-body">
                <button type="text" className="btn btn-success mr-3" onClick={() => nav(`/updatelogo/${item._id}`)}>Edit</button>
                <button type="text" className="btn btn-danger" onClick={() => DeleteButton(item._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
        
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
  );
}

export default Allproduct;
