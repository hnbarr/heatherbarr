import React, { Component } from 'react'
// import GreyScaleSM from '../images/IMG_1505.png'
// import ZionSm from '../images/IMG_0046.png'
// import ProfileSm from '../images/Untitled.png'
// import OasisSm from '../images/IMG_1813.png'
// import CatsSM from '../images/IMG_3423.png'
// import NolaSm from '../images/IMG_2575.png'
// import ZionLg from '../images/IMG_0046.jpeg'
// import NolaLg from '../images/IMG_2575.jpeg'
import AZ from '../images/AZ.png'
// import Yellow from '../images/lofi_yellow.PNG'
// import Patches from '../images/lofi_patches.PNG'
import Laughing from '../images/mobileAZ.jpeg'


export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            roundImages: [],
            // [OasisSm, ZionSm, GreyScaleSM, CatsSM, NolaSm, ProfileSm ],
            mobileImages: [],
            // ZionLg, NolaLg],
            roundImage: AZ,
            mobileImage: Laughing
        }
    }
    
    // imageToggler = () => {
    //     this.setState({
    //         roundImage: this.state.roundImages[Math.floor(Math.random() * Math.floor(this.state.roundImages.length))]
    //     })
    // }

    render() {
        return (
            <div className="container h-90" id="contact">
                <div className="d-none d-md-block my-md-4"> 
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-6 col-md-12 text-center d-flex justify-content-center my-3" onClick={this.imageToggler} id="imageHolder" >
                            <img src={this.state.roundImage} id="desktopContactImage" alt="profile"/> 
                            {/* <div className="overlay"><i className="fas fa-sync-alt"></i></div>                     */}
                        </div>
                        <div className="col-6 col-md-12 text-center contactContent">
                            <h3>Heather Barr</h3>
                            <p>[ she / her ]</p>
                            <div>
                                <h6>Developer Community Manager @ BigCommerce</h6>
                                <p>Developer, Adventurer, Artist, Cook, Cat-Mom, Daughter, Friend</p>
                            </div>
                            <div className="d-flex justify-content-between w-50 px-2" id="socialLinks">
                                {/* <a rel="external" href="https://github.com/hnbarr"><i className="fab fa-github"></i></a> */}
                                <a rel="external" href="https://www.instagram.com/heatherrbarr/"><i className="fab fa-instagram"></i></a>
                                <a rel="external" href="https://twitter.com/hnbarr_"><i className="fab fa-twitter"></i></a>
                                <a rel="external" href="https://angel.co/u/hnbarr"><i className="fab fa-angellist"></i></a>
                                <a rel="external" href="https://www.linkedin.com/in/hnbarr/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-md-none mobileContact p-2 d-flex-row align-items-center">
                    <div className="col-10 offset-1 d-flex-row align-items-center justify-content-center text-center content p-2">
                        <h3 className="mt-1">Heather Barr</h3>
                        <p>[ she / her ]</p>
                        <div>
                            <h6>Developer Community Moderator @ BigCommerce</h6>
                            <p>Developer, Adventurer, Artist, Cook, Cat-Mom</p>
                        </div>
                        <div className="d-flex justify-content-between w-90 px-2" id="socialLinks">
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
