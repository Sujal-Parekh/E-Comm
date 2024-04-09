// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Subcat() {
//     const [subname, setSubname] = useState('');
//       const [cid, setCid] = useState('');
//       const [cat, setCat] = useState([]);
//       const [subcat, setSubCat] = useState([]);
//       const [cname, setCname] = useState('');
    
//       useEffect(() => {
//         getCat();
//       }, []);
//   const handleChange =(e)=>{
//     setCid(e.target.value)
//     setCname(e.target.name)
// }
//       const getCat = async () => {
//         try {
//           const res = await axios.get('http://localhost:5000/getcategory');
//           setCat(res.data.data);
//         } catch (error) {
//           console.error('Error fetching categories:', error);
//         }
//       };
     
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await axios.post(
//             'http://localhost:5000/subcategory',
//             { cid, subname ,cname},
//             {
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             }
//           );
//           console.log('Subcategory added successfully:', res.data);
//         } catch (error) {
//           console.error('Error adding subcategory:', error);
//         }
//       };
    
  
//   return (
//     <div>
//         <div>
//       <>
//         <style
//           dangerouslySetInnerHTML={{
//             __html:
//               '\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .card {\n            width: 400px;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 20px;\n        }\n    '
//           }}
//         />
//         <div className="container">
//           <div className="card">
//             <h5 className="card-title text-center mb-4">Add product subcategory</h5>
//             <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
//             <div className="form-group">
//                 <label>Category</label>
//                 <select className="form-control p_input" name="category"  onChange={handleChange} >
//                 <option>Select</option>
//                   {cat?.map((item)=><option className="form-control p_input" value={item._id} name={item.cname}>{item.cname}
//                   {/* setCname({item.cname}) */}
//                   </option>)}
//                  </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="text">product subcategory</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="logoname"
//                   placeholder="Enter your productname"
//                   value={subname}
//                   onChange={(e) => setSubname(e.target.value)}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary btn-block">
//                 {/* <Link to="/viewlogo" ></Link> */}  add subcategory
//               </button>
//             </form>
//           </div>
//         </div>
//       </>
//     </div>
//     </div>
//   )
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Subcat() {
  const [subname, setSubname] = useState('');
  const [cid, setCid] = useState('');
  const [cat, setCat] = useState([]);
  const [cname, setCname] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getCat();
  }, []);
  const wish_alerts = () => {
    toast.success("subcategories are added", {
        position: "top-center"
    });
};

  const getCat = async () => {
    try {
      const res = await axios.get('http://localhost:5000/getcategory');
      setCat(res.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleChange = (e) => {
    setCid(e.target.value);
    setCname(e.target.name);
    // Clear previous errors when changing category
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate inputs
    const errors = {};
    if (!cid) {
      errors.cid = 'Category is required';
    }
    if (!subname.trim()) {
      errors.subname = 'Subcategory name is required';
    }

    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post(
          'http://localhost:5000/subcategory',
          { cid, subname, cname },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Subcategory added successfully:', res.data);
        wish_alerts()
      } catch (error) {
        console.error('Error adding subcategory:', error);
      }
    } else {
      // Display validation errors
      setErrors(errors);
    }
  };

  return (
    <>
      <ToastContainer/>

    {/* <style
      dangerouslySetInnerHTML={{
        __html: '\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .card {\n            width: 400px;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 20px;\n        }\n    '
      }} />*/}
      <div className="container mt-5">
        <div className="card p-4">
          <h5 className="card-title text-center mb-4">Add Product Subcategory</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Category</label>
              <select className="form-control" name="category" onChange={handleChange}>
                <option>Select</option>
                {cat.map((item) => (
                  <option key={item._id} value={item._id} name={item.cname}>
                    {item.cname}
                  </option>
                ))}
              </select>
              {errors.cid && <div className="text-danger mt-1">{errors.cid}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="subcategory">Product Subcategory</label>
              <input
                type="text"
                className="form-control"
                id="subcategory"
                placeholder="Enter the product subcategory"
                value={subname}
                onChange={(e) => setSubname(e.target.value)} />
              {errors.subname && <div className="text-danger mt-1">{errors.subname}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Add Subcategory
            </button>
          </form>
        </div>
      </div></>
  );
}

export default Subcat;
