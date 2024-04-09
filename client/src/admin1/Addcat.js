import axios from 'axios';
import React, { useState } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function AddCat() { // Renamed the function to start with an uppercase letter
  const [cname, setCname] = useState('');
  const [error, setError] = useState('');
  const wish_alerts = () => {
    toast.success(" Added to categories", {
        position: "top-center"
    });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
if (!cname.trim()) {
  setError('Please enter a category name.');
  return;
}
try {
  const response = await axios.post('http://localhost:5000/addcategory', { cname });
  console.log('Category added successfully:', response.data);
  setCname('');
  setError('');
  wish_alerts();

} catch (error) {
  console.error('Error adding category:', error);
}
  };

  return (
    <div>
      <>
      <ToastContainer/>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        body {\n            background-color: #f8f9fa;\n        }\n\n        .container {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .card {\n            width: 400px;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 20px;\n        }\n    '
          }}
        />
        <div className="container">
          <div className="card">
            <h5 className="card-title text-center mb-4">Add product category</h5>
            <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="text">product category</label>
                <input
                  type="text"
                  className="form-control"
                  id="logoname"
                  value={cname}
                  placeholder="Enter your productname"
                  onChange={(e) => setCname(e.target.value)}
                />
{error && <p className="text-danger">{error}</p>}

              </div>
              <button type="submit" className="btn btn-primary btn-block">
                {/* <Link to="/viewlogo" ></Link> */}  add category
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default AddCat;
