import React from 'react';
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";
import img4 from "../images/carousel4.jpg";
import img5 from "../images/carousel5.jpg";
import img6 from "../images/carousel6.jpg";
import img7 from "../images/carousel7.jpg";
import img8 from "../images/carousel8.jpg";
import img9 from "../images/carousel9.jpg";
import img10 from "../images/carousel10.jpg";
import img11 from "../images/carousel11.jpg";
import img12 from "../images/carousel12.jpg";

function Galery() {
    return (
        <div id='App-galery'>
            <img className='App-galery-img' src={img1} alt='image1'/>
            <img className='App-galery-img' src={img2} alt='image2'/>
            <img className='App-galery-img' src={img3} alt='image3'/>
            <img className='App-galery-img' src={img4} alt='image4'/>
            <img className='App-galery-img' src={img5} alt='image5'/>
            <img className='App-galery-img' src={img6} alt='image6'/>
            <img className='App-galery-img' src={img7} alt='image7'/>
            <img className='App-galery-img' src={img8} alt='image8'/>
            <img className='App-galery-img' src={img9} alt='image9'/>
            <img className='App-galery-img' src={img10} alt='image10'/>
            <img className='App-galery-img' src={img11} alt='image11'/>
            <img className='App-galery-img' src={img12} alt='image12'/>
        </div>
    );
};

export default Galery;