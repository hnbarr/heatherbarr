import React, { Component } from 'react'

export default class Media extends Component {
    // todo: turn twitter feed into dynamic pull from twitter api or json data in app
    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hnbarr')
        .then((res) => res.json())
        .then((data) => {
        // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
        const res = data.items //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
    
        // Functions to create a short text out of whole blog's content
        function toText(node) {
            let tag = document.createElement('div')
            tag.innerHTML = node
            node = tag.innerText
            return node
        }
        function shortenText(text,startingPoint ,maxLength) {
            return text.length > maxLength?
            text.slice(startingPoint, maxLength):
            text
        }
    
        // TODO: Convert to repeat in div below!
        let output = '';
        posts.forEach((item) => {
            output += `
            <li class="blog__post">
                <a href="${item.link}" target="_blank">
                    <img src="${item.thumbnail}" class="blog__topImg"></img>
                    <div class="blog__content">
                    <div class="blog_preview">
                        <h2 class="blog__title">${shortenText(item.title, 0, 30)+ '...'}</h2>
                        <p class="blog__intro">${'...' + shortenText(toText(item.content),60, 300)+ '...'}</p>
                    </div>
                    <hr>
                    <div class="blog__info">
                        <span class="blog__author">${item.author}</span>
                        <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>
                    </div>
                    </div>
                <a/>
            </li>`
            })
            document.querySelector('.blog__slider').innerHTML = output
        })
    }


    render() {
        return (
            <section id="blog" className="blog">
                <div className="blog__header">
                    <h2 className="blog__header2">Medium</h2>
                </div>
                <ul className="blog__slider"></ul>
            </section>
        )
    }
}
