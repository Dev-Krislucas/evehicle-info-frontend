import axios from "axios";
import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./blogs-by-tag.css";
import {Link} from "react-router-dom";







//

let BlogsByTag = ()=>{
    const {tag} = useParams();
    const [blogList,setBlogList] = useState([]);









// // 
    let loadBlogs = async()=>{
        
        let filteredByTag  = await axios.get(`https://kristhomas.onrender.com/user/blogs/${tag}`);
        
        setBlogList(filteredByTag.data.blog);
        console.log("By tag : " , );

    }
    
    useEffect(()=>{
        loadBlogs();
    },[])   //SInce we are operating on an array , pasing an empty arraya s parameter
    
    return <div className="blogsByTag">
        {
            blogList.map((blog)=>(
                <div className="blogCard">   
                <Card>
                    <Card.Img src={blog.coverImage} fluid id="blog-by-tag-img"></Card.Img>
                    <Card.Body>
                       <Card.Title>{blog.mainHeading}</Card.Title>
                       <Link to={`/user/blogs/id/${blog._id}`}><Button variant="outline-danger" id ="blogs-by-tag-button">Read full blog</Button></Link>

                    </Card.Body>
                </Card>
                                                                           
                    
                    
                    
                    
                    
                    </div>

            ))
        }
        





    </div>
}

export default BlogsByTag;