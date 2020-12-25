import React from 'react'
import {NavLink} from 'react-router-dom'
const Header=()=>(
    <header>
        <h1>Expense Tracker</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home  page  </NavLink>
        <NavLink to="/add" activeClassName="is-active">Expense  page  </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help  page  </NavLink>
        
    </header>   
);
export default Header
