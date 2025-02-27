import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div className="navBar">
            <div className="navItems">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/all-employees">Employees</NavLink>
                <NavLink to="/all-clients">Clients</NavLink>
                <NavLink to="/all-engagements">Engagements</NavLink>
            </div>
        </div>
    )
}

export default NavBar
