import React, { useState } from "react";
import './bookingform.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import { faFacebookF, faInstagram, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function Bookingform() {


  const [values, setValues] = useState({ name: "", email: "", phonenumber: "", bookingdate: "", time: "", numberofadults: "", numberofchild: "" })
  const [errors, setErrors] = useState({})
  const navigate=useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {



      axios.post("http://localhost:8000/booking", values)

      .then((response)=>{
        console.log(response)
        alert("BOOKING CONFIRMED")
        navigate('/')
      })

      .catch((err)=>{
        console.log(err)
        alert("BOOKING FAILED")
      })


    }





  }


  const validate=()=>{


    let errors={}


    if(!values.name){errors.name="Enter Name"}

    if(!values.email){errors.email="Enter Email"}
    else if(!/\S+@\S+\.\S+/.test(values.email)){errors.email="Enter valid Email" }

    if(!values.phonenumber){errors.phonenumber="Enter Phonenumber"}
    else if(!values.phonenumber.length>10){errors.phonenumber="Digit must be 10 numbers"}

    if(!values.bookingdate){errors.bookingdate="Enter Booking Date"}

    if(!values.time){errors.time="Enter Time"}

    if(!values.numberofadults){errors.numberofadults="Enter Number of Adults"}

    if(!values.numberofchild){errors.numberofchild="Enter Number of childs"}


    return errors;








    }




  return (

    <div className="bgbooking">



      <div className="tablebooking">


        <div className="container mt-5">


          <div className="row d-flex  justify-content-end ">



            <div className="col-md-6 text-white">


              <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width:"100%",backgroundColor: ' rgb(0, 0, 0,0.7)', color: '#fff', borderRadius: '8px' }}>
                <h2 className="text-center mb-4" style={{ color: '#fff' }}>TABLE BOOKING FORM</h2>
                <form onSubmit={handlesubmit}>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Name" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>}
                  <div className="form-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
                  </div>
                  {errors.email && <p className="error">{errors.email}</p>}
                  <div className="form-group mb-3">
                    <input type="tel" className="form-control" placeholder="Phone Number" value={values.phonenumber} onChange={e => setValues({ ...values, phonenumber: e.target.value })} />
                  </div>
                  {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
                  <div className="form-group mb-3">
                    <input type="date" className="form-control" placeholder="Booking Date" value={values.bookingdate} onChange={e => setValues({ ...values, bookingdate: e.target.value })} />
                  </div> {errors.bookingdate && <p className="error">{errors.bookingdate}</p>}

                  <div className="form-group mb-3">
                    <input type="time" className="form-control" placeholder="Time" value={values.time} onChange={e => setValues({ ...values, time: e.target.value })} />
                  </div>
                  {errors.time && <p className="error">{errors.time}</p>}
                  <div className="form-group mb-3">
                    <input type="number" className="form-control" placeholder="Number of Adults" value={values.numberofadults} onChange={e => setValues({ ...values, numberofadults: e.target.value })} />
                  </div>
                  {errors.numberofadults && <p className="error">{errors.numberofadults}</p>}
                  <div className="form-group mb-3">
                    <input type="number" className="form-control" placeholder="Number of Children" value={values.numberofchild} onChange={e => setValues({ ...values, numberofchild: e.target.value })} />
                  </div>
                  {errors.numberofchild && <p className="error">{errors.numberofchild}</p>}
                  <button type="submit" className="btn btn-warning w-100">
                    RESERVE A TABLE
                  </button>
                </form>
              </div>












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

export default Bookingform;