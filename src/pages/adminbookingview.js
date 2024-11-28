import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Adminbookingview(){


    const[data,setData]=useState([]);
    const navigate=useNavigate()

 


    useEffect(()=>{

        axios.get("http://localhost:8000/booking")
        .then((response)=>setData(response.data))
        .catch((err)=>console.log(err))
    },[]);


    const handleDelete=(id)=>{

        const confirm=window.confirm("would you like to delete this data")

        if (confirm){

            axios.delete("http://localhost:8000/booking/" +id)
            .then((res)=>{
               navigate("/adminbookingview")
               window.location.reload()
            })

            .catch((err)=>{
                console.log(err)
            })
        }





    }

  

    return(

        <div className="adminviewbg" style={{backgroundColor:"black",height:"120vh",display:"grid"}}>



          <div className="container mt-5">
            <div className="table-responsive">
                <table className="table table-bordered table-dark">

                    <thead>

                        <tr>

                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE NUMBER</th>
                            <th>BOOKING DATE</th>
                            <th>BOOKING TIME</th>
                            <th>NUMBER OF ADULTS</th>
                            <th>NUMBER OF CHILDS</th>
                            <th>ACTIONS</th>
                            





                        </tr>






                    </thead>


                    <tbody>

                        {data.map((d,i)=>(


                             <tr key={i}>

                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phonenumber}</td>
                                <td>{d.bookingdate}</td>
                                <td>{d.time}</td>
                                <td>{d.numberofadults}</td>
                                <td>{d.numberofchild}</td>
                                <td>
                                    <Link to={`/adminbookingedit/${d.id}`}  className="btn btn-success btn-sm w-100 rounded-pill">EDIT</Link><br></br>
                                    <button type="button" onClick={()=>handleDelete(d.id)} className="btn btn-danger btn-sm w-100 rounded-pill ">DELETE</button><br></br>
                                  <Link  className="btn btn-secondary btn-sm w-100 rounded-pill " to={`/adminbookingread/${d.id}`}  >READ</Link><br></br>
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


export default Adminbookingview;