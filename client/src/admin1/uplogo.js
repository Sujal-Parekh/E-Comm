// import { Link } from 'react-router-dom'
// import 'react-toastify/dist/ReactToastify.min.css'
// import {ToastContainer,toast} from 'react-toastify'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
// import { useNavigate } from 'react-router';
// import axios from 'axios'

// function uplogo() {
//   const [err,setErr] = useState('');
//   const [fine,setFine] = useState(false);
//   const [cat,setCat] = useState([]);
//   const [img,setImg] = useState();
//   const [oldimg,setOldimg] = useState();

//   const [formdata,setFormdata] = useState({
//     images:[],
//     name:'',
//     price:'',
//     quantity:'',
//     description:''
//   });
//   const nav = useNavigate();
//   const {i}=useParams();

//   useEffect(()=>{
//     getItem();
//     getcat();
//   },[]);

//   const getcat = async ()=>{
//     console.log("get cat");
//       try {
//         const res = await axios.get('http://localhost:5000/getcategory');
//         setCat(res.data);
//       //  console.log("res data",cat);
//       } catch (error) {
//         // console.log("catch err",error)
//       }
//   }

//   const show = () => {
//     toast.success("Product Updated Successfully", {
//       position: "top-center"
//     });
//   };

//   const getItem = async ()=>{
//     try {
//       const res = await axios.get(`http://localhost:5000/oneproduct/${i}`);

//       setFormdata({
//         images:res.data.images,
//         name:res.data.name,
//         price:res.data.price,
//         quantity:res.data.quantity,
//         description:res.data.description,
//       })
//       setOldimg(res.data.images[0]);
//       console.log("old image",oldimg[0])
//       // console.log("res img",res.image,"res data img",res.data.image);
//     } catch (error) {
//       // console.log("catch error:" + error);
//     }
//   }

//   const change = (e) =>{
//     setFormdata({...formdata,[e.target.name]:e.target.value});
//   }
//   const imgchange = (e) =>{
//     setImg(e.target.files[0]);
//     setFine(true);
//   }
//   const handelsubmit = async (e) =>{
//       e.preventDefault();
//       console.log("submit");
//       if(formdata.name == '' || formdata.price == '' || formdata.description == '' || formdata.quantity == '')
//       {
//         setErr("Please fill all form fields");
//         return;
//       }
//       else if(!formdata.name.match(/^[a-zA-Z0-9' ]*$/))
//       {
//         setErr("Product name must contain alphabet letters")
//         return;
//       }
//       else if(!formdata.price.match(/^[0-9]*$/))
//       {
//         setErr("Please enter valid Price")
//         return;
//       }
//       else if(!formdata.description.match(/^[a-zA-Z0-9' ]{20,}$/))
//       {
//         setErr("Description should atleast 20 character long");
//         return;
//       }
//       else if(formdata.quantity <= 0)
//       {
//         setErr("Please enter valid Quantity");
//         return;
//       }
//       else if(!fine == true)
//       {
//         setErr('');
//         console.log('oldimg',oldimg)
//         const res = await axios.put(`http://localhost:5000/editproductimg/${i}`,{
//           'name':formdata.name,
//           'price':formdata.price,
//           'quantity':formdata.quantity,
//           'description':formdata.description
//         },{
//           headers:{
//             "Content-Type":"multipart/form-data"
//           }
//         });
//       // console.log("axios data:",res.data);
//         if(res.status == 200)
//         {
//             show();
//             nav('/product')
//         }
//       }

//       else{
//         setErr('');
//         console.log('newimg',img)
//         const res = await axios.put(`http://localhost:5000/editproduct/${i}`,{
//           'images':img,
//           'name':formdata.name,
//           'price':formdata.price,
//           'quantity':formdata.quantity,
//           'description':formdata.description
//         },{
//           headers:{
//             "Content-Type":"multipart/form-data"
//           }
//         });
//       // console.log("axios data:",res.data);
//       if(res.status == 200)
//       {
//           show();
//           nav('/product')
//       }
//       else{
//         // console.log("else part")
//       }
//       }    

//   }

//   return (
//     <div>

//       <>

//   <style
//     dangerouslySetInnerHTML={{
//       __html:
//         "\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .card {\n            width: 400px;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 20px;\n        }\n    "
//     }}
//   />
//   <div className="container">


//     <div className="card">
//       <h5 className="card-title text-center mb-4">Add logo form</h5>
//       <form onSubmit={handelsubmit} method="POST" encType='multipart/form-data'>
//       <div className="text-center">
//               <img height="100px" width="100px" src={`http://localhost:5000/images/${oldimg}`} />
//               </div>
//         <div className="form-group">
//           <label htmlFor="firstName">NEW product IMAGE</label>
//           <div className="form-group">

