import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class NavTabs extends Component {
// d-none d-md-block
    render() {
        return (
            <ul className="nav nav-tabs navtabs d-flex p-0 d-print-none">
                <li className="nav-item mx-3 active">
                    <NavLink className="nav-link" activeClassName="active" to="/Home">Home</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink className="nav-link" activeClassName="active" to="/About">About</NavLink>
                </li>
                <li className="nav-item mx-3">
                    <NavLink className="nav-link" activeClassName="active" to="/Resume">History</NavLink>
                </li>
            </ul>
        )
    }
}
