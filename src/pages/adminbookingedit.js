import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Adminedit() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phonenumber: "",
        bookingdate: "",
        time: "",
        numberofadults: "",
        numberofchild: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/booking/" + id)
            .then((response) => setValues(response.data))
            .catch(err => console.log(err));
    }, [id]);  // Add id in dependency array

    const handleupdate = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/booking/" + id, values)
            .then((response) => {
                console.log(response);
                navigate('/adminbookingview');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="admineditbg" style={{ height: "140vh", display: "grid",backgroundColor:"black" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card" style={{ width: "100%", maxWidth: "600px", marginTop: "50px", paddingLeft: "50px", paddingRight: "50px",backgroundColor:"ivory"}}>
                        <h1 style={{color:"black",textShadow:"4px 4px 8px grey",letterSpacing:"2px",marginBottom:"20px"}}>UPDATE A USER</h1>
                        <form onSubmit={handleupdate}>
                            <div className="mb-3">
                                <label htmlFor="adminname" style={{ textAlign: "left", display: "grid" }}>NAME</label>
                                <input type="text" name="name" className="form-control" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adminphonenumber" style={{ textAlign: "left", display: "grid" }}>PHONE NUMBER</label>
                                <input type="text" name="phonenumber" className="form-control" value={values.phonenumber} onChange={e => setValues({ ...values, phonenumber: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adminemail" style={{ textAlign: "left", display: "grid" }}>EMAIL</label>
                                <input type="text" name="email" className="form-control" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adminbookingdate" style={{ textAlign: "left", display: "grid" }}>BOOKING DATE</label>
                                <input type="text" name="bookingdate" className="form-control" value={values.bookingdate} onChange={e => setValues({ ...values, bookingdate: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="admintime" style={{ textAlign: "left", display: "grid" }}>BOOKING TIME</label>
                                <input type="text" name="time" className="form-control" value={values.time} onChange={e => setValues({ ...values, time: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adminnumberofadults" style={{ textAlign: "left", display: "grid" }}>NUMBER OF ADULTS</label>
                                <input type="text" name="numberofadults" className="form-control" value={values.numberofadults} onChange={e => setValues({ ...values, numberofadults: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="adminnumberofchild" style={{ textAlign: "left", display: "grid" }}>NUMBER OF CHILDREN</label>
                                <input type="text" name="numberofchild" className="form-control" value={values.numberofchild} onChange={e => setValues({ ...values, numberofchild: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-sm btn-primary rounded-pill">Update</button>
                                <Link to="/adminbookingview" className="btn btn-sm btn-success rounded-pill">Back</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adminedit;
