import React, { Component } from 'react'

export default class Media extends Component {
constructor(props) {
    super(props)

    this.state = {
         link: '',
         title: '', 
         thumbnail: '',
         content: '',
         author: '',
         pubDate: ''
    }
}


    // todo: turn twitter feed into dynamic pull from twitter api or json data in app
    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hnbarr')
        .then((res) => res.json())
        .then((data) => {
        const res = data.items 
        const posts = res.filter(item => item.categories.length > 0)
    
        // Functions to create a short text out of whole blog's content
        // toText = (node) => {
        //     let tag = document.createElement('div')
        //     tag.innerHTML = node
        //     node = tag.innerText
        //     return node
        // }


        // shortenText = (text, startingPoint, maxLength) => {
        //     return text.length > maxLength? text.slice(startingPoint, maxLength): text
        // }
    
        // TODO: Convert to repeat in div below, look at Standup for inspo!
        // TODO: Add functionality to only display 4 articles at a time
        // TODO: Add cool shuffler to randomize order/preivew
        // let output = '';
            posts.forEach((item) => {
                this.setState({
                    link: item.link,
                    title: item.title, 
                    thumbnail: item.thumbnail,
                    content: item.content,
                    author: item.author,
                    pubDate: item.pubDate
                })
            //     output += `
            //     <li class="blog__post">
            //         <a href="${item.link}" target="_blank">
            //             <img src="${item.thumbnail}" class="blog__topImg"></img>
            //             <div class="blog__content">
            //             <div class="blog_preview">
            //                 <h2 class="blog__title">${shortenText(item.title, 0, 30)+ '...'}</h2>
            //                 <p class="blog__intro">${'...' + shortenText(toText(item.content),60, 300)+ '...'}</p>
            //             </div>
            //             <hr>
            //             <div class="blog__info">
            //                 <span class="blog__author">${item.author}</span>
            //                 <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>
            //             </div>
            //             </div>
            //         <a/>
            //     </li>`
                })
            // document.querySelector('.blog__slider').innerHTML = output
        })
    }


    render() {
        return (
            <div id="blog" className="blog">
                <ul className="blog__slider my-3">
                    <li className="blog__post">
                        <a href={this.state.link}>
                            <img alt={this.state.title} src={this.state.thumbnail} className="blog__topImg"></img>
                            <div className="blog__content">
                                <div className="blog_preview">
                                    <h2 className="blog__title">{this.state.title+ '...'}</h2>
                                    <p className="blog__intro">{this.state.content}</p>
                                </div>
                                <hr />
                                <div className="blog__info">
                                    <span className="blog__author">{this.state.author}</span>
                                    <span className="blog__date">{this.state.pubDate}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
