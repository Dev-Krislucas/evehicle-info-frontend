import "./redstrip.css";
import axios from "axios";

import { useEffect,useState } from "react";




let RedStrip= ()=>{
    // const [latest,setLatest] = useState({
    //     mainHeading:''
    // });


    // //
    // let loadData = async()=>{
    //     let data = await axios.get('https://kristhomas.onrender.com/user/blogs/all/allblogs');
        
    //     setLatest(data.data.allBlogs.reverse()[0]);
    //     console.log("red strip: ",data.data.allBlogs.reverse()[0].mainHeading);
    // }


    // useEffect(()=>{
    //     loadData();
    //     },[]);
    return <div className="red-strip">
        <h6> <marquee width="100%" direction="right" height="100px"><span id="boldandbig"></span><span id="notbig"></span></marquee></h6>



    </div>
}


export default RedStrip;