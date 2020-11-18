import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Background from './Background'

function AllPosts({props, posts}) {
    return (
        <div id="posts">
            <Helmet>
                <meta name="description" content="All blog posts" />
                <title>MAS | All posts</title>
            </Helmet>
            <Background title="All posts" />
            <div className="container">
            <div className="articles-container">
                {
                    posts.map(item=>(
                        <div className="item wow animate__animated animate__fadeIn" key={item.title} onClick={void(0)}>
                            <Link className="post-link" to={"/posts/"+item.path}>
                            <img src={item.image} alt="post"/>
                            <h3>{item.title}</h3>
                            </Link>
                        </div>
                    ))
                }
              </div>
              </div>
        </div>
    )
}

const mapStateToProps= state =>{
    return{
        posts : state.postsRev
    }
}

export default connect(mapStateToProps, null)(AllPosts)