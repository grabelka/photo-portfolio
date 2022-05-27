import React from 'react';
import twitter from "../images/icons/twitter.png";
import telegram from "../images/icons/telegram.png";
import instagram from "../images/icons/instagram.png";

function Contacts() {
    return (
        <section>
            <p>+38(099)28-33-123</p>
            <p>andrew.brown@gmail.com</p>
            <a target="_blank" rel="noreferrer" href='http://twitter.com'><img className='App-contacts-icon' src={twitter} alt='twitter'/></a>
            <a target="_blank" rel="noreferrer" href='http://telegram.com'><img className='App-contacts-icon' src={telegram} alt='twitter'/></a>
            <a target="_blank" rel="noreferrer" href='http://instagram.com'><img className='App-contacts-icon' src={instagram} alt='twitter'/></a>
            <p>Location:</p>
            <iframe className='App-map' title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81198.03983246851!2d30.526598658203117!3d50.5074028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1a959268ae1%3A0xb3c2d18f0c4ea7e7!2z0YPQuy4g0KLQtdC-0LTQvtGA0LAg0JTRgNCw0LnQt9C10YDQsCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1652380378057!5m2!1sru!2sua" />
        </section>
    );
};

export default Contacts;