//                 <label>Upload New Image</label>
//                 <input type="file" name="image" className="form-control p_input" onChange={imgchange} value={""} placeholder='select new photo' />
//               </div>
//           {/* <input
//             type="file"
//             name="image"
//             className="form-control"
//             id="logoimage"
//             // onChange={(e)=>setImage(e.target.files[0])}
//           /> */}
//         </div>
//         <div className="form-group">
//           <label htmlFor="text">productNAME</label>
//           <input
//             type="text"
//             className="form-control"
//             id="logoname"
//             placeholder="Enter your logoname"
//             onChange={change} value={formdata.name}
//             // onChange={(e)=>setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="number">PRICE</label>
//           <input
//             type="number"
//             className="form-control"
//             id="email"
//             placeholder="Enter your price"
//             onChange={change} value={formdata.price}
//             // onChange={(e)=>setPrice(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//         <label htmlFor="number">quantity</label>

//           <input
//             type="number"
//             className="form-control"
//             id="email"
//             placeholder="Enter your quantity"
//             onChange={change}  value={formdata.quantity}
//             // onChange={(e)=>setquantity(e.target.value)}
// //           />
// import { Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.min.css';
// import { ToastContainer, toast } from 'react-toastify';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { useNavigate } from 'react-router';
// import axios from 'axios';

// function UpLogo() {
//   const [err, setErr] = useState('');
//   const [fine, setFine] = useState(false);
//   const [cat, setCat] = useState([]);
//   const [img, setImg] = useState();
//   const [oldimg, setOldimg] = useState();

//   const [formdata, setFormdata] = useState({
//     images: [],
//     logoname: '',
//     price: '',
//     quantity: '',
//     description: ''
//   });
//   const nav = useNavigate();
//   const { i } = useParams();

//   useEffect(() => {
//     getcat();
//   }, []);

//   const getcat = async () => {
//     console.log("get cat");
//     try {
//       const res = await axios.get('http://localhost:5000/getcategory');
//       setCat(res.data);
//     } catch (error) {
//       // console.log("catch err",error)
//     }
//   }

//   const show = () => {
//     toast.success("Product Updated Successfully", {
//       position: "top-center"
//     });
//   };



//   const change = (e) => {
//     setFormdata({ ...formdata, [e.target.name]: e.target.value });
//   }
//   const imgchange = (e) => {
//     setImg(e.target.files[0]);
//     setFine(true);
//   }
//   const handelsubmit = async (e) => {
//     e.preventDefault();
//     console.log("submit");
//     if (formdata.logoname == '' || formdata.price == '' || formdata.description == '' || formdata.quantity == '') {
//       setErr("Please fill all form fields");
//       return;
//     }
//     else if (!formdata.logoname.match(/^[a-zA-Z0-9' ]*$/)) {
//       setErr("Product name must contain alphabet letters")
//       return;
//     }
//     else if (!formdata.price.match(/^[0-9]*$/)) {
//       setErr("Please enter valid Price")
//       return;
//     }
//     else if (!formdata.description.match(/^[a-zA-Z0-9' ]{20,}$/)) {
//       setErr("Description should atleast 20 character long");
//       return;
//     }
//     else if (formdata.quantity <= 0) {
//       setErr("Please enter valid Quantity");
//       return;
//     }
//     else if (!fine == true) {
//       setErr('');
//       console.log('oldimg', oldimg)
//       const res = await axios.put(`http://localhost:5000/editproductimg/${i}`, {
//         'logoname': formdata.logoname,
//         'price': formdata.price,
//         'quantity': formdata.quantity,
//         'description': formdata.description
//       }, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       // console.log("axios data:",res.data);
//       if (res.status == 200) {
//         show();
//         nav('/product')
//       }
//     }

//     else {
//       setErr('');
//       console.log('newimg', img)
//       const res = await axios.put(`http://localhost:5000/updatelogo/${i}`, {
//         'images': img,
//         'logoname': formdata.logoname,
//         'price': formdata.price,
//         'quantity': formdata.quantity,
//         'description': formdata.description
//       }, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       // console.log("axios data:",res.data);
//       if (res.status == 200) {
//         show();
//         nav('/product')
//       }
//       else {
//         // console.log("else part")
//       }
//     }

//   }

//   return (
//     <div>

//       <>
//         <style
//           dangerouslySetInnerHTML={{
//             __html:
//               "\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .card {\n            width: 400px;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 20px;\n        }\n    "
//           }}
//         />
//         <div className="container">


//           <div className="card">
//             <h5 className="card-title text-center mb-4">Add logo form</h5>
//             <form onSubmit={handelsubmit} method="POST" encType='multipart/form-data'>
//               <div className="text-center">
//                 <img height="100px" width="100px" src={`http://localhost:5000/images/${oldimg}`} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="firstName">NEW product IMAGE</label>
//                 <div className="form-group">

