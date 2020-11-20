import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="col-12 d-md-none">
                <nav className="navbar navbar-expand-lg navbar-light d-md-none">
                    <a className="navbar-brand" href="/Home"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navDropdownMenu" aria-controls="navDropdownMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navDropdownMenu">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/Resume">Resume</a>
                        <a className="nav-item nav-link" href="/About">About</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
