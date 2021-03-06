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
            posts: res
        })
        // console.log('posts: ', this.state.posts)
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
            <div id="blog" className="blog container">
                <div className="blog__slider my-3 row m-0 d-flex justify-content-center">
                    {this.state.posts.slice(0,3).map((post, i)=>{
                        return (
                            <div key={i} className="blog__post col m-4 m-sm-3 m-md-2">
                                <a href={post.link}>
                                    <div className="text-center my-2">
                                        <img alt={post.title} src={post.thumbnail} className="blog__topImg"></img>
                                        <h2 className="blog__title">{this.shortenText(this.toText(post.title), 0, 25)+ '...'}</h2>
                                    </div>
                                    <div className="blog__content">
                                        <div className="blog_preview">
                                            <p className="blog__intro">{this.shortenText(this.toText(post.description), 0, 150)+ '...'}</p>
                                        </div>
                                        <hr />
                                        <div className="blog__info mb-2">
                                            {/* <span className="blog__author">{post.author}</span> */}
                                            <span className="blog__date">{post.pubDate.slice(0, 10)}</span>
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