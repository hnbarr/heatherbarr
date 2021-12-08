import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <a className="navbar-brand" href="/Home"></a>
                <div className="" id="navDropdownMenu">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/History">Resume</a>
                    <a className="nav-item nav-link" href="/About">About</a>
                    <a className="nav-item nav-link" href="/Stories">Stories</a>
                    {/* <a className="nav-item nav-link" href="/MyVan">Van 🚐</a> */}
                    </div>
                </div>
            </nav>
        )
    }
}
