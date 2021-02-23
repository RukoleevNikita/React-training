import React from 'react';
import logo from './img/logo.jpg';
import Menu from './Menu/Menu';
import Registration from './Registration/Registration';
import PersonalAccount from './PersonalAccount/PersonalAccount';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            {/* <div className={classes.logo}><img src={logo} alt="logo" /></div> */}
            <Menu />
            <div className={classes.personal}>
                <Registration />
                <PersonalAccount />
            </div>
        </header>
    );
};

export default Header;