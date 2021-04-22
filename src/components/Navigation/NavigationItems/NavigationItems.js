import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Past Orders</NavigationItem>
        { !props.isAuth 
            ? <NavigationItem link="/auth">Login/Register</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem> }
    </ul>
);

export default navigationItems;