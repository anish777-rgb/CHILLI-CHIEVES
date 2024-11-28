import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faInstagram, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import loginchick from '../images/loginchick.png'
import { Link, useNavigate } from 'react-router-dom';


function Login() {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate();


    const handlesubmit = (e) => {

        e.preventDefault();
        const validationErrors = validate()
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {


            fetch("http://localhost:8000/register/" + username)


                .then((res) => res.json())

                .then((resp) => {

                    console.log(resp)


                    if (Object.keys(resp).length === 0) {


                        alert("Enter username")

                    } else {

                        if (resp.password === password) {

                            alert("Login Successfully")
                            window.location.reload();
                            navigate("/bookingform")
                            localStorage.setItem("username", username)


                        }


                    }

                })

                .catch((err) => {
                    console.log(err)
                    alert("Enter valid credentials")
                })











        }




    }


    const validate = () => {


        let errors = {}

        if (!username) { errors.username = "Enter username" }

        if (!password) { errors.password = "Enter password" }



        return errors;



    }







    return (




        <div className='loginbackground'>
            <div className='container mt-5 '>

                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col-md-6 text-center img-fluid">
                        <img
                            src={loginchick}
                            alt="Food"
                            className="img-fluid"
                            style={{ maxWidth: '90%', height: 'auto' }}
                        />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="card p-4 bg-dark text-white" style={{ width: '100%', maxWidth: '400px',marginBottom:"100px" }}>
                            <h3 className="mb-4">Login</h3>
                            <form onSubmit={handlesubmit} >


                                <div className="mb-3">
                                    <label htmlFor="email" style={{ textAlign: "left", display: "flex" }} className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="text"
                                        placeholder="username"
                                        onChange={e => setUsername(e.target.value)}
                                        value={username}

                                    />
                                    {errors.username && <p className='error'>{errors.username}</p>}

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" style={{ textAlign: "left", display: "flex" }} className="form-label">
                                        password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="enter password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}

                                    />

                                    {errors.password && <p className='error'>{errors.password}</p>}

                                </div>


                                <button type="submit" className="btn btn-warning text-dark w-100 mt-4">
                                    LOGIN
                                </button>

                                <p className="text-center mt-5">
                                    Don't have an account yet? <Link to="/signup" className="text-warning" style={{ textDecoration: "none" }}>Register for free</Link>
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








    )

}



export default Login;