//                   <label>Upload New Image</label>
//                   <input type="file" name="image" className="form-control p_input" onChange={imgchange} value={""} placeholder='select new photo' />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="text">productNAME</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="logoname"
//                   id="logoname"
//                   placeholder="Enter your logoname"
//                   onChange={change} value={formdata.logoname}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="number">PRICE</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="price"
//                   id="email"
//                   placeholder="Enter your price"
//                   onChange={change} value={formdata.price}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="number">quantity</label>

//                 <input
//                   type="number"
//                   name="quantity"
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter your quantity"
//                   onChange={change} value={formdata.quantity}
//                 />


// </div>
//         <div class="form-group">
//                 <label for="bio">DESCRIPTION</label>
//                 <textarea 
//                 class="form-control" 
//                 name="description"
//                 id="bio" 
//                 rows="3"
//                  placeholder="tell us about your product"
//                  onChange={change} value={formdata.description}
//                 //  onChange={(e)=>setDesc(e.target.value)}
//                  ></textarea>
//             </div>
//             {/* <div className="form-group">
//                 <label>Category</label>
//                 <select className="form-control p_input" name="category"  onChange={(e)=>setCategory(e.target.value)} >
//                 <option>Select</option>
//                   {cat?.map((item)=><option className="form-control p_input" value={item._id}>{item.cname}</option>)}
//                  </select>
//               </div> */}
//       <br></br>
//         <button type="submit" className="btn btn-primary btn-block">
//          <Link to="/viewlogo" >modify</Link>
//         </button>
//       </form>
//     </div>
//   </div>
// </>

//     </div>
//   )
// }

// export default UpLogo
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router';

function UpLogo() {
  const [err, setErr] = useState('');
  const [fine, setFine] = useState(false);
  const [cat, setCat] = useState([]);
  const [img, setImg] = useState();
  const [oldimg, setOldimg] = useState();

  const [formdata, setFormdata] = useState({
    images: [],
    logoname: '',
    price: '',
    color:'',
    quantity: '',
    description: ''
  });
  const nav = useNavigate();

  const { i } = useParams();

  useEffect(() => {
    getItem();
    getCat();
  }, []);

  const getCat = async () => {
    try {
      const res = await axios.get('http://localhost:5000/getcategory');
      setCat(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  const show = () => {
    // Toast notification logic here
  };

  const getItem = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/oneproduct/${i}`);
      // const { images, logoname, price, quantity, description } = res.data;
      setFormdata({
        images: res.data.images[0],
        logoname: res.data.logoname,
        price: res.data.price,
   
        color:res.data.color,
        quantity: res.data.quantity,
        description: res.data.description
      });
      setOldimg(res.data.images[0]);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  }

  const change = (e) => {
    console.log("form data", formdata)
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const imgChange = (e) => {
    setImg(e.target.files[0]);
    setFine(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit")
    try {
      if (!fine) {
        console.log("non image")
        await axios.put(`http://localhost:5000/updatelogoimg/${i}`, {
          'logoname': formdata.logoname,
          'price': formdata.price,
          'quantity': formdata.quantity,
          'color': formdata.color,
          'description': formdata.description
        });
      } else {
        console.log("with image");
        await axios.put(`http://localhost:5000/updatelogo/${i}`, {
          'images': img,
          'logoname': formdata.logoname,
          'price': formdata.price,
          'color': formdata.color,
          'quantity': formdata.quantity,
          'description': formdata.description
        }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      show();
      // Redirect logic here
      nav('/viewproduct')
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  return (
    <div>
      <style>
        {`
          body {
            background-color: #f8f9fa;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .card {
            width: 400px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .form-group {
            margin-bottom: 20px;
          }
        `}
      </style>
      <div className="container">
        <div className="card">
        <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br>
          <h5 className="card-title text-center mb-4">update product Form</h5>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="text-center">
              <img height="100px" width="100px" src={`http://localhost:5000/public/images/${oldimg}`} alt="Old Logo" />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">New Product Image</label>
              <div className="form-group">
                <label>Upload New Image</label>
                <input type="file" name="im" className="form-control p_input" onChange={imgChange} placeholder='select new photo' />
              </div>
              <div className="form-group">
                <label>Product Name</label>
               
                <input
                  type="text"
                  className="form-control"
                  name="logoname"
                  placeholder="Enter product name"
                  value={formdata.logoname}
                  onChange={change}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Enter price"
                  value={formdata.price}
                  onChange={change}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="number">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Enter price"
                  value={formdata.price}
                  onChange={change}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="number">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  placeholder="Enter quantity"
                  value={formdata.quantity}
                  onChange={change}
                />
              </div>
              <div className="form-group">
                <label htmlFor="color">color</label>
                <input
                  type="text"
                  className="form-control"
                  name="color"
                  placeholder="Enter quantity"
                  value={formdata.color}
                  onChange={change}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                  placeholder="Tell us about your product"
                  value={formdata.description}
                  onChange={change}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Modify</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpLogo;