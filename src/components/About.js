import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 my-3">
                        <h4> Hey y'all!</h4>
                        <p>
                            Nice to meet you, I'm Heather! I am a small-town-East-Texas girl who moved to Austin back in 2016 on a whim to find success and opportunity. 
                            I absolutely love it here in Austin and found that I reached my goal in finding the industry that aligns with my personality and desires.
                        </p>
                        <p>
                            My journey has been a bit all over the place, but I wouldn't change it for anything. I'm all for taking risks and trying new things, 
                            and would recomend everyone to do that as well! You never know where life can take you, if you give it a chance.
                        </p>
                        <p>
                            Some of my favorite places to be are in my home with my fur babies, writing, cooking or trying to learn guitar, or outside 
                            hiking somewhere, getting involved with my community or seeing new places in the world. 
                        </p>
                        <p>
                            A great friend of mine & I have started a local community volunteer group to feed and provide necessities for people who are in need. 
                            We started this during the fall holiday season in 2020 to provide homecooked Thanksgiving meals for those who may have gone without. After that, 
                            we both wanted to stay consistent in doing more, not only for holidays but for all the time! 
                            {/* <br /> */}
                            {/* For more information on our goals and actions, <Link to="www.google.com" className="siteLink" target="_blank">check out our site!</Link> */}
                        </p>
                        <hr />
                        <section className="alert alert-warning">
                            <p className="text-center">If you would like to connect about your personal or professional journey or help us with our community volunteer work, 
                            &nbsp;<a className="siteLink" href="mailTo:hnbarr94@gmail.com?subject=Reaching out from your site to connect!"><b>reach out and let's talk</b></a>! I love to hear new stories and meet new people & we can always use some help! 
                            </p>
                            {/* <hr /> */}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
