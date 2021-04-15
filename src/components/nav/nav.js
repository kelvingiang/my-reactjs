import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul id="menu">
                    <li><NavLink activeClassName='menu-active' to='/'>home sss</NavLink></li>
                    <li><NavLink activeClassName='menu-active' to='/about'> about us gg</NavLink></li>
                    <li><NavLink activeClassName='menu-active' to='/contact'>contact us</NavLink></li>
                    <li><NavLink activeClassName='menu-active' to='/product'>product</NavLink></li>
                    <li><NavLink activeClassName='menu-active' to='/member'>member</NavLink></li>
                    <li><NavLink activeClassName='menu-active' to='/memberaxios'>member axios</NavLink></li>
                    <li><NavLink activeClassName='menu-active' to='/memberlimit'>member limit</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;