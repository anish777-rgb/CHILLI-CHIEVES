import React, { useEffect, useState } from 'react';
import './menu.css'
import dosa from '../images/dosa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import { faFacebookF, faInstagram, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


import idli from '../images/idli.png'
import upma from '../images/upma.png'
import gheeroast from '../images/ghee roast.png'
import appam from '../images/appam.png'
import nulappam from '../images/nulappam.png'
import puttu from '../images/puttu.png'
import masaladosa from '../images/masala dosa.png';
import biriyani from '../images/biriyani.png';
import gopi from '../images/gobi.png';
import friedrice from '../images/fried rice.png'
import Beefcury from '../images/beef curry.png'
import roastedbeef from '../images/roasted beef.png'
import chickencurry from '../images/chicken curry.png'
import roastedchicken from '../images/roasted chicken.png'
import thaifish from '../images/thaifish.png'
import vegsalad from '../images/vegitable salad.png'
import meals from '../images/meals.png'
import greenpeas from '../images/greenpeas.png'
import pottato from '../images/potatto curry.png'
import shrimp from '../images/shrimp.png'
import grillkebab from '../images/grillkebab.png'
import pizza from '../images/pizza.png'
import breadsandwitch from '../images/bread sandwitch.png'
import shawarma1 from '../images/shawarma1.png'
import kfc from '../images/kfc set.png'
import burger from '../images/burger.png'
import indianthai from '../images/indian thai.png'
import thai from '../images/thai.png'
import Noodels from '../images/noodels.png'
import axios from 'axios';



















