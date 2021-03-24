import React, { Component } from 'react';
// import TwitterHeader from './TwitterHeader'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h4 className="col-12 my-3">
                        <b>I'm passionate about creating inclusive environments everywhere I go!</b> 
                    </h4>
                    <div className="col-12">
                        <p>
                            To work alongside a great team that communicates openly, shares thoughts and values is and will always 
                            be the ultimate career goal for me. I love building relationships with my peers as well as contributing to acheive any and all goals. 
                            I believe in people-first everything and live by that message daily. 
                        </p>
                    </div>
                    <div className="col-12 text-center">
                        <div className="container" id="MediaComponent">
                            <div className="row">
                                {/* <div className="col-12 col-lg-6 my-1">
                                    <blockquote className="twitter-tweet p-3">
                                        <TwitterHeader/>
                                        <p className="twitter-body" lang="en" dir="ltr">
                                            I’m so thankful and happy to share that I am now the Developer Community Moderator at <a href="https://twitter.com/BigCommerce?ref_src=twsrc%5Etfw">@BigCommerce</a>! 
                                            I’m so excited for this opportunity and can’t wait to meet the <a href="https://twitter.com/BigCommerceDevs?ref_src=twsrc%5Etfw">@BigCommerceDevs</a> Community. 
                                            <a href="https://twitter.com/hashtag/BCPartners?src=hash&amp;ref_src=twsrc%5Etfw">#BCPartners</a> and devs, please reach out with any questions about our APIs, SDKs, docs! ✌🏼
                                        </p>
                                    </blockquote>
                                </div> */}
                            
                                {/* <div className="col-12 my-1 justify-content-center">
                                    <span><h6>Most things community, and some things not. 😋</h6><a className="siteLink" href="https://discord.gg/YCC7ttuTfE">Join here!</a></span>
                                    <br/>
                                    <iframe src="https://discordapp.com/widget?id=819721635468673035&theme=dark" width="350" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>                                
                                </div> */}
                                
                                {/* <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
                            </div>
                            {/* <div className="row">
                                <div className="col-12 col-md-6 my-1">
                                    <blockquote className="twitter-tweet p-3">
                                        <p className="twitter-body" lang="en" dir="ltr">
                                            create medium card here!
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="col-12 col-md-6 my-1">
                                    <blockquote className="twitter-tweet p-3">
                                        <p className="twitter-body" lang="en" dir="ltr">
                                            create sky podcast preview card here!
                                        </p>
                                    </blockquote>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
