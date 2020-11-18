import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'

import logo from '../img/logo.png'


export class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            header: (window.scrollY>70) ? 'filled' : ''
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            if(window.scrollY> 70){
                this.setState({header: 'filled'})
            }else{
                this.setState({header: ''})
            }
        })
    }
    render() {
        return (
            <header className={this.state.header}>
                <div className="container">
            <p id="logo"> <Link to="/"><img src={logo} alt="logo"/></Link> </p>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/posts" activeClassName="active">Posts</NavLink></li>
                    <li><NavLink exact to="/recent-posts" activeClassName="active">Recent</NavLink></li>
                    <li><NavLink exact to="/popular-posts" activeClassName="active">Popular</NavLink></li>
                    <li><NavLink exact to="/about-us" activeClassName="active">About us</NavLink></li>
                </ul>
            </nav>
            <p className="contact">
            Write us for any questions <br/> <span>info@mail.com</span>
            </p>
            <Hamburger />
                </div>
        </header>
        )
    }
}

export default Header
