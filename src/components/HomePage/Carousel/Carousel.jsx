import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";
let CarouselDiv = ()=>{
return(
    <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <div className='carousel-div'>

                <img src="images/carousel-img.png" alt="carousel-image" id='carousel-image' />


            </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className='carousel-div'>
                
        <img src="images/carousel-img.png" alt="carousel-image" id='carousel-image' />
                </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carousel-div'>
        <img src="images/carousel-img.png" alt="carousel-image" id='carousel-image' />

                </div>
        </Carousel.Item>

    </Carousel>
)
    
}

export default CarouselDiv;