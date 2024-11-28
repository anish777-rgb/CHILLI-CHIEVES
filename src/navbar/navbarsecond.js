import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbarsecond() {

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '24px' }} to="/">ADMIN DASHBOARD</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" style={{color:"white"}} to="adminpage">Home <span className="sr-only">(current)</span></Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link" style={{color:"white"}} to="/reports">Reports</Link>
                    </li>
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
            </div>
        </nav>
    );
}

export default Navbarsecond;
