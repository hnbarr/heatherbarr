import React, { Component } from 'react'
import TwitterHeader from './TwitterHeader'

export default class Media extends Component {
    // todo: turn twitter feed into dynamic pull from twitter api or json data in app
    render() {
        return (
            <div className="container-fluid" id="MediaComponent">
                <div className="row">
                    <div className="col-12 my-3">
                        <blockquote className="twitter-tweet p-3">
                            <TwitterHeader/>
                            <p className="twitter-body" lang="en" dir="ltr">
                                I’m so thankful and happy to share that I am now the Developer Community Moderator at <a href="https://twitter.com/BigCommerce?ref_src=twsrc%5Etfw">@BigCommerce</a>! 
                                I’m so excited for this opportunity and can’t wait to meet the <a href="https://twitter.com/BigCommerceDevs?ref_src=twsrc%5Etfw">@BigCommerceDevs</a> Community. 
                                <a href="https://twitter.com/hashtag/BCPartners?src=hash&amp;ref_src=twsrc%5Etfw">#BCPartners</a> and devs, please reach out with any questions about our APIs, SDKs, docs! ✌🏼
                            </p>
                        </blockquote>
                    </div>
                    {/* <div className="col-12 my-3">
                        Podcast Preview?
                    </div> */}
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
            </div>
        )
    }
}
