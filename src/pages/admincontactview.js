import React, { useEffect, useState } from "react";
import Admincartview from "./admincartview";
import axios from "axios";
import { Link } from "react-router-dom";



function Admincontactview(){



    const[data,setData]=useState([])


    useEffect(()=>{

        axios.get("http://localhost:8000/contact")
        .then((response)=>setData(response.data))
        .catch((err)=>console.log(err))



    })


    return(

        <div className="bgadmincontact" style={{height:"120vh",display:"grid"}}>



            <div className="table-responsive">

                <table className="table table-bordered bg-dark">


                    <thead>


                        <tr>

                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>MESSAGE</th>
                        






                        </tr>










                    </thead>


                    <tbody>

                        {data.map((d,i)=>(


                       <tr key={i}>


                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.msg}</td>
                     







                       </tr>






                        ))}






                    </tbody>












                </table>










            </div>











        </div>



    )






}


export default Admincontactview;