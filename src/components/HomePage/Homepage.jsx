import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CarouselDiv from "./Carousel/Carousel";
import Scooter from "./scooter/scooter-homepage";
import Bikes from "./bike/Bikes";
import Car from "./car/Car";

let Homepage =()=>{
    return<>
    <Header/>
    <CarouselDiv/>
    <Scooter />
    <Bikes/>
    <Car/>


    <Footer />
    
    </>
}

export default Homepage;