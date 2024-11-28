import React from "react"
import { Link } from "react-router-dom";




function Adminpage() {



    return (






        <div className="bgadmin" style={{ height: "120vh", display: "grid" }}>















            <div className="container mt-4">
                <h1 className="text-center">Welcome to the Admin Dashboard</h1>

                <div className="row mt-5">
                    {/* Users Card */}
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Users</div>
                            <div className="card-body">
                                <h5 className="card-title">Manage Users</h5>
                                <p className="card-text">View, edit, and manage all users in the system.</p>
                                <Link to="/adminregview" className="btn btn-light">Go to Users</Link>
                            </div>
                        </div>
                    </div>

                    {/*BOOKING DETAILS*/}
                    <div className="col-md-4">
                        <div className="card text-white bg-success mb-3">
                            <div className="card-header">Booking Details</div>
                            <div className="card-body">
                                <h5 className="card-title">View Reports</h5>
                                <p className="card-text">Generate and view various system reports.</p>
                                <Link to="/adminbookingview" className="btn btn-light">Go to Reports</Link>
                            </div>
                        </div>
                    </div>



                    {/*cart details*/}

                    <div className="col-md-4">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header">Cart Details</div>
                            <div className="card-body">
                                <h5 className="card-title">View Reports</h5>
                                <p className="card-text">Generate and view various system reports.</p>
              
                                <Link to="/admincartview" className="btn btn-light">View Details</Link>
                                </div>
                        </div>
                    </div>




                    <div className="col-md-4">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header">Contact</div>
                            <div className="card-body">
                                <h5 className="card-title">View contact</h5>
                                <p className="card-text">Generate and view various system reports.</p>
              
                                <Link to="/admincontactview" className="btn btn-light">View Details</Link>
                                </div>
                        </div>
                    </div>
                     
                     



























                </div>








            </div>

        </div>
    )
}


export default Adminpage;