import Table from "react-bootstrap/Table";
import {useState,useEffect} from "react";
import "./second-vp.css";

import axios from "axios";
import {useParams} from "react-router-dom";
let SalientFeatures = ()=>{
    const {id}=useParams();

    const [vehicle,setVehicle] = useState({
        range:0,
        chargingTime:0,
        company:"",
        price:0
        

        

    })

let {range,chargingTime,company,price}= vehicle;
    ///This happens first
    let loadData =async()=>{
        let foundVehicle = await axios.get(`https://kristhomas.onrender.com/user/${id}`);
        console.log(foundVehicle.data.foundVehicle);
        let {range,chargingTime,company,price}=foundVehicle.data.foundVehicle;
        setVehicle({
            range,chargingTime,company,price
        })
    }
    useEffect(()=>{
        loadData();
    },[]);
    return <div className="salientFeatures">
        <h3>Salient Features</h3>
        <hr style={{color:'#ee1415'}}></hr>
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td><span id="table-red-text">range:</span> <span id="table-value">{range} Kms</span></td>
                    <td><span id="table-red-text">price:</span><span id="table-value">{price}</span></td>

                </tr>
                <tr>
                    <td><span id="table-red-text">charging time :</span> <span id="table-value">{chargingTime} hrs</span></td>
                    <td><span id="table-red-text">company:</span><span id="table-value">{company}</span></td>
                    
                </tr>
                <tr>
                    <td><span id="table-red-text">subsidy:</span> <span id="table-value">Available</span></td>
                    <td><span id="table-red-text">0-100 in :</span><span id="table-value">4 hrs</span></td>
                    
                </tr>





            </tbody>
            



</Table>





    </div>
}


export default SalientFeatures;