import React from 'react';
import twitter from "../images/icons/twitter.png";
import telegram from "../images/icons/telegram.png";
import instagram from "../images/icons/instagram.png";
import user from "../images/icons/user.png";

function Header() {
    return (
        <header id='App-header'>
          <h1>Andrew Brown</h1>
          <section>
            <a href='http://twitter.com'><img className='App-icon' src={twitter} alt='twitter'/></a>
            <a href='http://telegram.com'><img className='App-icon' src={telegram} alt='twitter'/></a>
            <a href='http://instagram.com'><img className='App-icon' src={instagram} alt='twitter'/></a>
            <img className='App-icon' src={user} alt='user'/>
          </section>
        </header>
    );
};

export default Header;