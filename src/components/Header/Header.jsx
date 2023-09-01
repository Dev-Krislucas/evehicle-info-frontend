// import logo from "images/logo.jpg";
//Importiing image in html style from (read from directory public/....)
import "./header.css";
let Header =()=>{
    return(
        <div className="header_container">
            <div className="header_logo">
            <img src="images/logo.jpg" id="logo" alt="logo"></img>

            </div>
        <div className="headerLinks">
            <a href="#">E Bikes</a>
            <a href="#">E Scooter</a>
            <a href="#">4 Wheelers</a>

        </div>



        </div>
    )
}

export default Header;