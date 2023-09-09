import "./redstrip.css";
import axios from "axios";

import { useEffect,useState } from "react";




let RedStrip= ()=>{
    const [latest,setLatest] = useState({
        mainHeading:""
    })


    //
    let loadData = async()=>{
        let data = await axios.get('https://kristhomas.onrender.com/user/blogs/all/allblogs');
        
        setLatest(data.data.allBlogs.reverse()[0].mainHeading);
        console.log("red strip: ",latest);
    }


    useEffect(()=>{
        loadData();
        },[]);
    return <div className="red-strip">
        <h6> <marquee width="100%" direction="right" height="100px"><span id="boldandbig">Latest: </span><span id="notbig">{latest}</span></marquee></h6>



    </div>
}


export default RedStrip;