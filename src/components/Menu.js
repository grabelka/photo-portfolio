import React from 'react';

function Menu() {
    return (
        <nav className='App-menu'>
            <p><a className='App-link' href='../App.js'>Home</a></p>
            <p>|</p>
            <p><a className='App-link' href='#App-about'>About</a></p>
            <p>|</p>
            <p><a className='App-link' href='#App-galery'>Works</a></p>
            <p>|</p>
            <p><a className='App-link' href='#App-comments'>Comments</a></p>
            <p>|</p>
            <p><a className='App-link' href='#App-book'>Book</a></p>
            <p>|</p>
            <p><a className='App-link' href='#App-contacts'>Contacts</a></p>
        </nav>
    );
};

export default Menu;