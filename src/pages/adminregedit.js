
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Adminregedit() {


    const[values,setvalues]=useState({id:"",fullname:"",email:"",password:""})
    const {id}=useParams()
    const navigate=useNavigate()


    useEffect(()=>{
        axios.get("http://localhost:8000/register/" +id)
        .then((response)=>setvalues(response.data))
    },[id])



    const  handleupdate=(e)=>{

        e.preventDefault()

        axios.put("http://localhost:8000/register/" + id,values)
        navigate('/adminregview')
    }

    return (



        <div className="bgadminregread" style={{ height: "120vh", backgroundColor: "black", display: "grid" }}>


            <div className="container ">

                <div className="row justify-content-center">


                <div className="card" style={{ backgroundColor: "white",maxWidth:"400px" ,paddingLeft:"20px",paddingRight:"20px"}}>


                    <form onSubmit={handleupdate}>


                        <div className="mb-3">


                            <label for="regid" >ID</label>
                            <input type="text" name="id" className="form-control" value={values.id} onChange={e => setvalues({ ...values, id: e.target.value })} />





                        </div>

                        <div className="mb-3">


                            <label for="regname" >NAME</label>
                            <input type="text" className="form-control"  name="fullname" value={values.fullname} onChange={e => setvalues({ ...values, fullname: e.target.value })} />





                        </div>


                        <div className="mb-3">


                            <label for="regemail" >EMAIL</label>
                            <input type="text" name="email" className="form-control" value={values.email} onChange={e => setvalues({ ...values,email: e.target.value })} />





                        </div>


                        <div className="mb-3">


                            <label for="regpassword" >PASSWORD</label>
                            <input type="text" name="password" className="form-control" value={values.password} onChange={e => setvalues({ ...values, password: e.target.value })} />





                        </div>


                        <div className="mb-3">


                            <button type="submit" className="btn btn-primary btn-sm ">Update</button>



                        </div>










                    </form>


                    </div>












                </div>
















            </div>














        </div>

    )
}


export default Adminregedit;

