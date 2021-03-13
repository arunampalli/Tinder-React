import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
            className="header__logo"
            src="https://icon2.cleanpng.com/20180622/pwy/kisspng-cercanas-bilbao-zorrotza-renfe-operadora-cercan-tinder-5b2d1716c16048.0838255415296816867921.jpg"
            alt=""
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
