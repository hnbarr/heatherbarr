import React, { Component } from 'react'
import twitter from '../images/Untitled.png'

export default class TwitterHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             twitterImg: twitter
        }
    }

    render() {
        return (
            <div className="twitter-header d-flex justify-content-between row my-3">
                <a rel="noreferrer" href="https://twitter.com/hnbarr_" target="_blank" className="col-10">
                    <div className="row">
                        <img src={this.state.twitterImg} className="twitter-image col" alt="profile"/> 
                        <p className="col-7">Heather Barr @hnbarr_</p>
                    </div>
                </a>
                <a rel="noreferrer" href="https://twitter.com/hnbarr_" target="_blank" className="col"><i className="fab fa-twitter"></i></a>
            </div>
        )
    }
}
