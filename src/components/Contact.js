import React, { Component } from 'react'
import IMG_1505 from '../images/IMG_1505.png'
import IMG_0046 from '../images/IMG_0046.png'
import IMG_1813 from '../images/IMG_1813.png'
import IMG_3423 from '../images/IMG_3423.png'
import IMG_2575 from '../images/IMG_2575.png'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [IMG_1813, IMG_0046, IMG_1505, IMG_3423, IMG_2575], 
            activeImage: IMG_1813
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
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-6 col-md-12 text-center my-3" id="imageHolder" >
                        <img src={this.state.activeImage} id="contactImage" alt="profile"/> 
                        <div className="overlay"><i className="fas fa-sync-alt" onClick={this.imageToggler}></i></div>                    
                    </div>
                    <div className="col-6 col-md-12 text-center">
                        <div>
                            <h3>Heather Barr</h3>
                        </div>
                        <div>
                            <h6>Commnuity Moderator @ BigCommerce</h6>
                            <p>Developer, Adventurer, Artist, Cook, Cat-Mom</p>
                        </div>
                        <div>
                            social links
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
