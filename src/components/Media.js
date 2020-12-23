import React, { Component } from 'react'

export default class Media extends Component {
constructor(props) {
    super(props)

    this.state = {
        posts: []
    }
}
    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hnbarr')
        .then((res) => res.json())
        .then((data) => {
        const res = data.items 

        this.setState({
            posts: [...res]
        })
        console.log('posts: ', this.state.posts)
        })
    }

    // Functions to create a short text out of whole blog's content
    toText = (node) => {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
    }


    shortenText = (text, startingPoint, maxLength) => {
        return text.length > maxLength? text.slice(startingPoint, maxLength): text
    }

    render() {
        return (
            <div id="blog" className="blog">
                <div className="blog__slider my-3 row m-0 w-100">
                    {this.state.posts.map((post, i)=>{
                        return (
                            <div key={i} className="blog__post col-10 col-md-8 col-xl-5 my-3">
                                <a href={post.link}>
                                    <div className="text-center">
                                        <img alt={post.title} src={post.thumbnail} className="blog__topImg"></img>
                                        <h2 className="blog__title">{post.title+ '...'}</h2>
                                    </div>
                                    <div className="blog__content">
                                        <div className="blog_preview">
                                            <p className="blog__intro">{this.shortenText(this.toText(post.description), 0, 100)}</p>
                                        </div>
                                        <hr />
                                        <div className="blog__info mb-2">
                                            <span className="blog__author">{post.author}</span>
                                            <span className="blog__date">{post.pubDate}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}