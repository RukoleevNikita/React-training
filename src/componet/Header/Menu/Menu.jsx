import React from 'react';
import classes from './Menu.module.css';

const Menu = () => {
    return (
        <nav>
            <ul className={classes.menu}>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav>
    );
};

export default Menu;