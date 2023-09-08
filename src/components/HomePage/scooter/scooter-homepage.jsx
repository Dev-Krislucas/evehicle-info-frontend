import axios from "axios"
import { useState,useEffect } from "react";
import "./scooter-homepage.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

let Scooter = ()=>{
    const [scooters,setScooterArray]= useState([]);




    //
    let loadScooters = async()=>{
        let allScooters = await axios.get(`https://kristhomas.onrender.com/admin/get`);
        let unfilteredArray = allScooters.data.vehicles;
        let filteredArray = unfilteredArray.filter((s)=>{
            return s.vehicleType ==='scooter';
        });

        //
        console.log("Unfiltered : ",unfilteredArray);
        console.log("Filtered :",filteredArray);



        //
        setScooterArray(filteredArray);
        
        


    }

    useEffect(()=>{
        loadScooters();
    },[]);

    return <div className="scooter">
        <h3>Most searched scooters</h3>
        <hr style={{color:'#ee1415'}}></hr>
        <div className="flex-row">
       {
        scooters.map(ele=>(
            
            <Card id="details-card">
                 <Card.Img variant="top" src={ele.imgSrc} id="vehicle-img" fluid />
                 <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text id="details-card-price">
                    ₹.{ele.price} - {ele.price+25000}
                    </Card.Text>
                    <Link to={`/user/${ele._id}`}><Button variant="outline-danger" id="details-card-button">View Product Details</Button></Link>
      </Card.Body>
            </Card>
            
        ))
       }
       </div>







    </div>

}

export default Scooter;