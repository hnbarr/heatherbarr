import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class NavTabs extends Component {
// d-none d-md-block
    render() {
        return (
            <ul className="nav nav-tabs navtabs d-flex p-0 d-print-none">
                <li className="nav-item ml-2 active">
                    <NavLink className="nav-link" activeClassName="active" to="/Home">Home</NavLink>
                </li>
                <li className="nav-item mx-1">
                    <NavLink className="nav-link" activeClassName="active" to="/About">About</NavLink>
                </li>
                <li className="nav-item mx-1">
                    <NavLink className="nav-link" activeClassName="active" to="/History">History</NavLink>
                </li>
                <li className="nav-item mr-2 d-none">
                    <NavLink className="nav-link" activeClassName="active" to="/Media">Media</NavLink>
                </li>
            </ul>
        )
    }
}
