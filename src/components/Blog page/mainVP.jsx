import "./mainVp.css";
import axios from "axios";

import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';




let MainVP = ()=>{
    const {id} = useParams();
    const [blog,setBlog] = useState({
       
		category: "",
		coverImage: "",
		tag: "",
		mainHeading: "",
		mainSubHeading: "",
		subHeading1: "",
		paragraph1: "",
		img1: "",
		subHeading2: "",
		paragraph2: "",
		img2: "",
		subHeading3: "",
		paragraph3: "",
		img3: "",
    });
let {category,coverImage,tag,mainHeading,mainSubHeading,subHeading1,paragraph1,img1,subHeading2,paragraph2,img2,subHeading3,paragraph3,img3} = blog;








    //
    let loadData = async()=>{
        let foundBlog= await axios.get(`https://kristhomas.onrender.com/user/blogs/id/${id}`);
        
		setBlog(foundBlog.data.specificBlog);
		console.log("BLog",blog);
		 

    }
    useEffect(()=>{
        loadData();
    })
return <div className="main-vp">
	<div className="blog-head">
    <h1 id="blog-heading">{blog.mainHeading}</h1>
	<h3 id="blog-mainSubheading">{blog.mainSubHeading}</h3>
	

	</div>
	<div className="blog-body">
		<h4>{subHeading1}</h4>
		<p>{paragraph1}</p>
		<Image src={img1} fluid id="blog-image" />

	</div>
	<div className="blog-body">
		<h4>{subHeading2}</h4>
		<p>{paragraph2}</p>
		<Image src={img2} fluid id="blog-image" />

	</div>
	<div className="blog-body">
		<h4>{subHeading3}</h4>
		<p>{paragraph3}</p>
		<Image src={img3} fluid id="blog-image" />

	</div>









</div>
}

export default MainVP;