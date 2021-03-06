import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap'
import './Header.css'

const Header = () => {
    return (
        <div>
           <nav className='navigation'>
            <a href="">Home</a>
           <a href="">Today</a>
           <a href="">Top News</a>
           <a href="">This Week</a>
           </nav>
        </div>
    );
};

export default Header;