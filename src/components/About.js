import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 my-3">
                        <h4 className="py-2"><b>👋  Hey y'all!</b></h4>
                        <p className="mt-2">
                            Nice to meet you, I'm Heather! 
                        </p>
                        <p className="pt-2">
                            I like to go outside, chill with my cats and travel in a van. 🚐
                        </p>
                        <p className="pt-2">
                            ✌️ Austin, TX
                        </p>
                        {/* <ul>
                            <li>Santorini Cafe (North Austin on N Lamar)</li>
                            need to add in new places once I move and take off the below!
                            <li>Smokin' Beauty (North and BBQ! Wooh!) 🙌🏼</li>
                            <li>Radio Coffee & Beer (Sounth Austin on Manchaca)</li>
                            <li>and ... Chuy's becuase I'm a Chuy's Queen 👑</li>
                        </ul> */}
                        <p>
                            {/* add something about how I got into tech, mentino ACA! */}
                        </p>
                        <p>
                            {/* A great friend of mine & I have started a local community volunteer group to feed and provide necessities for people who are in need. 
                            We started this during the fall holiday season in 2020 to provide homecooked Thanksgiving meals for those who may have gone without. After that, 
                            we both wanted to stay consistent in doing more, not only for holidays but for all the time!  */}
                            {/* <br /> */}
                            {/* For more information on our goals and actions, <Link to="www.google.com" className="siteLink" target="_blank">check out our site!</Link> */}
                        </p>
                        {/* <section className="alert alert-warning pt-3">
                            <p className="text-center mt-2">If you would like to connect about your personal or professional journey,
                            <a className="siteLink" href="mailTo:hnbarr94@gmail.com?subject=Reaching out from your site to connect!"><b> click here to reach out</b>&nbsp;</a>and let's talk! I love to hear new stories and meet new people! 
                            </p>
                        </section> */}
                    </div>
                </div>
            </div>
        )
    }
}
