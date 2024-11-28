import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Adminregview(){


    const[data,setData]=useState([])
   


    useEffect(()=>{

        axios.get("http://localhost:8000/register")

        .then((response)=>setData(response.data))
        .catch((err)=>console.log(err))
    },[])


    const handleDelete=(id)=>{


       const confirm=window.confirm("would you like to delete this data?")



        if(confirm){

       axios.delete("http://localhost:8000/register/" + id)
       .then((res)=>{
        console.log(res)
        window.location.reload()

       })


        }



    }


    return(



        <div className="bgadminreg" style={{height:"120vh",display:"grid"}}>

            <div className=" container mt-5">



                <div className="table-responsive">
                    <table className="table table-bordered table-dark text-white">


                        <thead>

                            <tr>


                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                                <th>ACTIONS</th>




                            </tr>








                        </thead>


                        <tbody>

                            {data.map((d,i)=>(


                               <tr key={i}>


                                <td>{d.id}</td>
                                <td>{d.fullname}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                                <td>

                                    <Link to={`/adminregread/${d.id}`} className="btn btn-primary mb-2 btn-sm w-50">READ</Link><br></br>
                                    <button type="button" onClick={()=>handleDelete(d.id)} className="btn btn-danger mb-2 btn-sm w-50">DELETE</button><br></br>
                                    <Link to={`/adminregedit/${d.id}`}  className="btn btn-warning mb-2 btn-sm w-50">EDIT</Link>

                                </td>









                               </tr>












                            ))}













                        </tbody>















                    </table>
















                </div>
























            </div>



















        </div>



    )
}


export default Adminregview;