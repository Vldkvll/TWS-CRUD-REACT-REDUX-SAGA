import React from 'react'
import classes from './navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.nav}>

            <NavLink to="/Users" activeClassName={classes.active} className={classes.item}>Users List</NavLink>
            <NavLink to="/Add" activeClassName={classes.active} className={classes.item}>Add Users</NavLink>

        </nav>
    )
}

export default Navbar