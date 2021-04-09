import React from 'react';
import bLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={bLogo} alt="MyBurger" />
    </div>
)
 
export default logo;