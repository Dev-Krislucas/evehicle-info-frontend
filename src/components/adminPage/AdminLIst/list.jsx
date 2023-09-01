import axios from "axios";
import { useEffect ,useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./list.css";
import {Link} from "react-router-dom";


let List = ()=>{
    
    const [data,setData]=useState([]);
    useEffect(()=>{
        loadData();
    },[]);
   
    let loadData  =async()=>{
        let information = await axios.get("https://kristhomas.onrender.com/admin/get");
        setData(information.data.vehicles.reverse());
       
        

    }
    const deleteVehicle =async(id)=>{
        
        await axios.delete(`https://kristhomas.onrender.com/admin/delete/${id}`).then(res=>console.log(res.data));
        
        window.location.assign("http://localhost:3000/admin/seelist");
        loadData();
  
      }
    

    return(
        <div className="List">
            {
                data.map(d=>(
                    <Card id="card-parent">
                        <Card.Img variant="top" src={d.imgSrc} fluid id="fluid-image"/>
                        <Card.Body>
                        <Card.Title>{d.name}</Card.Title>
                        <Button variant="danger" id="action-button" onClick={()=>{deleteVehicle(d._id)}}>Delete</Button>
                        <Link to={`/admin/update/${d._id}`}><Button variant="warning" id="action-button">Update</Button></Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
  
    
}

export default List;