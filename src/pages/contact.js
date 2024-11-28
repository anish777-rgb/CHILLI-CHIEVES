import React, { useState } from "react";
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faInstagram, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";





function Contact(){


    const[values,setValues]=useState({name:"",email:"",msg:""})
    
    const [errors,setErrors]=useState({})
    const navigate=useNavigate()



    const handlesubmit=(e)=>{
        e.preventDefault();
        const validationErrors=validate()
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length===0){


            axios.post("http://localhost:8000/contact",values)


            .then((response)=>{


                console.log(response)

                alert("FORM SUBMITTED SUCCESFULLY")
                navigate('/')
            })


            .catch((err)=>console.log(err))




        }
    }


    const validate=()=>{

        let errors={}


        if (!values.name){errors.name="enter name"}

        if(!values.email){
            errors.email="enter email"
        } else if(!/\S+@\S+\.\S+/.test(values.email)){errors.email="Enter valid Email"}

        

        return errors;
    }

    return(

        <div className="bgcontact" style={{height:"120vh",display:"grid"}}>


<div className="contact-us-container">
      <div className="contact-header">
        <h1 style={{
            textAlign: "left",
            fontFamily: "fantasy",
            color: " #d4a017",
            fontSize: "3rem",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            marginBottom: "20px"
          }}>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or anything else, our team is ready to answer all your questions.</p>
      </div>

      

      <div className="contact-form">
        <div className="card" style={{padding:"20px",backgroundColor:"lightgrey"}}>
        <h2>Send Us a Message</h2>
        <form on onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="name" style={{textAlign:"left",display:"grid"}}>Name</label>
            <input type="text"  name="name" id="name" placeholder="Your Name"  onChange={e=>setValues({...values,name:e.target.value})} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email"  style={{textAlign:"left",display:"grid"}}>Email</label>
            <input type="email" name="email"  id="email" placeholder="Your Email"  onChange={e=>setValues({...values,email:e.target.value})}  />
            {errors.email && <p className="error">{errors.email}</p>}

          </div>
          <div className="form-group">
            <label htmlFor="message"  style={{textAlign:"left",display:"grid"}}>Message</label>
            <textarea id="message" name="msg" placeholder="Your Message" rows="5" onChange={e=>setValues({...values,msg:e.target.value})}></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
      </div>
    </div>



    <div className="contact-details">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <h3>Call Us</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <h3>Email Us</h3>
          <p>enquiries@mill.co</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <h3>Visit Us</h3>
          <p>Thrissur round,Ambad lane 680001 TCR</p>
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


export default Contact;