import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";
import img4 from "../images/carousel4.jpg";
import img5 from "../images/carousel5.jpg";
import img6 from "../images/carousel6.jpg";

function MyCarousel() {
    return (
        <Carousel className='App-carousel'>
            <div>
                <img src={img1} alt='best works'/>
            </div>
            <div>
                <img src={img2} alt='best works'/>
            </div>
            <div>
                <img src={img3} alt='best works'/>
            </div>
            <div>
                <img src={img4} alt='best works'/>
            </div>
            <div>
                <img src={img5} alt='best works'/>
            </div>
            <div>
                <img src={img6} alt='best works'/>
            </div>
        </Carousel>
    );
};

export default MyCarousel;