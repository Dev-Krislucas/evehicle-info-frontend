import axios from "axios";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./thirdvp.css";

import { useState,useEffect } from "react";




let ThirdVp = ()=>{
    const {id} = useParams();

    const [companyList,setCompanyList] = useState([]);








    //
    let loadData=async()=>{
        let array = await axios.get("https://kristhomas.onrender.com/admin/get");
        let onPageProduct = await axios.get(`https://kristhomas.onrender.com/user/${id}`);
        let company = onPageProduct.data.foundVehicle.company;

        let unFilteredArray = array.data.vehicles;

        let filteredArray = unFilteredArray.filter((vehicle)=>{
            return vehicle.company === company;
        
        })
        let superFilteredArray = filteredArray.filter((vehicle)=>{
            return vehicle._id !== onPageProduct.data.foundVehicle._id;
        })
        // for(let vehicle in unFilteredArray){
        //     console.log("Company :",unFilteredArray[vehicle].company);
        // }
        console.log("ON page product id :" ,onPageProduct.data.foundVehicle._id);
        console.log("Super Filtered Array",superFilteredArray);
        // console.log("Onpage product " , onPageProduct.data.foundVehicle.company);

        setCompanyList(superFilteredArray);




    }
    
    useEffect(()=>{
        loadData();
    },[]);


    return <div className="ThirdVp">
        <h3>By same manufacturer</h3>
        <hr style={{color:"#ee1415"}}/>
        <div className="similar-match-div">
       {
        companyList.map(vehicle=>(
            <Card className="similar-match-card">
                <Card.Img src={vehicle.imgSrc} id="similar-match-image" fluid></Card.Img>
                <Card.Body className="similar-match-card-body">
                    <Card.Title>{vehicle.name}</Card.Title>
                    <Card.Text id="similar-match-card-price">
                    ₹.{vehicle.price} - {Number(vehicle.price)+25000}
                    </Card.Text>
                    <Link to={`/user/${vehicle._id}`}><Button variant="outline-danger" id="similar-match-button">View Product Details</Button></Link>
      </Card.Body>



            </Card>
        ))
       }
       </div>


    </div>
}


export default ThirdVp;