function Menu() {

    const [username, setUsername] = ("")
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0); // To keep track of total amount
   

    useEffect(() => {

        const storedUsername = localStorage.getItem("username")

        if (storedUsername) {
            setUsername(storedUsername);
        }


    }, []);


    // Add items to the cart and update total amount
    const addToCart = (item) => {
        setCart([...cart, item]);
        setTotalAmount(totalAmount + item.price); // Update the total amount
    };

    const bookItems = () => {
        // Send the entire cart to the backend for booking
        axios.post('http://localhost:8000/cart/', { 
            username: username, 
            cartItems: cart, 
            totalAmount: totalAmount 
        })
        .then(response => {
            alert('Items booked successfully!');
            console.log('Booking response:', response.data);
        })
        .catch(error => {
            console.error('Error booking items:', error);
        });
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart); // Assuming you have a state setter for the cart
    };

    return (
        <div className='menubg'>
            <div className="container ">

                <header className="text-center py-4" style={{ color: '#000', }}>
                    <h1 style={{ fontWeight: 'bold' }}>Home Delivery Available</h1>
                    <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#d32f2f' }}>
                        Order Now & Grab Exciting Offers!
                    </h2>
                </header>

                <div className='navpills ' >
                    {/* Nav Pills */}
                    <ul className="nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
                        <li className="nav-item " role="presentation">
                            <a className="nav-link active " id="pills-breakfast-tab" data-bs-toggle="pill" href="#pills-breakfast" role="tab" aria-controls="pills-breakfast" aria-selected="true">Breakfast</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-lunch-tab" data-bs-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">Lunch</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-dinner-tab" data-bs-toggle="pill" href="#pills-dinner" role="tab" aria-controls="pills-dinner" aria-selected="false">Dinner</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {/* Breakfast Tab */}
                        <div className="tab-pane fade show active" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
                            <div className="row">
                                {/* Card 1: Dosa */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={dosa}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Dosa</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹40</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'DOSA  ', price: 20 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: upma */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={upma}
                                            className="card-img-top"
                                            alt="upma"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Upma</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹30</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'UPMA', price: 30 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: Idli */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={idli}
                                            className="card-img-top"
                                            alt="Idli"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Idli</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹30</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'IDLI', price: 30 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Card 4: puttu */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={puttu}
                                            className="card-img-top"
                                            alt="upma"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>puttu</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹35</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'PUTTU', price: 40 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className='row'>

                                {/* Card 5: appam */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={appam}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Appam</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹20</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'APPAM', price: 40 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 6: nullapam */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={nulappam}
                                            className="card-img-top"
                                            alt="upma"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Nullapam</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹20</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'NULLAPAM', price: 20 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 7: gheese roast */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={gheeroast}
                                            className="card-img-top"
                                            alt="Idli"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Ghee Roast</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'GHEE ROAST', price: 70 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Card 8: masala dosa */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={masaladosa}
                                            className="card-img-top"
                                            alt="upma"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Malsa Dosa</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>70</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'MASALA DOSA', price: 70 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>








                                </div>    {/*   row */}
                                {/* Add more breakfast items here */}
                            </div>
                        </div>

                        {/* Lunch Tab */}
                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">
                            <div className="row">

                                {/* Card 1: biriyani */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={biriyani}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Biryani</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹180</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'BIRIYANI', price: 180 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: FRIEDRICE */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={friedrice}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Fried Rice</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹170</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'FRIED RICE', price: 170 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Card 3: Chicken curry */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={chickencurry}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Chicken Curry</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹100</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'CHICKEN CURRY', price: 100 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Card 4: BEEFCURRY */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={Beefcury}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Beef Curry</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹140</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'BEEF CURRY', price: 140 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>

                                {/* Card 5: vegsalad */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={vegsalad}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Veg Salad</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹20</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'VEG SALAD', price: 40 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 6: meals */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={meals}
                                            className="card-img-top"
                                            alt="upma"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Meals</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'MEALS', price: 70 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 7: roastedbeef */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={roastedbeef}
                                            className="card-img-top"
                                            alt="Idli"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Beef Roasted</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'BEEF ROASTED', price: 70 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Card 8: CHICKEN ROASTED*/}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={grillkebab}
                                            className="card-img-top"
                                            alt="upma"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Grill Kebab</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>70</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'GRILLED KEBAB', price: 50 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>








                                </div>    {/*   row */}


                                {/* Card 9:gobi */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={gopi}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Chilly Gobi</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹90</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'CHILLY GOBI', price: 90 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: THAIFISH */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={thaifish}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Thai Fish</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹80</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'THAI FISH', price: 170 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Card 3: greenpeas */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={greenpeas}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Green Peas</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹40</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'GREEN PEAS', price: 40 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                {/* Card 4: pottato curry */}
                                <div className="col-lg-3">
                                    <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                        <img
                                            src={pottato}
                                            className="card-img-top"
                                            alt="Dosa"
                                            style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                            <h5 className="card-title" style={{ fontSize: '2rem' }}>Pottato Curry</h5>
                                            <p className="card-text text-white">
                                                A mouth-watering combination of fragrant rice and flavorful spices.
                                            </p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                            <span className="text-white" style={{ fontSize: '30px' }}>₹140</span>
                                            {username ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    onClick={() => addToCart({ name: 'POTTATO CURRY', price: 140 })}
                                                >
                                                    ADD TO CART
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-light"
                                                    style={{ borderRadius: '15px' }}
                                                    disabled
                                                >
                                                    LOGIN TO ADD CART
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    {/* Card 4: shrimp */}
                                    <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={shrimp}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Shrimp</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹100</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'SHRIMP', price: 100 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4: CHICKEN ROAST */}
                                    <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={roastedchicken}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Chicken Roast</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹110</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'CHICKEN ROAST', price: 110 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>




                                </div>


                                {/* Add more lunch items here */}
                            </div>
                        </div>

                        {/* Dinner Tab */}
                        <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">
                            <div className="row">

                                    {/* Card 1: NOODELS */}
                                    <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={Noodels}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Noodels</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'NOODELS', price: 70 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>



                                     {/* Card 2: thai */}
                                     <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={thai}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Thai</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹110</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'THAI', price: 70 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>



                                     {/* Card 3: INDIAN THAI */}
                                     <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={indianthai}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Indian Thai</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹90</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'INDIAN TTHAI', price: 70 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>


                                     {/* Card 4: PIZZA */}
                                     <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={pizza}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Pizza</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'PIZZA', price: 350 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    


                                {/* Add more dinner items here */}
                            </div>

                            <div className='row'>

                                 {/* Card 5: SHAWARMA*/}
                                 <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={shawarma1}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Shawarma</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'SHAWARMA', price: 70 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>


                                  {/* Card 6: kfc*/}
                                  <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={kfc}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>KFC Set</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'KFC', price: 200 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>


                                     {/* Card 6: BURGER */}
                                     <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={burger}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Burger</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'BURGER', price: 140 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO BOOK
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>





                                     {/* Card 7: sandwitch */}
                                     <div className="col-lg-3">
                                        <div className="card card-menu bg-light" style={{ border: 'none' }}>
                                            <img
                                                src={breadsandwitch}
                                                className="card-img-top"
                                                alt="Dosa"
                                                style={{ height: '300px', width: '100%', textAlign: 'center' }}
                                            />
                                            <div className="card-body" style={{ backgroundColor: '#F58d17' }}>
                                                <h5 className="card-title" style={{ fontSize: '2rem' }}>Bread sandwitch</h5>
                                                <p className="card-text text-white">
                                                    A mouth-watering combination of fragrant rice and flavorful spices.
                                                </p>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between align-items-start bg-dark">
                                                <span className="text-white" style={{ fontSize: '30px' }}>₹70</span>
                                                {username ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        onClick={() => addToCart({ name: 'BREAD SANDWITCH', price: 50 })}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-light"
                                                        style={{ borderRadius: '15px' }}
                                                        disabled
                                                    >
                                                        LOGIN TO ADD CART
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>














                            </div>

                        </div>
                    </div>
{/* Cart Section */}
<div className="cart mt-5 mb-5 p-4 shadow-lg rounded bg-light">
    <h4 className="text-center text-uppercase font-weight-bold mb-4">Your Cart</h4>
    {cart.length > 0 ? (
        <div>
            <ul className="list-group">
                {cart.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="badge badge-primary badge-pill mr-3" style={{color:"GrayText"}} >{item.name} = ₹{item.price}</span>
                   
                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                       
                    </li>
                ))}
            </ul>
            {/* Display Total Amount */}
            <div className="total-amount mt-4 p-3 bg-dark text-white text-center rounded">
                <h5>Total Amount: ₹{totalAmount}</h5>
            </div>
            <button
                type="button"
                className="btn btn-success btn-block mt-4 py-2 font-weight-bold text-uppercase"
                onClick={bookItems}
              
            >
                Book Items
            </button>
        </div>
    ) : (
        <p className="text-center text-muted mt-3">Your cart is empty.</p>
    )}
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






export default Menu;