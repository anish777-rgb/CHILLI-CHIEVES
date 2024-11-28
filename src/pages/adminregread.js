import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Adminregread (){

    const [data,setData]=useState([])

    const {id}=useParams()



    useEffect(()=>{


        axios.get("http://localhost:8000/register/" +id)
        .then((response)=>setData(response.data))
        .catch((err)=>(console.log(err)))
    })


    return(

        <div className="bgadminregread" style={{height:"120vh",backgroundColor:"black",display:"grid"}}>

            <div className="container">


                <div className="card  bg-dark shadow-sm" style={{marginTop:"20px"}}>

                 


                    


                    <div className="mb-3 text-black">
                        <h1 style={{color:"white",fontSize:"25px",textAlign:"left"}}>ID:  <strong >{data.id}</strong></h1>
                       
                    </div>


                    <div className="mb-3 text-black">
                        <h1 style={{color:"white",fontSize:"25px",textAlign:"left"}}>FULLNAME:  <strong >{data.fullname}</strong></h1>
                       
                    </div>

                    <div className="mb-3 text-black">
                        <h1 style={{color:"white",fontSize:"25px",textAlign:"left"}}>EMAIL:  <strong >{data.email}</strong></h1>
                       
                    </div>

                    <div className="mb-3 text-black">
                        <h1 style={{color:"white",fontSize:"25px",textAlign:"left"}}>PASSWORD:  <strong >{data.password}</strong></h1>
                       
                    </div>


                    <div className="mb-3">

                        <Link to="/adminregview" className="btn btn-primary">Back</Link>
                    </div>






                </div>






            </div>














        </div>
    )
}

export default Adminregread;