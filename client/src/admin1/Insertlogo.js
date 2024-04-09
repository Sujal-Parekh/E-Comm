// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Insertlogo = () => {
//   const [image, setImage] = useState('');
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [desc, setDesc] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [subcat, setSubcat] = useState([]);
//   const [cat, setCat] = useState([]);
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');

//   useEffect(() => {
//     getcat();
//     console.log("cat,cat", cat);
//   }, []);

//   const getcat = async () => {
//     console.log("get cat");
//     try {
//       const res = await axios.get('http://localhost:5000/getcategory');
//       setCat(res.data.data);
//       console.log("res data", cat);
//     } catch (error) {
//       console.log("catch err", error);
//     }
//   }

//   const getsubcat = async (cat1) => {
//     console.log("get sub cat");
//     try {
//       console.log("get sub cat try");
//       const res = await axios.get(`http://localhost:5000/getsubcategory/${cat1}`)
//       console.log("get sub cat try", res.data);
//       setSubcat(res?.data);
//       console.log("res data", res?.data)
//     } catch (error) {
//       console.log("catch err", error)
//     }
//   }

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     console.log();
//     try {
//       const res = await axios.post('http://localhost:5000/addlogo', {
//         'images': image,
//         'logoname': name,
//         'price': price,
//         'quantity': quantity,
//         'category': category,
//         'subcategory': subcategory,
//         'description': desc,
//         'size': selectedSize,
//       }, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       console.log("axios");
//       console.log("axios data:", res.data);
//     } catch (error) {
//       console.log("catch err", error);
//     }
//   }

//   const handelcate = (e) => {
//     setCategory(e.target.value);
//     console.log(e.target.value, "idddd");
//     getsubcat(e.target.value);
//   }

//   return (
//     <div>
//       <style
//         dangerouslySetInnerHTML={{
//           __html:
//             "\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .card {\n            width: 400px;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 20px;\n        }\n    "
//         }}
//       />
//       <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

