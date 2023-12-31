import axios from "axios";
import {useState } from "react";
import "./blog-form.css";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";


let BlogForm =()=>{
    const[ blog,setBlog] = useState({
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
    })
    let {category,coverImage,tag,mainHeading,mainSubHeading,subHeading1,paragraph1,img1,subHeading2,paragraph2,img2,subHeading3,paragraph3,img3} = blog;
    let handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setBlog({...blog,[name]:value});
        console.log(blog);
    }
    let submitVehicle = async(e)=>{
        e.preventDefault();
        console.log(blog);
        await axios.post("https://kristhomas.onrender.com/user/blogs",blog).then(res=> console.log(res.data)).catch(err =>console.log(err));
        setBlog({
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
    }

    return <div className="blog-form">
        <input type="text" name="category" onChange={handleChange} value={category}  id="input-form" placeholder="Category (ev-news,vehicle-info)" autoComplete="off"/>
        <input type="text" name="coverImage" onChange={handleChange} value={coverImage}  id="input-form" placeholder="Cover Image"/>
        <input type="text" name="tag" onChange={handleChange}  value={tag} id="input-form" placeholder="Tag"/>
        <input type="text" name="mainHeading" onChange={handleChange} value={mainHeading} id="input-form" placeholder="Main Heading" />
        <input type="text" name="mainSubHeading" onChange={handleChange} value={mainSubHeading} id="input-form" placeholder="Main Subheading"/>
        <input type="text" name="subHeading1" onChange={handleChange} value={subHeading1} id="input-form" placeholder="Subheading 1"/>
        <input type="text" name="paragraph1" onChange={handleChange} value={paragraph1} id="input-form-lg" placeholder="Paragraph 1"/>
        <input type="text" name="img1" onChange={handleChange} value={img1}  id="input-form" placeholder="Image 1" autoComplete="off"/>
        <input type="text" name="subHeading2" onChange={handleChange} value={subHeading2}  id="input-form" placeholder="Sub Heading 2"/>
        <input type="text" name="paragraph2" onChange={handleChange}  value={paragraph2} id="input-form-lg" placeholder="PAragraph 2"/>
        <input type="text" name="img2" onChange={handleChange} value={img2} id="input-form" placeholder="Image 2" />
        <input type="text" name="subHeading3" onChange={handleChange} value={subHeading3} id="input-form" placeholder="SubHeading 3"/>
        <input type="text" name="paragraph3" onChange={handleChange} value={paragraph3} id="input-form-lg" placeholder="Paragraph 3"/>
        <input type="text" name="img3" onChange={handleChange} value={img3} id="input-form" placeholder="Image 3"/>
        <Button type="submit" variant="danger" onClick={submitVehicle} id="form-button">Add Blog +</Button>
        <Link to ="/admin/blogs/allblogs"><Button id="form-button">View Blog List</Button></Link>


    </div>
}

export default BlogForm