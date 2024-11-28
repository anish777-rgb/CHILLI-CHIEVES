import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './signup.css'

import signchick from '../images/signchick.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faInstagram, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


function Signup() {



    const [values, setValues] = useState({ id: "", fullname: "", email: "", password: "" })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();


    const handlesubmit = (e) => {

        e.preventDefault();
        const validationErrors = validate()
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {

            axios.post("http://localhost:8000/register", values)

                .then((response) => {
                    console.log(response)
                    alert("Registered Successfully")
                    navigate("/login")
                })

                .catch((err) => {
                    console.log(err)
                })
        }




    }


    const validate = () => {
        let errors = {}


        if (!values.id) {
            errors.id = "Enter Username "
        } else if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(values.id)) {
            errors.id = "Username must be combination of letters and numbers"
        }



        if(!values.fullname){errors.fullname="Enter fullname"}


        if(!values.email){errors.email="Enter email"}
        else if (!/\S+@\S+\.\S+/.test(values.email)){errors.email="Enter proper email"}


        if(!values.password){errors.password="Enter password"}
        else if (!values.password.length>6){errors.password="password must be 6 characters"}



        return errors;






    }










    return (


        <div className='signbackground'>
            <div className='container mt-5 '>

                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-md-6 text-center img-fluid">
                        <img
                            src={signchick}
                            alt="Food"
                            className="img-fluid"
                            style={{ maxWidth: '90%', height: 'auto' }}
                        />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="card p-4 bg-dark text-white" style={{ width: '100%', maxWidth: '400px',marginBottom:"100px" }}>
                            <h3 className="mb-4">Sign-up</h3>
                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" style={{ textAlign: "left", display: "flex" }} className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="username"
                                        value={values.id}
                                        onChange={e => setValues({ ...values, id: e.target.value })}

                                    />
                                    {errors.id && <p className="error">{errors.id}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fullname" style={{ textAlign: "left", display: "flex" }} className="form-label">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullname"
                                        placeholder="Fullname"
                                        value={values.fullname}
                                        onChange={e => setValues({ ...values, fullname: e.target.value })}
                                    />
                                    {errors.fullname && <p className="error">{errors.fullname}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" style={{ textAlign: "left", display: "flex" }} className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="username@gmail.com"
                                        value={values.email}
                                        onChange={e => setValues({ ...values, email: e.target.value })}
                                    />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" style={{ textAlign: "left", display: "flex" }} className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={e => setValues({ ...values, password: e.target.value })}
                                    />
                                    {errors.password && <p className="error">{errors.password}</p>}
                                </div>


                                <button type="submit" className="btn btn-warning text-dark w-100 mt-4">
                                    Sign In
                                </button>
                                <p className="text-center mt-3">or continue with</p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-light btn-sm mx-1">
                                        <i className="bi bi-google"></i>
                                    </button>
                                    <button className="btn btn-outline-light btn-sm mx-1">
                                        <i className="bi bi-facebook"></i>
                                    </button>
                                    <button className="btn btn-outline-light btn-sm mx-1">
                                        <i className="bi bi-twitter"></i>
                                    </button>
                                </div>
                                <p className="text-center mt-3">
                                    You already have an account ? <Link to="/login" className="text-warning" style={{textDecoration:"none"}}>Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="footerhm">
    <footer className="footer bg-dark text-white pt-5">
  <div className="footer-top">
    <div className="container">
      <div className="row gy-4 justify-content-between">
        <div className="col-lg-4 col-md-6 col-12 text-center text-md-start">
          <p className="mb-4">
            Welcome to CHILLI & CHIVES! Discover our delicious dishes and exceptional service.
          </p>
          <div className="social-links d-flex justify-content-center justify-content-md-start">
            <Link to="https://www.facebook.com" className="text-white me-3" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link>
            <Link to="https://www.instagram.com" className="text-white me-3" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="https://www.youtube.com" className="text-white me-3" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link>
            <Link to="https://play.google.com" className="text-white" target="_blank"><FontAwesomeIcon icon={faGooglePlay} /></Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6  text-center text-md-start">
          <h6 className="text-white mb-4">CONTACT</h6>
          <p className="mb-2">
            Phone: <a href="tel:+8714189106" className="text-white text-decoration-none">8714189106</a>
          </p>
          <p className="mb-2">
            Email: <a href="mailto:enquiries@mill.co" className="text-white text-decoration-none">enquiries@mill.co</a>
          </p>
          <p className="mb-0">Address: Thrissur round,Ambad lane 680001 TCR</p>
        </div>
        <div className="col-lg-3 col-sm-2text-center text-md-start">
          <h6 className="text-white mb-4">OPENING HOURS</h6>
          <p className="mb-2">Monday-Friday: 08:00 - 22:00</p>
          <p className="mb-0">Saturday-Sunday: 08:00 - 22:00</p>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom p-2 mt-4 border-top border-light">
    <div className="container">
      <div className="row gy-3 justify-content-center justify-content-md-between align-items-center">
        <div className="col-12 col-md-auto text-center text-md-start">
          <p className="mb-0 text-white">&copy;  CHILLE & CHIVES. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>



            
   


        </div>

    );
};

export default Signup;
