import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 my-3">
                        <h4><b>Hey y'all!</b></h4>
                        <p>
                            👋 Nice to meet you, I'm Heather! 
                        </p>
                        <p>
                            🌵 Moved to Austin back in 2016 from ETX (East Texas) and never looked back! Austin is <b>my city</b> and if you're not 
                            here now, consider a visit! Hit me up for some foodie and activity suggestions when you arrive! Some of my fav food/coffe spots are: 
                        </p>
                        <ul>
                            <li>Santorini Cafe (North Austin on N Lamar)</li>
                            <li>Radio Coffee & Beer (Sounth Austin on Manchaca)</li>
                            <li>and ... Chuy's becuase I'm a Chuy's Queen 👑</li>
                        </ul>
                        <p>
                            My journey has been a bit all over the place, but I wouldn't change it for anything! I'm all for taking risks and trying new things, 
                            and would recomend everyone to do that as well! You never know where life can take you, if you give it a chance. I've been able to 
                            meet, work with, struggle with and win-big with so many incredible people! These people and moments being the sugar and spice of who I am today! 
                        </p>
                        <p>
                            🌳 In my natural habitat, you can find in my home spending time with my fur babies - two lovely kitties, writing, cooking OR 
                            outside hiking somewhere, seeing new places in the world & getting involved with my community. 
                        </p>
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
                        <section className="alert alert-warning">
                            <p className="text-center">If you would like to connect about your personal or professional journey,
                            <a className="siteLink" href="mailTo:hnbarr94@gmail.com?subject=Reaching out from your site to connect!"><b> click here to reach out</b>&nbsp;</a>and let's talk! I love to hear new stories and meet new people! 
                            </p>
                        </section>
                        <p>
                            👀 I'm currently trying to learn to play guitar and how to speak Italian, so if you'd like to connect about either of these, I definitely would as well! 
                            Let's hold each other accountable this year annd get those skills up! 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
