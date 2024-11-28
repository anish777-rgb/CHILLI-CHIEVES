import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function Adminread(){


    const [data,setData]=useState([])

    const {id}=useParams();




    useEffect(()=>{


        axios.get("http://localhost:8000/booking/"+ id)

        .then((response)=>setData(response.data))

        .catch((err)=>console.log(err))
    })

      



    return(



        <div className="bgadminread" style={{backgroundColor:"white",height:"140vh",display:"grid"}}>



            <div className="container   ">

                <div className="card shadow-sm " style={{marginTop:"200px",textAlign:"left",paddingLeft:"20px"}}>


                <div className="mb-3">
                    


                    <h11>NAME:</h11>
                    <strong style={{color:"GrayText",textTransform:"uppercase"}}>{data.name}</strong>





                </div>



                <div className="mb-3">
                    


                    <h11>EMAIL:</h11>
                    <strong style={{color:"GrayText",textTransform:"uppercase"}}>{data.email}</strong>





                </div>

                <div className="mb-3">
                    


                    <h11>PHONE NUMBER:</h11>
                    <strong style={{color:"GrayText",textTransform:"uppercase"}}>{data.phonenumber}</strong>





                </div>

                <div className="mb-3">
                    


                    <h11>BOOKING DATE:</h11>
                    <strong style={{color:"GrayText",textTransform:"uppercase"}}>{data.bookingdate}</strong>





                </div>



                <div className="mb-3">
                    


                    <h11>BOOKING TIME:</h11>
                    <strong style={{color:"GrayText",textTransform:"uppercase"}}>{data.time}</strong>





                </div>



                <div className="mb-3">
                    


                    <h11>NUMBER OF ADULTS:</h11>
                    <strong style={{color:"GrayText",textTransform:"uppercase"}}>{data.numberofadults}</strong>





                </div>



                <div className="mb-3">
                    


                    <h11>NUMBER OF CHILDS:</h11>
                    <strong style={{color:"GrayText",textTransform:"uppercase"}}>{data.numberofchild}</strong>





                </div>


             

























            </div>

            </div>






        </div>
    )
}



export default Adminread;