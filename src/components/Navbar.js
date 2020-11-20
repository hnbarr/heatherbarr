import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <a className="navbar-brand" href="/Home"></a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navDropdownMenu" aria-controls="navDropdownMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="" id="navDropdownMenu">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/Resume">Resume</a>
                    <a className="nav-item nav-link" href="/About">About</a>
                    </div>
                </div>
            </nav>
        )
    }
}
