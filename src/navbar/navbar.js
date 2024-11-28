import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import brandimg from '../images/brandimg.jpg';
import './navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="brand-name me-2">
            <span className="brand-text" style={{color: "darkred", fontWeight: "bolder"}}>CHILLI</span>
            <span className="brand-text" style={{fontWeight: "bolder"}}> & </span>
            <span className="brand-text" style={{color: "darkgreen", fontWeight: "bolder"}}>CHIVES</span>
          </div>
          <img src={brandimg} style={{height: "80px"}} alt="Brand" className="brand-img ms-2" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact us</Link>
            </li>
            {!username && (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/login">User Login</Link></li>
                  <li><Link className="dropdown-item" to="/minlogin">Admin Login</Link></li>
                </ul>
              </li>
            )}
            {username && (
              <li className='nav-item d-flex   align-items-center'>
                <span className="me-2" style={{paddingLeft:"250px"}}  >
                  Welcome, {username}!
                </span>
                <button onClick={handleLogout} className='btn btn-warning'>
                  Logout
                </button>
              </li>
            )}
          </ul>
          
          {!username && (
             <Link to="/signup" className="btn btn-warning rounded-pill">ORDER NOW</Link>

          )}
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
