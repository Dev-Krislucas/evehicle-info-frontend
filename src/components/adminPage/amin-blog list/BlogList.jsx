import axios from "axios";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

let BlogList = ()=>{
    const [blogList,setBlogList] = useState([]);
    const {id} = useParams();



    const deleteVehicle =async(id)=>{
        
        await axios.delete(`https://kristhomas.onrender.com/user/blogs/id/${id}`).then(res=>console.log(res.data));
        
        window.location.assign("https://krislucasthomas.netlify.app/admin/seelist");
        loadBlogs();
  
      }

//
let loadBlogs = async()=>{

   let blogs= await axios.get('https://kristhomas.onrender.com/user/blogs/all/allblogs');

    console.log("All Blogs :",blogs.data.allBlogs);
    setBlogList(blogs.data.allBlogs);

}


    useEffect(()=>{
        loadBlogs();
    })

    return <div className="blog-list">

{
blogList.map((d)=>(
    <Card id="card-parent">
                        <Card.Img variant="top" src={d.coverImage} fluid id="fluid-image"/>
                        <Card.Body>
                        <Card.Title>{d.name}</Card.Title>
                        <Button variant="danger" id="action-button" onClick={()=>{deleteVehicle(d._id)}}>Delete</Button>
                        <Link to={`/admin/blog/update/${d._id}`}><Button variant="warning" id="action-button">Update</Button></Link>
                        </Card.Body>
                    </Card> 
))

}
                    

    </div>
}
export default BlogList;