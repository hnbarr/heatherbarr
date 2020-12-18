import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class NavTabs extends Component {
// d-none d-md-block
    render() {
        return (
            <ul className="nav nav-tabs navtabs d-flex p-0 d-print-none">
                <li className="nav-item ml-1 active">
                    <NavLink className="nav-link" activeClassName="active" to="/Home">Home</NavLink>
                </li>
                <li className="nav-item mx-1">
                    <NavLink className="nav-link" activeClassName="active" to="/About">About</NavLink>
                </li>
                <li className="nav-item mx-1">
                    <NavLink className="nav-link" activeClassName="active" to="/History">History</NavLink>
                </li>
                <li className="nav-item mr-1">
                    <NavLink className="nav-link d-none d-md-block" activeClassName="active" to="/Stories">Stories</NavLink>
                </li>
            </ul>
        )
    }
}
