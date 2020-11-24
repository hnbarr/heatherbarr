import React, { Component } from 'react'
import GreyScaleSM from '../images/IMG_1505.png'
import ZionSm from '../images/IMG_0046.png'
import OasisSm from '../images/IMG_1813.png'
import CatsSM from '../images/IMG_3423.png'
import NolaSm from '../images/IMG_2575.png'
import ZionLg from '../images/IMG_0046.jpeg'
import NolaLg from '../images/IMG_2575.jpeg'


export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [OasisSm, ZionSm, GreyScaleSM, CatsSM, NolaSm], 
            mobileImages: [ZionLg, NolaLg],
            activeImage: OasisSm,
            mobileImage: ZionLg
        }
    }
    
    imageToggler = () => {
        this.setState({
            activeImage: this.state.images[Math.floor(Math.random() * Math.floor(this.state.images.length))]
        })
    }

    render() {
        return (
            <div className="container h-100" id="contact">
                <div className="d-none d-sm-block my-md-5"> 
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-6 col-md-12 text-center my-3" id="imageHolder" >
                            <img src={this.state.activeImage} id="desktopContactImage" alt="profile"/> 
                            <div className="overlay"><i className="fas fa-sync-alt" onClick={this.imageToggler}></i></div>                    
                        </div>
                        <div className="col-6 col-md-12 text-center contactContent">
                            <h3>Heather Barr</h3>
                            <p>[ she / her ]</p>
                            <div>
                                <h6>Commnuity Moderator @ BigCommerce</h6>
                                <p>Developer, Adventurer, Artist, Cook, Cat-Mom, Friend, Daughter</p>
                            </div>
                            <div className="d-flex justify-content-between w-50" id="socialLinks">
                                <a rel="external" href="https://www.linkedin.com/in/hnbarr/"><i className="fab fa-linkedin-in"></i></a>
                                <a rel="external" href="https://angel.co/u/hnbarr"><i className="fab fa-angellist"></i></a>
                                <a rel="external" href="https://github.com/hnbarr"><i className="fab fa-github"></i></a>
                                <a rel="external" href="https://twitter.com/hnbarr_"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-sm-none">
                    <div className="col-12 my-3 p-4 text-center mobileContactContent">
                        <h3>Heather Barr</h3>
                        <p>[ she / her ]</p>
                        <div>
                            <h6>Commnuity Moderator @ BigCommerce</h6>
                            <p>Developer, Adventurer, Artist, Cook, Cat-Mom, Friend, Daughter</p>
                        </div>
                        <div className="d-flex justify-content-between w-90" id="socialLinks">
                            <a rel="external" href="https://www.linkedin.com/in/hnbarr/"><i className="fab fa-linkedin-in"></i></a>
                            <a rel="external" href="https://angel.co/u/hnbarr"><i className="fab fa-angellist"></i></a>
                            <a rel="external" href="https://github.com/hnbarr"><i className="fab fa-github"></i></a>
                            <a rel="external" href="https://twitter.com/hnbarr_"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
