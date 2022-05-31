import React from 'react';
import portrait from "../images/portrait.jpg";

function About() {
    return (
        <div>
          <img className='App-portrait' src={portrait} alt='Andrew Brown'/>
          <p className='App-about-text'>Photographer Andrew Brown began his photography project “Streetstyle with amazing pictures” in 2020. For this project, he takes photographs of men and women in a wide range of scenarios. His aim is to take pictures of people just as they are: “Minimalist portraits, without the fanfare.” You can find all the essential information, without your attention being drawn away from the project itself. The clean and structured layout of the powerful portraits in the gallery helps them make the biggest impact.</p>
          <p className='App-about-text'>The minimalistic, striking images of the streets do the work themselves. In addition, the understated style of the website underlines the story these fascinating photos have to tell. Andrew wants to capture real, unadorned, and raw life in his pictures. The photographer lets you appreciate the imposing images as a whole. As simple as it is brilliant.</p>
        </div>
    );
};

export default About