import React, { Component } from 'react'
import ProfileSm from '../images/Untitled.png'
import OasisSm from '../images/IMG_1813.png'
import CatsSM from '../images/IMG_3423.png'
import NolaSm from '../images/IMG_2575.png'

export default class TwitterHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             twitterImg: ProfileSm,
             images: [OasisSm, CatsSM, NolaSm, ProfileSm]
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
