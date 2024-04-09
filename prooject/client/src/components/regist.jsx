import React, { useState } from 'react'
import './web3.css'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState('');
   
    const [err, setErr] = useState('');
    const navigat = useNavigate()
    const validateForm = () => {
        const errors = {};
        let isValid = true;

    
        if (!name.trim()) {
          errors.name = 'Product name is required';
          isValid = false;
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (password.trim().length < 6) {
            errors.password = 'Password must be at least 6 characters';
            isValid = false;
        }
    
        if (!address) {
          errors.address = 'address is required';
          isValid = false;
        }
    
    
        setErrors(errors);
        return isValid;
      };
    const handelsubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
          }
        console.log(name, email, password, address)

      const res = await axios.post('http://localhost:5000/registration',
            {
                'name': name,
                'email': email,
                'password': password,
                'address': address
            });
        console.log("res data", res.data);
        if (res.status == 200) {
            navigat('/')
        }
        else if (res.data == "this email id already exists") {
            setErr("Please use unique email");
        }
        else {
            setErr('somthing went wrong try again later');
        }
        // }
        //console.log(img,name,email,password,phone,address);
    }
    return (
        <div>
            <>
                {/* Created By CodingNepal */}

                <div className="wrapper">
                    <div className="title">registration Form</div>
                    <form onSubmit={handelsubmit}>


                        <div className="field">
                            <input type="text" name="name" onChange={(e) => setName(e.target.value)} required="" />
                            <label>name</label>
                            {errors.name && <div className="text-danger">{errors.name}</div>}

                        </div>
                        <br/>

                        <div className="field">
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required="" />
                            <label>email</label>
              {errors.email && <div className="text-danger">{errors.email}</div>}

                        </div>
<br/>

                        <div className="field">
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required="" />
                            <label>Password</label>
              {errors.password && <div className="text-danger">{errors.password}</div>}

                        </div>
<br/>
                        <div className="field">
                            <input type="text" name="email" onChange={(e) => setAddress(e.target.value)} required="" />
                            <label> Address</label>
              {errors.address && <div className="text-danger">{errors.address}</div>}

                        </div>



                        <div className="content">
                            {err}
                        </div>
                        <div className="field">
                            <input type="submit" defaultValue="/" />
                        </div>
                        <div className="signup-link">
                            a member? <Link to="/">login</Link>
                        </div>
                    </form>
                </div>
            </>

        </div>
    )
}

export default Registration
