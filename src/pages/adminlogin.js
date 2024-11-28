
import React, { useState } from "react";
import './adminlogin.css'
import { useNavigate } from "react-router-dom";

function Adminlogin() {

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[errors,setErrors]=useState({})
    const navigate=useNavigate()


    const handlesubmit=(e)=>{
        e.preventDefault();

        const validationErrors=validate()
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length===0){



            fetch("http://localhost:8000/adminlogin/"+username)

            .then((res)=>res.json())
            .then((resp)=>{

                if(Object.keys(resp).length===0){

                    alert('Please Enter username')
                }  else{

                    if(resp.password===password){

                        alert("Registration Successfully")
                        navigate("/adminpage")
                        localStorage.setItem("username",username)
                        window.location.reload()
                    } else {
                        alert("Enter Valid password")
                    }
                }


            })

            .catch((err)=>{
                console.log(err)
                alert("Please Enter Valid username")
            })




        }
    }



    const validate=()=>{

        let errors={}

        if(!username){errors.username="enter username"}
        if(!password){errors.password="enter password"}

        return errors;
    }



    return (

      


        <div className="adminloginbg">


            <div className="container">

                <div className="row d-flex justify-content-center">


                   


                         

                          


                            <div className="card "  style={{width:"100%",maxWidth:"400px",padding:"20px",marginTop:"50px", backgroundColor: "rgb(0, 0, 0,0.7)" }}>
                            <form onSubmit={handlesubmit}> 
                            <h3  className="text text-white text-center" tyle={{color:"white",marginTop:"30px"}}>ADMIN LOGIN</h3>


                                <div className="mt-5 text-white">

                                <label for="adminnamelabel" style={{textAlign:"left",display:"grid"}}>Username</label>
                                <input type="text" id="adminname" className="form-control" placeholder="Enter username" value={username} onChange={e=>setUsername(e.target.value)}></input>
                                {errors.username && <p className="error">{errors.username}</p>}

                                </div>

                                
                                <div className="mt-5 text-white">
                                <label for="adminpasswordlabel"  style={{textAlign:"left",display:"grid"}}>Password</label>
                                <input type="password" id="adminpassword" className="form-control" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                                {errors.password && <p className="error">{errors.password}</p>}
                                </div>


                                <div className=" mt-5" >
                                <button type="submit" className=" btn btn-warning w-100">LOGIN</button>

                                </div>









                            </form>
                            </div>
                     
                 













                </div>

















            </div>
















        </div>


    )








}


export default Adminlogin;