import React from 'react';
import twitter from "../images/icons/twitter.png";
import telegram from "../images/icons/telegram.png";
import instagram from "../images/icons/instagram.png";

function Header() {
    return (
        <header id='App-header'>
          <h1>Andrew Brown</h1>
          <section>
            <a target="_blank" rel="noreferrer" href='http://twitter.com'><img className='App-icon' src={twitter} alt='twitter'/></a>
            <a target="_blank" rel="noreferrer" href='http://telegram.com'><img className='App-icon' src={telegram} alt='twitter'/></a>
            <a target="_blank" rel="noreferrer" href='http://instagram.com'><img className='App-icon' src={instagram} alt='twitter'/></a>
          </section>
        </header>
    );
};

export default Header;