import React from 'react'
import {Helmet} from 'react-helmet'
import {posts} from '../redux/posts'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Background from './Background'

function PopularPosts() {
  return (
    <div id="popular">
      <Helmet>
        <meta name="description" content="Popular posts"/>
        <title>MAS | Popular posts</title>
      </Helmet>
      <Background title="Popular posts"/>
      <div className="container">
        <div className="articles-container">
          {posts.map(item => ((item.popular)
            ? <div className="item wow animate__animated animate__fadeIn" key={item.title}>
                <h3>
                  <Link to={"/posts/" + item.path}>{item.title}</Link>
                </h3>
                <figure className="main-image">
                  <figcaption>
                    <p>{item.author.date}</p>
                    <p>by {item.author.name}</p>
                  </figcaption>
                  <img src={item.image} alt="post"/>
                </figure>
                <div className="content">
                  <p>{item.descrip}</p>
                  <p>
                    <Link className="read-more" to={"/posts/" + item.path}>Read more</Link>
                  </p>
                </div>
              </div>
            : null))}
        </div>
        <aside>
          <h4>Latest Posts</h4>
          <div className="posts">
          {posts.slice(posts.length - 4, posts.length).map(item => (
             <Link className="post" title={item.title} to={"/posts/" + item.path}>
                <div className="content">
                <img src={item.image} alt="post-lates"/>
                <h4>{item.title}</h4>
                </div>
                </Link>))}
          </div>
        </aside>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, null)(PopularPosts)