//       <div className="container">
//         <div className="card">
//           <h5 className="card-title text-center mb-4">Add logo form</h5>
//           <form onSubmit={handlesubmit} method="POST" encType='multipart/form-data'>
//             <div className="form-group">
//               <label htmlFor="firstName">product IMAGE</label>
//               <input
//                 type="file"
//                 name="image"
//                 className="form-control"
//                 id="logoimage"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="text">productNAME</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="logoname"
//                 placeholder="Enter your logoname"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="number">PRICE</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter your price"
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="number">quantity</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter your quantity"
//                 onChange={(e) => setQuantity(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="bio">SIZE</label>
//               <div className="radio">
//                 <label>
//                   <input type="radio" className='mx-2' name="size" value="S" onChange={(e) => setSelectedSize(e.target.value)} />
//                   S
//                 </label>
//                 <label>
//                   <input type="radio" className='mx-2' name="size" value="M" onChange={(e) => setSelectedSize(e.target.value)} />
//                   M
//                 </label>
//                 <label>
//                   <input type="radio" className='mx-2' name="size" value="L" onChange={(e) => setSelectedSize(e.target.value)} />
//                   L
//                 </label>
//                 <label>
//                   <input type="radio" className='mx-2' name="size" value="XL" onChange={(e) => setSelectedSize(e.target.value)} />
//                   XL
//                 </label>
//               </div>
//             </div>
//             <div class="form-group">
//               <label for="bio">DESCRIPTION</label>
//               <textarea
//                 class="form-control"
//                 id="bio"
//                 rows="3"
//                 placeholder="tell us about your logo"
//                 onChange={(e) => setDesc(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label>Category</label>
//               <select className="form-control p_input" name="category" onChange={handelcate}   >
//                 <option>Select Category</option>
//                 {cat?.map((item) => <option className="form-control p_input" value={item._id}>{item.cname}</option>)}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>subCategory</label>
//               <select className="form-control p_input" name="category" onChange={(e) => setSubcategory(e.target.value)} >
//                 <option>Select Sub-Category</option>
//                 {subcat?.map((item) => <option className="form-control p_input" value={item._id}>{item.subname}</option>)}
//               </select>
//             </div>
//             <button type="submit" className="btn btn-primary btn-block">
//               <Link to="/viewlogo" >add</Link>
//             </button>
//             <br></br><br></br><br></br><br></br><br></br>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Insertlogo;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Insertlogo = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [color, setColor] = useState('');

  const [desc, setDesc] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [subcat, setSubcat] = useState([]);
  const [cat, setCat] = useState([]);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getcat();
    
  }, []);
  const wish_alerts = () => {
    toast.success("product are added", {
        position: "top-center"
    });
};

  const getcat = async () => {
    try {
      const res = await axios.get('http://localhost:5000/getcategory');
      setCat(res.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getsubcat = async (cat1) => {
    try {
      const res = await axios.get(`http://localhost:5000/getsubcategory/${cat1}`);
      setSubcat(res?.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!image) {
      errors.image = 'Image is required';
      isValid = false;
    }

    if (!name.trim()) {
      errors.name = 'Product name is required';
      isValid = false;
    }

    // if (!price.trim()) {
    //   errors.price = 'Price is required';
    //   isValid = false;
    // }
    if(!price.match(/^[0-9]*$/))
    {
      errors.price = 'Price is required';
      isValid = false;
    }

    if (!quantity.match(/^[0-9]*$/)) {
      errors.quantity = 'Quantity is required';
      isValid = false;
    }
    if (!color.trim()) {
      errors.color = 'colour is required';
      isValid = false;
    }
    if (!selectedSize) {
      errors.selectedSize = 'Size is required';
      isValid = false;
    }

    if (!desc.trim()) {
      errors.desc = 'Description is required';
      isValid = false;
    }

    if (!category) {
      errors.category = 'Category is required';
      isValid = false;
    }

    if (!subcategory) {
      errors.subcategory = 'Subcategory is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('images', image);
      formData.append('logoname', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('category', category);
      formData.append('color', color);

      formData.append('subcategory', subcategory);
      formData.append('description', desc);
      formData.append('size', selectedSize);

      const res = await axios.post('http://localhost:5000/addlogo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Logo added successfully:', res.data);
      wish_alerts();
    } catch (error) {
      console.error('Error adding logo:', error);
    }
  };
  const handelcate = (e) => {
      setCategory(e.target.value);
       console.log(e.target.value, "idddd");
       getsubcat(e.target.value);
      }
  return (
    <div>
       <style
dangerouslySetInnerHTML={{
__html:
"\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .card {\n            width: 400px;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 20px;\n        }\n    "
}}
/>
<ToastContainer/>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>
      <div className="container mt-5">
        <div className="card p-4">
          <h5 className="card-title text-center mb-4">Add Product Form</h5>
          <form onSubmit={handlesubmit} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {errors.image && <div className="text-danger">{errors.image}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your product name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
              />
              {errors.price && <div className="text-danger">{errors.price}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                placeholder="Enter quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
              {errors.quantity && <div className="text-danger">{errors.quantity}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="quantity">colour</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                placeholder="Enter color"
                onChange={(e) => setColor(e.target.value)}
              />
              {errors.color && <div className="text-danger">{errors.color}</div>}
            </div>
            <div className="form-group">
              <label>Size</label>
              <div className="radio">
                 <label>
                   <input type="radio" className='mx-2' name="size" value="S" onChange={(e) => setSelectedSize(e.target.value)} />
                   S
                 </label>
                 <label>
                   <input type="radio" className='mx-2' name="size" value="M" onChange={(e) => setSelectedSize(e.target.value)} />
                   M
                 </label>
                 <label>
                   <input type="radio" className='mx-2' name="size" value="L" onChange={(e) => setSelectedSize(e.target.value)} />
                   L
                 </label>
                 <label>
                   <input type="radio" className='mx-2' name="size" value="XL" onChange={(e) => setSelectedSize(e.target.value)} />
                   XL</label>
</div>
              {errors.selectedSize && <div className="text-danger">{errors.selectedSize}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                className="form-control"
                id="desc"
                rows="3"
                placeholder="Tell us about your product"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
              {errors.desc && <div className="text-danger">{errors.desc}</div>}
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                className="form-control"
                name="category"onChange={handelcate}
               
              >
                <option>Select Category</option>
                {cat.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.cname}
                  </option>
                ))}
              </select>
              {errors.category && <div className="text-danger">{errors.category}</div>}
            </div>
            <div className="form-group">
              <label>Subcategory</label>
              <select
                className="form-control"
                name="subcategory"
                onChange={(e) => setSubcategory(e.target.value)}
              >
                <option>Select Subcategory</option>
                {subcat.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.subname}
                  </option>
                ))}
              </select>
              {errors.subcategory && <div className="text-danger">{errors.subcategory}</div>}
            </div>
            {/* <div className="form-group">
<label>subCategory</label>
<select className="form-control p_input" name="category" onChange={(e) => setSubcategory(e.target.value)} >
<option>Select Sub-Category</option>
{subcat?.map((item) => <option className="form-control p_input" value={item._id}>{item.subname}</option>)}
               </select>
          </div> */}
            <button type="submit" className="btn btn-primary btn-block">
              Add product
            </button>
          </form>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
      </div>

    </div>
    
  );
};

export default Insertlogo;