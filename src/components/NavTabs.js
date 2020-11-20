import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class NavTabs extends Component {

    render() {
        return (
            <div className="d-none d-md-block">
                <ul className="navtabs d-flex">
                    <li className="nav-item mx-3 active">
                        <NavLink className="nav-link" activeClassName="active" to="/Home">Home</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" activeClassName="active" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" activeClassName="active" to="/Resume">Resume</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
