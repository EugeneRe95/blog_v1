import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import logo from '../img/logo.png'

function Footer({posts}) {
    return (
        <footer>
            <div className="container">
            <div className="item">
                <p><Link to="/"><img src={logo} alt="logo"/></Link></p>
                <ul>
                    <li>3327  Ross Street <br/>
                        Wood River, Illinois 62095</li>
                    <li>info@mail.com</li>
                </ul>
            </div>
            <div className="item">
                <h4>Main pages</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">All posts</Link></li>
                    <li><Link to="/popular-posts">Popular posts</Link></li>
                    <li><Link to="/recent-posts">Recent posts</Link></li>
                </ul>
            </div>
            <div className="item">
                <h4>Recent</h4>
                <ul>
                    {posts.slice(posts.length-3, posts.length).map(item=>(
                        <li key={item.title}><Link to={"/posts/"+item.path}>{item.title}</Link></li>
                    ))}
                </ul>
            </div>
            </div>
        </footer>
    )
}

const mapStateToProps= state =>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps, null)(Footer)
