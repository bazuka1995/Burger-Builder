import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Past Orders</NavigationItem>
        <NavigationItem link="/auth">Login/Register</NavigationItem>
    </ul>
);

export default navigationItems;