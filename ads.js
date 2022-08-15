import React, { useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import NavigationLogin from "./Navigation2";
import './search.css';


const Ads = () =>{
    const history = useHistory();
    const[ads,getAds] = useState([]);
    const [search ,setSearch] = useState('');
    const [searcha,setSearcha] = useState('');
    const [date , setDate] = useState('');
    const getUser = async () => {
        try{
       const response = await fetch('/rideDetails',{
           method:"GET",
           headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
           },
           credentials: "include"
        });
       getAds( await response.json());

       const data = await response.body;
       console.log("=============ads");
       console.log(data);

       if(response.status!==200)
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
    useEffect(() =>{
        getUser();
    },[]);
    return (
        <div className="header">
     <NavigationLogin/>
        <div>
        <div className="s01">
      <form>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <input id="search" type="text" placeholder="Orign"
             onChange={event => {setSearch(event.target.value)}} />
          </div>
          <div className="input-field second-wrap">
            <input id="location" type="text" placeholder="Destination"
            onChange={event => {setSearcha(event.target.value)}} />
          </div>
          <div className="input-field second-wrap">
            <input id="location" type="date" placeholder="Destination"
            onChange={event => {setDate(event.target.value)}} />
          </div>
        </div>
      </form>
    </div>  
        <div className="container mt-5 ">
    <div className="row text-center">
        {   ads.filter((val)=>{
            if(search === "" && searcha === "" && date === "") 
            {
                return val;
            }
            else if(val.departure.toLowerCase().includes(search.toLowerCase())&&val.destination.toLowerCase().includes(searcha.toLowerCase())
            &&val.date.toLowerCase().includes(date.toLowerCase()))
            {
               return val;
            }
        }).map((element)=>{
            return(
               
                <div className = "col-10 col-md-4 mt-5" key={element.id}>
                    <div className="card p-2">
            <div className="d-flex align-items-center">
            <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0">{element.loginName}</h4>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div> <span>Leaving from:</span> <span className="number2">{element.departure}</span> </div>
                    <div> <span>Destination:</span> <span className="number3">{element.destination}</span> </div>
                    <div> <span>Registration:</span> <span className="number1">{element.registration}</span> </div>
                </div>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div> <span>Date</span> <span className="number2">{element.date}</span> </div>
                    <div> <span>Time:</span> <span className="number3">{element.time}</span> </div>
                    <div> <span>number:</span> <span className="number1">{element.number}</span> </div>
                </div>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div> <span>Color:</span> <span className="number2">{element.color}</span> </div>
                    <div> <span>meetUp Point:</span> <span className="number3">{element.meetupPoint}</span> </div>
                    <div> <span>charges:</span> <span className="number1">{element.charges}</span> </div>
                </div>
                <div className="button mt-2 d-flex flex-row align-items-center"><button className="btn btn-sm btn-success w-100 ml-2">Request</button> </div>

            </div>
        </div>
        </div>
        </div>
            )

        })
            
        }
        
    </div>
</div>
</div>
</div>
       );
}
export default Ads;