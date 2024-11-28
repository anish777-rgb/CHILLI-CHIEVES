import axios from "axios";
import React, { useEffect, useState } from "react";



function Admincartview(){


    const [data,setData]=useState([])


    useEffect(()=>{


        axios.get("http://localhost:8000/cart")

        .then((response)=>setData(response.data))
        .catch((err)=>console.log(err))
    })

    return(


        <div className="bgcart" style={{backgroundColor:"black",height:"120vh",display:"grid"}}>



            <div className="container mt-5">


            <div className="table-responsive">
                


                <table className="table table-bordered">


                    <thead>

                        <tr>

                            <th>USERNAME</th>
                            <th>ITEMS</th>
                            <th>TOTAL price</th>




                        </tr>



                    </thead>

                    <tbody>

                    {data.map((cart, i) => (
                            <React.Fragment key={i}>
                                {cart.cartItems.map((item, j) => (
                                    <tr key={j}>
                                        {j === 0 && (
                                            <td rowSpan={cart.cartItems.length}>
                                                {cart.username}
                                            </td>
                                        )}
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2" className="text-right">
                                        <strong>Total:</strong>
                                    </td>
                                    <td><strong>₹{cart.totalAmount}</strong></td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>





                  

















                </table>













            </div>














        </div>

        </div>

    )
}



export default Admincartview;