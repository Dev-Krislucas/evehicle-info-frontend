import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import "./firstvp.css";
import Button from 'react-bootstrap/Button';



let FirstVP=()=>{
    const {id}=useParams();

    const [vehicle,setVehicle] = useState({
        name:"",
        price:null,
        imgSrc:""

    })

let {name,price,imgSrc}= vehicle;
    ///This happens first
    let loadData =async()=>{
        let foundVehicle = await axios.get(`https://kristhomas.onrender.com/user/${id}`);
        console.log(foundVehicle.data.foundVehicle);
        let {name,price,imgSrc}=foundVehicle.data.foundVehicle;
        setVehicle({
            name,price,imgSrc
        })
    }
    useEffect(()=>{
        loadData();
    },[]);
    return <div className="first-vp">
        <div className="imageDiv">
        <Image src={imgSrc} fluid id="product-page-description" />

            

        </div>
        <div className="textDiv">
            <h2>{name}</h2>
            <h6 id="product-page-description-h6"><span id="colorRed">Rs.</span><span id="font-big"> {price} - {price+25000}*</span></h6>
            <span id="colorGrey"><p>*Ex-showroom price</p></span>
            <Button variant="danger" id="product-page-description-button">View Blogs related to product</Button>

             
        </div>





    </div>
}

export default FirstVP;