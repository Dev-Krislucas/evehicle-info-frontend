import {useState} from "react";  

import Button from 'react-bootstrap/Button';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import { useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";




let EditVehicle = ()=>{
    const {id} = useParams();
    const [vehicle,setVehicle]= useState({
      name:"",
      price:null,
      range:null,
      vehicleType:"",
      chargingTime:null,
      imgSrc:"",
      company:""


    })
    //Destructuring the object
    let {name,price,range,vehicleType,chargingTime,imgSrc,company}=vehicle;
    let handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setVehicle({...vehicle,[name]:value});
        console.log(vehicle);
    }
    let submitVehicle = async(e)=>{
        e.preventDefault();
        console.log(vehicle);
        await axios.patch(`https://kristhomas.onrender.com/admin/update/${id}`,vehicle).then(res=> console.log(res.data)).catch(err =>console.log(err));
        setVehicle({
            name:"",
            price:null,
            range:null,
            vehicleType:"",
            chargingTime:null,
            imgSrc:"",
            company:""
      
        });
        console.log("Vehicle updated");
    

    };
    //This is what happens first 
    let loadData = async()=>{
        let foundVehicle = await axios.get(`https://kristhomas.onrender.com/user/${id}`);
        // console.log(foundVehicle.data.foundVehicle);
        setVehicle(foundVehicle.data.foundVehicle);
      
    }
    useEffect(()=>{
        loadData();
    },[]);
    return (
    <>
    <Header />
    <div className="Form">
        <input type="text" name="name" onChange={handleChange} value={name}  id="input-form" placeholder="Name" autoComplete="off"/>
        <input type="number" name="price" onChange={handleChange} value={price}  id="input-form" placeholder="price"/>
        <input type="number" name="range" onChange={handleChange}  value={range} id="input-form" placeholder="Range"/>
        <input type="text" name="vehicleType" onChange={handleChange} value={vehicleType} id="input-form" placeholder="Vehicle Type (car,bike,scooter) " />
        <input type="number" name="chargingTime" onChange={handleChange} value={chargingTime} id="input-form" placeholder="Charging Time"/>
        <input type="text" name="imgSrc" onChange={handleChange} value={imgSrc} id="input-form" placeholder="Image Src"/>
        <input type="text" name="company" onChange={handleChange} value={company} id="input-form" placeholder="Company name"/>
        <div className="flex-col">
        <Button type="submit" variant="danger" onClick={submitVehicle} id="form-button">Update Vehicle +</Button>
        <Link to="/admin/seelist"><Button type="submit" variant="warning"  id="form-button">See List</Button></Link>
        </div>





    </div>
    <Footer/>
    </>
)}


export default EditVehicle;