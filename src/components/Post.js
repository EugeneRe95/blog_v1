import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import Background from './Background'

export class Post extends Component {
  render() {
    const post = this.props.posts.find(post => post.path === this.props.globalProps.match.params.id)
    return (
      <div className="post-page">
        <Helmet>
          <meta name="description" content={post.title} />
          <title>{post.title}</title>
        </Helmet>
        <Background title={post.title} />
        <div className="container">
        <div className="post wow animate__animated animate__fadeIn">
        <figure className="main-image">
          <figcaption>
            <p>{post.author.date}</p>
            <p>by {post.author.name}</p>
          </figcaption>
          <img src={post.image} alt="post"/>
        </figure>
        <div className="content">
          {(post.content.map((item, index) => ( 
              (item.type === 'h2') ? <h2 key={index} className={item.class}>{item.text}</h2> : 
              (item.type === 'h3') ? <h3 key={index} className={item.class}>{item.text}</h3> : 
              (item.type === 'h4') ? <h4 key={index} className={item.class}>{item.text}</h4> : 
              //Check if paragraph contains links
              (item.type === 'p') ? (Array.isArray(item.text)) ? 
              <p key={index} className={item.class}>{item.text.map(t=>(
              (t.href) ? <> <a href={t.href}>{t.hrefText}</a> &nbsp;</>: t+ ' '))}</p> 
              : <p key={index} className={item.class}>{item.text}</p> : 
              (item.type === 'ul') ? <ul key={index} className={item.class}>{item.text.map((liText)=>( <li key={liText}>{liText}</li> ))}</ul> : null
              (item.type === 'img') ? <img key={index} src={item.text} alt="post-pic"/> : null
              )
             )
            )
  }
        </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, null)(Post)
