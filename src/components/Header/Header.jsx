// import logo from "images/logo.jpg";
//Importiing image in html style from (read from directory public/....)
import "./header.css";
import {Link} from "react-router-dom";
let Header =()=>{
    return(
        <div className="header_container">
            <div className="header_logo">
            <img src="images/logo.jpg" id="logo" alt="logo"></img>

            </div>
        <div className="headerLinks">
            <a href="#">E Bikes</a>
            <a href="#">E Scooter</a>
            <Link to ="/admin">Admin</Link>

        </div>



        </div>
    )
}

export default Header;