import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div className="navBar">
            <div className="navItems">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/all-employees">Employees</NavLink>
                <NavLink to="/all-clients">Clients</NavLink>
                <NavLink to="/engagements">Engagements</NavLink>
            </div>
        </div>
    )
}

export default NavBar
