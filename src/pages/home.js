import React, { useEffect } from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faTruck, faSmile, faStar } from '@fortawesome/free-solid-svg-icons';
import 'glightbox/dist/css/glightbox.min.css'; // Import the CSS
import GLightbox from 'glightbox'; // Import the GLightbox constructor
import '@fortawesome/fontawesome-free/css/all.min.css';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';




import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import about from '../images/about.png'
import biriyani from '../images/biriyani.jpg'
import shawarma from '../images/shawarma.jpg'
import grilled from '../images/grilled.jpg'
import shef1 from '../images/shef1.png'
import shef2 from '../images/shef2.jpg'
import gallery1 from '../images/gallery-1.jpg'
import gallery2 from '../images/gallery-2.jpg'
import gallery3 from '../images/gallery-3.jpg'
import gallery4 from '../images/gallery-4.jpg'
import gallery5 from '../images/gallery-5.jpg'
import gallery6 from '../images/gallery-6.jpg'
import gallery7 from '../images/gallery-7.jpg'
import gallery8 from '../images/gallery-8.jpg'
import { Link } from "react-router-dom";


function Home() {

  useEffect(() => {
    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: '.glightbox', // Ensure this matches your class names
    });

    // Optional: Cleanup on unmount
    return () => {
      lightbox.destroy();
    };
  }, []); // Empty dependency array ensures this runs once on mount


  return (


    <div className="homebg">

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active vh-100 position-relative">
            <img
              src={slide1}
              className="d-block w-100 vh-100"
              alt="Slide 1"
              style={{ objectFit: "cover" }}
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle text-center">
              <h6 className="d-none d-md-block">-CHILLI & CHIVES-</h6>
              <h1
                className="display-4 fw-bold"
                style={{
                  fontFamily: "fantasy",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "2px",
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)"
                }}
              >
                Welcome to Flavor Heaven
              </h1>
              <Link to="/signup" className="btn btn-brand rounded-pill mt-5">Book Table</Link>
            </div>
          </div>

          <div className="carousel-item vh-100 position-relative">
            <img
              src={slide2}
              className="d-block w-100 vh-100"
              alt="Slide 2"
              style={{ objectFit: "cover" }}
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle text-center">
              <h6 className="d-none d-md-block">-CHILLI & CHIVES-</h6>
              <h1
                className="display-4 fw-bold"
                style={{
                  fontFamily: "fantasy",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "2px",
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)"
                }}
              >
                Fresh & Tasty Food
              </h1>
              <Link to="/signup" className="btn btn-brand rounded-pill mt-5">Book Table</Link>
            </div>
          </div>

          <div className="carousel-item vh-100 position-relative">
            <img
              src={slide3}
              className="d-block w-100 vh-100"
              alt="Slide 3"
              style={{ objectFit: "cover" }}
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle text-center">
              <h6 className="d-none d-md-block">-CHILLI & CHIVES-</h6>
              <h1
                className="display-4 fw-bold"
                style={{
                  fontFamily: "fantasy",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  letterSpacing: "2px",
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)"
                }}
              >
                Your Table Awaits
              </h1>
              <Link to="/signup" className="btn btn-brand rounded-pill mt-5">Book Table</Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <section id="about">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-5" >
              <img src={about} style={{ height: "500px", width: "100%" }} id="aboutimg" alt="About " />
            </div>
            <div className="col-lg-5" >
              <h1
                style={{
                  textAlign: "left",
                  fontFamily: "fantasy",
                  color: "#FF6347",
                  fontSize: "3rem",
                  letterSpacing: "2px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  marginBottom: "20px"
                }}
              >
                About Us
              </h1>
              <div className="divider mt-5"></div>
              <p style={{ fontFamily: "serif", textAlign: "justify", fontSize: "18px", color: "GrayText" }}>
                Welcome to Chilli & Chives, a restaurant where culinary artistry meets the freshest ingredients. Our mission is to offer an extraordinary dining experience that delights all your senses.
              </p>
              <p style={{ fontFamily: "serif", textAlign: "justify", fontSize: "18px", marginTop: "10px", color: "GrayText" }}>
                At Chilli & Chives, we are passionate about creating dishes that not only satisfy your taste buds but also excite your visual palate. We work closely with local farmers and purveyors to bring the best seasonal ingredients to your table, ensuring every dish is bursting with flavor and freshness.
              </p>
              <p style={{ fontFamily: "serif", textAlign: "justify", fontSize: "18px", marginTop: "10px", color: "GrayText" }}>
                Thank you for choosing Chilli & Chives. We look forward to welcoming you and making your dining experience unforgettable!
              </p>

              <a target="_self" href="https://www.youtube.com/shorts/7NixU-c3Rcw" className="btn btn-danger rounded-pill" style={{ marginTop: "20px" }}>Watch Us</a>
            </div>
          </div>
        </div>
      </section>


      <div className="featured-dishes">
        <div className="container my-5">
          <h2 className="text-center mb-4" style={{
            textAlign: "center",
            fontFamily: "fantasy",
            color: "#FF6347",
            fontSize: "3rem",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            marginBottom: "20px"
          }}>Featured Dishes</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card card-dishes">
                <img
                  src={biriyani}
                  className="card-img-top"
                  alt="Biryani"
                  style={{ height: "500px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" >Biryani</h5>
                  <p className="card-text" style={{ color: "white", fontFamily: "serif" }}>A fragrant and flavorful rice dish with spices, meat, and a blend of aromatic herbs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-dishes">
                <img
                  src={grilled}
                  className="card-img-top"
                  alt="Alfam"
                  style={{ height: "500px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Grilled Chicken</h5>
                  <p className="card-text" style={{ color: "white", fontFamily: "serif" }}>A delicious and spicy marinated chicken dish, grilled to perfection.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-dishes">
                <img
                  src={shawarma}
                  className="card-img-top"
                  alt="Shawarma"
                  style={{ height: "500px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Shawarma</h5>
                  <p className="card-text" style={{ color: "white", fontFamily: "serif" }}>Tender slices of spiced meat wrapped in a flatbread with fresh vegetables and sauce.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="whychooseus">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 intro-text text-center">
              <h1 className="text-warning" style={{ marginTop: "100px", textShadow: "4px 4px 8px black", fontFamily: "fantasy", fontSize: "2.5rem" }}>Why Choose Us?</h1>
              <p className="text" style={{ textShadow: "4px 4px 8px white", fontFamily: "cursive", fontSize: "1.25rem" }}>
                Discover the exceptional reasons why our restaurant stands out.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-why-choose-us text-center border-light">
                <div className="card-body">
                  <FontAwesomeIcon icon={faWifi} style={{ fontSize: '2.5rem', color: '#f39c12' }} />
                  <h5 className="card-title text-warning mt-3">Complimentary Wifi</h5>
                  <p className="card-text" style={{ color: "GrayText", fontFamily: "serif", textAlign: "justify", fontSize: "1rem" }}>Stay connected with our high-speed internet at no extra charge.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-why-choose-us text-center border-light">
                <div className="card-body">
                  <FontAwesomeIcon icon={faTruck} style={{ fontSize: '2.5rem', color: '#f39c12' }} />
                  <h5 className="card-title text-warning mt-3">Quick & Reliable Delivery</h5>
                  <p className="card-text" style={{ color: "GrayText", fontFamily: "serif", textAlign: "justify", fontSize: "1rem" }}>Enjoy your favorite dishes delivered hot and fresh, right to your door.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-why-choose-us text-center border-light">
                <div className="card-body">
                  <FontAwesomeIcon icon={faSmile} style={{ fontSize: '2.5rem', color: '#f39c12' }} />
                  <h5 className="card-title text-warning mt-3">Attentive & Friendly Staff</h5>
                  <p className="card-text" style={{ color: "GrayText", fontFamily: "serif", textAlign: "justify", fontSize: "1rem" }}>Experience exceptional service with our dedicated and personable team.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card card-why-choose-us text-center border-light">
                <div className="card-body">
                  <FontAwesomeIcon icon={faStar} style={{ fontSize: '2.5rem', color: '#f39c12' }} />
                  <h5 className="card-title text-warning mt-3">Highly Rated & Trusted</h5>
                  <p className="card-text" style={{ color: "GrayText", fontFamily: "serif", textAlign: "justify", fontSize: "1rem" }}>Enjoy meals at a restaurant renowned for its quality and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="senior-chefs-section">
  <h2 className="text-center" style={{
    fontFamily: "fantasy",
    color: "#FF6347",
    fontSize: "3rem",
    letterSpacing: "2px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px"
  }}>Meet Our Senior Chefs</h2>
  <div className="container" >
    <div className="row justify-content-center">
      
      <div className="col-lg-10 col-md-12 mt-4">
        <div className="card senior-chef-card d-flex flex-md-row flex-column align-items-center " style={{ backgroundColor: "lightgoldenrodyellow" }}>
          <img src={shef1} style={{ height: "300px", width: "100%", objectFit: "cover" }} alt="Senior Chef 1" className="senior-chef-image img-fluid" />
          <div className="card-body">
            <h3 className="card-title text-darkred">Chef Alexander Smith</h3>
            <p className="card-text text-secondary" style={{ fontFamily: "serif", textAlign: "justify", fontSize: "18px" }}>
              With over 20 years of culinary experience, Chef Alexander Smith specializes in gourmet French cuisine. His innovative techniques and passion for perfection have earned him numerous accolades and a dedicated following. Alexander's signature dishes include Truffle Risotto and Beef Wellington, each showcasing his refined skills and artistic flair.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-10 col-md-12 mt-5">
        <div className="card senior-chef-card d-flex flex-md-row flex-column align-items-center" style={{ backgroundColor: "lightgoldenrodyellow" }}>
          <img src={shef2} style={{ height: "300px", width: "100%", objectFit: "cover" }} alt="Senior Chef 2" className="senior-chef-image img-fluid" />
          <div className="card-body">
            <h3 className="card-title text-darkred">Chef Olivia Johnson</h3>
            <p className="card-text text-secondary" style={{ fontFamily: "serif", textAlign: "justify", fontSize: "18px" }}>
              Chef Olivia Johnson brings a wealth of expertise in contemporary Italian cuisine. With a career spanning over 15 years, Olivia is known for her vibrant flavors and creative presentations. Her specialties include handcrafted pastas and exquisite seafood dishes. Olivia’s dedication to fresh, high-quality ingredients ensures a memorable dining experience for every guest.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

  


      <div className="photogallery">




        <div className="container">
          <p className="text-center display-6" style={{
            textAlign: "left",
            fontFamily: "fantasy",
            color: "#FF6347",
            fontSize: "3rem",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            marginBottom: "20px"
          }}
          >Gallery</p>
          <div className="row">
            <div className="col-md-4 mb-3">
              <a href={gallery1} className="glightbox" data-gallery="gallery1">
                <img src={gallery1} className="img-fluid" alt="Gallery 1" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href={gallery2} className="glightbox" data-gallery="gallery1">
                <img src={gallery2} className="img-fluid" alt="Gallery 2" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href={gallery3} className="glightbox" data-gallery="gallery1">
                <img src={gallery3} className="img-fluid" alt="Gallery 3" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href={gallery4} className="glightbox" data-gallery="gallery1">
                <img src={gallery4} className="img-fluid" alt="Gallery 4" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href={gallery5} className="glightbox" data-gallery="gallery1">
                <img src={gallery5} className="img-fluid" alt="Gallery 5" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href={gallery6} className="glightbox" data-gallery="gallery1">
                <img src={gallery6} className="img-fluid" alt="Gallery 6" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href={gallery7} className="glightbox" data-gallery="gallery1">
                <img src={gallery7} className="img-fluid" alt="Gallery 6" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href={gallery8} className="glightbox" data-gallery="gallery1">
                <img src={gallery8} className="img-fluid" alt="Gallery 6" />
              </a>
            </div>
          </div>
        </div>




      </div>



       <div className="review">
        <div classname="container">
       <p className="text-center mt-5 " style={{
            textAlign: "left",
            fontFamily: "fantasy",
            color: "#FF6347",
            fontSize: "3rem",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          
          }}>Customer Reviews</p>
       <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="testimonial-card card mx-auto d-flex flex-row align-items-center p-4"
            style={{
              maxWidth: '600px',
              backgroundColor: '#f8f9fa'
            }}
          >
            <img
              src={shef1}
              className="rounded-circle me-4 border border-warning"
              style={{
                width: '100px',
                height: '100px',
                borderWidth: '3px',
              }}
              alt="Customer"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="review-content">
                <div
                  className="quote-icon mb-2"
                  style={{
                    fontSize: '24px',
                    color: '#007bff'
                  }}
                >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p
                  className="card-text"
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic'
                  }}
                >
                  “The ambiance at Chilli & Chives is truly delightful. The food is exceptionally delicious, and the service is impeccable.”
                </p>
                <h5
                  className="card-title mt-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}
                >
                  John Doe
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="testimonial-card card mx-auto d-flex flex-row align-items-center p-4"
            style={{
              maxWidth: '600px',
              backgroundColor: '#f8f9fa'
            }}
          >
            <img
              src={shef1}
              className="rounded-circle me-4 border border-warning"
              style={{
                width: '100px',
                height: '100px',
                borderWidth: '3px'
              }}
              alt="Customer"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="review-content">
                <div
                  className="quote-icon mb-2"
                  style={{
                    fontSize: '24px',
                    color: '#007bff'
                  }}
                >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p
                  className="card-text"
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic',
                  }}
                >
                  “Every dish at Chilli & Chives is a masterpiece. A great place for a memorable dining experience.”
                </p>
                <h5
                  className="card-title mt-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}
                >
                  Jane Smith
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="testimonial-card card mx-auto d-flex flex-row align-items-center p-4"
            style={{
              maxWidth: '600px',
              backgroundColor: '#f8f9fa',
            }}
          >
            <img
              src={shef1}
              className="rounded-circle me-4 border border-warning"
              style={{
                width: '100px',
                height: '100px',
                borderWidth: '3px',
              }}
              alt="Customer"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="review-content">
                <div
                  className="quote-icon mb-2"
                  style={{
                    fontSize: '24px',
                    color: '#007bff',
                  }}
                >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p
                  className="card-text"
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic', // Italicize text
                  }}
                >
                  “An unforgettable dining experience with excellent service and fantastic food!”
                </p>
                <h5
                  className="card-title mt-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontStyle: 'italic', // Italicize text
                  }}
                >
                  Michael Johnson
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="testimonial-card card mx-auto d-flex flex-row align-items-center p-4"
            style={{
              maxWidth: '600px',
              backgroundColor: '#f8f9fa',
            }}
          >
            <img
              src={shef1}
              className="rounded-circle me-4 border border-warning"
              style={{
                width: '100px',
                height: '100px',
                borderWidth: '3px',
              }}
              alt="Customer"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="review-content">
                <div
                  className="quote-icon mb-2"
                  style={{
                    fontSize: '24px',
                    color: '#007bff', // Adjust the color if needed
                  }}
                >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p
                  className="card-text"
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic'
                  }}
                >
                  “The best dining experience I've had in a long time. The flavors are outstanding!”
                </p>
                <h5
                  className="card-title mt-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}
                >
                  Emily Davis
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="testimonial-card card mx-auto d-flex flex-row align-items-center p-4"
            style={{
              maxWidth: '600px',
              backgroundColor: '#f8f9fa',
            }}
          >
            <img
              src={shef1}
              className="rounded-circle me-4 border border-warning"
              style={{
                width: '100px',
                height: '100px',
                borderWidth: '3px',
              }}
              alt="Customer"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="review-content">
                <div
                  className="quote-icon mb-2"
                  style={{
                    fontSize: '24px',
                    color: '#007bff',
                  }}
                >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p
                  className="card-text"
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic'
                  }}
                >
                  “A perfect blend of ambiance and flavor. Highly recommend Chilli & Chives!”
                </p>
                <h5
                  className="card-title mt-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}
                >
                  Sarah Brown
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="testimonial-card card mx-auto d-flex flex-row align-items-center p-4"
            style={{
              maxWidth: '600px',
              backgroundColor: '#f8f9fa',
            }}
          >
            <img
              src={shef1}
              className="rounded-circle me-4 border border-warning"
              style={{
                width: '100px',
                height: '100px',
                borderWidth: '3px',
              }}
              alt="Customer"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="review-content">
                <div
                  className="quote-icon mb-2"
                  style={{
                    fontSize: '24px',
                    color: '#007bff',
                  }}
                >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p
                  className="card-text"
                  style={{
                    fontSize: '16px',
                    fontStyle: 'italic'
                  }}
                >
                  “Exceptional quality and service. Chilli & Chives is now my go-to restaurant!”
                </p>
                <h5
                  className="card-title mt-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}
                >
                  David Lee
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
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


















    </div >




  )
}



export default Home;