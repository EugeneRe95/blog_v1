import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Background from './Background'

function RecentPosts({posts}) {
  return (
    <div id="recent-posts">
      <Helmet>
        <meta name="description" content="Recent posts"/>
        <title>MAS | Recent posts</title>
      </Helmet>
      <Background title="Recent posts"/>
      <div className="container">
        <div className="articles-container">
          {posts
            .slice(posts.length - 3, posts.length)
            .map(item => (
               <div className="item wow animate__animated animate__fadeIn" key={item.title}>
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
                    <p><Link className="read-more" to={"/posts/" + item.path}>Read more</Link></p> 
                  </div>
                </div>)
            )}
        </div>
        <aside>
          <h4>Popular Posts</h4>
          <div className="posts">
            {posts.map(item => ((item.popular)
              ? <Link className="post" title={item.title} to={"/posts/" + item.path}>
                <div className="content">
                <img src={item.image} alt="post-popular"/>
                <h4>{item.title}</h4>
                </div>
                </Link>
              : null))}
          </div>
        </aside>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, null)(RecentPosts)