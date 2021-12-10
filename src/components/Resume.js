import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeatherBarrResume from '../images/HeatherBarrResume.pdf'


export default class Resume extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 my-3">
                        <section className="alert alert-warning text-center">
                            <p>The following is a in depth view of my previous roles. I love to tell my story and would enjoy if you looked it over! However, if you're only interested in my actual resume, click to 
                            <Link className="siteLink" to={HeatherBarrResume} target="_blank" download> <b>download my resume!</b></Link></p>
                        </section>
                        <h5>BigCommerce</h5>
                        <div>
                            <span><b>Developer Community Moderator</b>&nbsp;<small><i>2020-Current</i></small></span>
                            <div className="px-2">
                                {/* <p>
                                    To brag about my company a bit, BigCommerce is disrupting the e-commerce industry as the SaaS 
                                    leader for fast- growing, mid-market businesses. We enable our customers to build 
                                    intuitive and engaging stores to support every stage of their growth!
                                </p> */}
                                <p>
                                    As the Developer Community Moderator @ BigCommerce, my place on our team is in-between Community & DevRel.
                                    So this gives me a bit of insight into both sides of BigCommerce, being merchants and developers that are members of our community.
                                    Just like other members within our community, I'm a person that developers and partners can talk to about errors or problems 
                                    they may come across with their development! In addition to that, I work alongside our Developer Advocates to bring developer feedback back to our Product teams.
                                    I also create content for our Developer Blog on Medium, in addition to hosting and moderating webinar events.
                                    Overall, my purpose and goal is to ensure that the developer spaces are thriving, engaging, and a positive place for developers and partners to gather. 
                                </p>
                                <p className="px-2">
                                    Accomplishments;
                                </p>
                                <ul>
                                    <li>Developed and maintained a community program which has since then been adopted on the Community + DevRel teams.</li>
                                </ul>
                                {/* <ul>
                                    <li> Successfully sourced, porposed and groomed the process to solidify additional support and enghagement from internal and extrenal resources for two seperate community audiences. This not only was to address an apparent opportunity in our Community for expanded engagement, and support but also to provide bandwidth relief to the Community Team for future program development. </li>
                                </ul> */}
                            </div>
                        </div>
                        <hr />
                        <h5>Clarity Ventures</h5>
                        <div>
                            <span><b>Jr. Front End Developer</b>&nbsp;<small><i>2019-2020 (1 year)</i></small></span>
                            <p className="px-2">
                                Leading by example in content creation for new & current employees by uploading company stack overflow questions & answers, as well as creating internal documentation, training videos & teams wiki updates.
                                Completing front end tickets on/ahead of time and being known as the most communicative developer within my team to our PMs on concerns, needs, successes and requirements/possible risks on change requests, especially when new.
                                Started communications and actionable items within my company on internal pain points, and being a voice for my teammates. Being a key member in the action of adopting a recognition program into the company, to help nurture the company culture.
                                Always providing impactful feedback in sprint retros and within communications
                                Company Stack: AngularJS, C#. Product: In-house E-commerce software & CMS(DNN).
                                Workflows through Azure sprints, utilizing scrum practices, completing front end related tickets, logging time, communicating with fellow devs, PMs, and management daily.
                            </p>
                        </div>
                        <hr />
                        <h5>Visa</h5>
                        <div>
                            <span><b>Client Services Representative - CSR</b>&nbsp;<small><i>2018 (8 months)</i></small></span>
                            <p className="px-2">
                                Providing phone support to cardholders nationwide. Working in multiple programs and applications to find solutions and resolve problems for cardholders. Only three months after initial on boarding training, I was able to train for other products to assist with additional card programs. Visa has a wonderful environment, which is something that I will definitely seek in all future career moves. I then went to serve tables while in school to become a developer.
                            </p>
                        </div>
                        <hr />
                        <h5>Yodle / Web.com</h5>
                        <div>
                            <span><b>Sales Representative</b>&nbsp;<small><i>2017 (1 year)</i></small></span>
                            <p className="px-2">
                            What an experience, I learned so much from my time here! This was the most challenging job I've had to date, but with that comes the most rewarding! The first few months were very difficult for me, however I carried on and pushed myself until I gained success. After my fourth month, I shot to the top of the charts. I was consistent since then, every pay period finishing over goal. Hard work definitely pays off. My journey started as an entry level sales representative for a product called "Essentials" for Yodle, which I pushed through until finding success.                             
                            </p>
                            <p className="px-2">
                            Accomplishments for Yodle;
                            </p>
                                <ul>
                                    <li>#1 Sales Rep. June in Essentials Sales.</li>
                                    <li>#1 Sales Rep. July in Essentials Sales.</li>
                                </ul>
                            <p className="px-2">
                            After my success with Yodle, Web.com acquired the company and led me to being one of 7 reps in a Sales Lab for a new Web.com product. While in this sales lab, I lead the team in deals and carried us to our goals. The position I had at Yodle and Web.com played a major part in who I am today.
                            </p>
                            <p className="px-2">
                            Accomplishments for Web.com;
                            </p>
                                <ul>
                                    <li>#1 Sales Rep. Web.com sales lab for 2 months</li>
                                </ul>
                        </div>
                        <hr />
                        <h5>Times Square Vape Lab (T.S.V.L LLC)</h5>
                        <div><span><b>Retail Sales Member</b>&nbsp;<small><i>2013-2014 (9 months)</i></small></span>
                            <p className="px-2"> 
                            Looking back now, this was one of my all time favorite jobs I've ever had. I had the opportunity to start this company alongside the two owners, brothers, as the first employee and what an experience! Some everyday tasks included but are not limited to; Handled incoming foot traffic into the store front, being an industry expert and making custom juice mixes for them, repaired devices, preformed builds for clients, keeping record of all attempts and products made to maintain consistency for customers.
                            We didn't really know what we were getting into at first, then we all fell in love with the process. From setting up the business legally, making our own juices, ordering hardware, picking a location and setting up the business. All times during this journey was very hands on and all about development and growth! We started as a local vape shop/lounge supporting local consumers & hobbyists that had a growing online presence and at the end of our first year in business, we were going to conventions to booth up!    
                            </p> 
                        </div>
                        <div><span><b>Store Manager</b>&nbsp;<small><i>2014 - 2016 (15 months)</i></small></span>
                            <p className="px-2">
                                As we grew, more employees became necessary. So the owners hired and I assisted with on the job training for our new team members on top of all duties from prior role. Some everyday tasks included but are not limited to; Maintained online orders, shipping and receiving, maintained stock levels, and assisted the owners with orders, keeping up to date with legal sections of the industry to prepare for our next step and to have the knowledge for our staff and customers.
                            </p>
                        </div>
                        <div><span><b>Premium Product Creator</b>&nbsp;<small><i>2014 - 2016 (15 months)</i></small></span>
                            <p className="px-2">
                                One of my favorite accomplishments and life moments was creating a premium juice line alongside my partner, one of the business owners. Being an artist and partner in this process, I was able to get exposure to selling, mass-producing, packaging, shipping, delivering, and promoting our product natiowide as well as being the managing voice and face for our brand on social media platforms. This was a very influenfial moment and role for me, I loved working with a local artist to design bottle lables and traveling for the brand as well as securing labeling and botteling partners.
                            </p>
                        </div>
                        <div><span><b>Wholesale Assistant</b>&nbsp;<small><i>2014 - 2016 (15 months)</i></small></span>
                            <p className="px-2">
                                Becoming the US Distributor for a well known preformance hardware supplier in the industry definitely helped our growth. Some everyday tasks included but are not limited to; Maintained wholesale orders, maintained relationships with the manufacturer & our distribution clients, assisting the owners in landing new wholesale accounts, kept log of communications, inventory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
