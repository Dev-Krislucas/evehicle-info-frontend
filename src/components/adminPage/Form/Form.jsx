import {useState} from "react";  
import "./Form.css";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {Link} from "react-router-dom";




let Form = ()=>{
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
        await axios.post("https://kristhomas.onrender.com/admin/add",vehicle).then(res=> console.log(res.data)).catch(err =>console.log(err));
        setVehicle({
            name:"",
            price:0,
            range:0,
            vehicleType:"",
            chargingTime:0,
            imgSrc:"",
            company:""
      
        })
    

    }
    return <div className="Form">
        <input type="text" name="name" onChange={handleChange} value={name}  id="input-form" placeholder="Name" autoComplete="off"/>
        <input type="number" name="price" onChange={handleChange} value={price}  id="input-form" placeholder="price"/>
        <input type="number" name="range" onChange={handleChange}  value={range} id="input-form" placeholder="Range"/>
        <input type="text" name="vehicleType" onChange={handleChange} value={vehicleType} id="input-form" placeholder="Vehicle Type (car,bike,scooter) " />
        <input type="number" name="chargingTime" onChange={handleChange} value={chargingTime} id="input-form" placeholder="Charging Time"/>
        <input type="text" name="imgSrc" onChange={handleChange} value={imgSrc} id="input-form" placeholder="Image Src"/>
        <input type="text" name="company" onChange={handleChange} value={company} id="input-form" placeholder="Company name"/>
        <div className="flex-col">
        <Button type="submit" variant="danger" onClick={submitVehicle} id="form-button">Add Vehicle +</Button>
        <Link to="/admin/seelist"><Button type="submit" variant="warning"  id="form-button">See List</Button></Link>
        </div>





    </div>
}


export default Form;