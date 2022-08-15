import React, { useEffect, useState ,setStatus} from "react";
import {useHistory,Link,NavLink} from "react-router-dom";
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./navigation";
import NavigationLogin from "./Navigation2";
const axios = require('axios').default;
//import { keys } from "@material-ui/core/styles/createBreakpoints";


const MyRide = () =>
{
    const history = useHistory();
    const[ads,getAds] = useState([]);
    const getUser = async () => {
        try{
       const response = await fetch('/myRide',{
           method:"GET",
           headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
           },
           credentials: "include"
                });
              

       const data = await response.json();
       console.log("=============ads");
       console.log(data);
       getAds(data);

       if(!response.status===200)
       {
           const error = new Error(response.error);
           throw error;
       }
            }catch(err) 
            {
                console.log(err);
                history.push('/login');
            }
    }

    const upDateRide = (id) => {

        const newDeparture = prompt("Enter the New Orign");
        axios.put( '/update', 
       {id:id, newDeparture:newDeparture }); 

    };

    const deleteRide = async(id)=> {
     fetch(`/delete/${id}`,{
         method:'DELETE'
     }).then(()=>{
        getUser(
          ads.filter((item)=>{
              return item._id !== id;
          })
        )
      })
       
    }
    useEffect(() =>{
        getUser();
        deleteRide();
        //upDateRide();
    },[]);
   return(
    <div className="header">
  <NavigationLogin/>
       <div className="App">
           
               {ads.map((item)=>
                <div className = "col-10 col-md-4 mt-5" key={item.id}>
                <div className="card p-2">
        <div className="d-flex align-items-center">
        <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{item.loginName}</h4>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div> <span>Leaving from</span> <span className="number2">{item.departure}</span> </div>
                    <div> <span>Destination</span> <span className="number3">{item.destination}</span> </div>
                    <div> <span>Registration</span> <span className="number1">{item.registration}</span> </div>
                </div>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div> <span>Leaving from</span> <span className="number2">{item.date}</span> </div>
                    <div> <span>Destination</span> <span className="number3">{item.time}</span> </div>
                    <div> <span>Registration</span> <span className="number1">{item.number}</span> </div>
                </div>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div> <span>Leaving from</span> <span className="number2">{item.color}</span> </div>
                    <div> <span>Destination</span> <span className="number3">{item.meetupPoint}</span> </div>
                    <div> <span>Registration</span> <span className="number1">{item.charges}</span> </div>
                </div>
                <div className="button mt-2 d-flex flex-row align-items-center"><button className="btn btn-sm btn-success w-100 ml-2" 
                onClick={()=>{
                    upDateRide(item._id);
                   }}>Edit</button>
                   <button className="btn btn-sm btn-danger w-100 ml-2" 
                onClick={()=>{
                    deleteRide(item._id);
                   }}
                   >Delete</button> 
                    </div>
                     
               
              
           </div>
           </div>
           </div>
           </div>
            )}
       </div>
       </div>
   )
}
export default MyRide;