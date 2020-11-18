import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { hideMenu } from '../redux/actions'

import img from '../img/logo.png'

function MobileMenu({menu,hideMenu}) {
    function hide(e){
        if(e.target.closest('a') || e.target.classList.contains('close-menu') || e.target.id==="mobile-menu"){
            hideMenu()
        }
    }
    return (
        <div className={(menu) ? 'active' : ''} id="mobile-menu" onClick={hide}>
            <div className="close-menu">
                <i className="fas fa-times"></i> 
            </div>
            <nav>
                <Link to="/"><img src={img} alt="logo"/></Link>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/posts" activeClassName="active">Posts</NavLink></li>
                    <li><NavLink exact to="/recent-posts" activeClassName="active">Recent</NavLink></li>
                    <li><NavLink exact to="/popular-posts" activeClassName="active">Popular</NavLink></li>
                    <li><NavLink exact to="/about-us" activeClassName="active">About us</NavLink></li>
                </ul>
                <p className="contact">
                    Write us for any questions <br/> <span>info@mail.com</span>
                </p>
            </nav>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        menu: state.menu
    }
}
const mapDispatchToProps = {
    hideMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)