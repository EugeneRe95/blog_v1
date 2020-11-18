import React from 'react'
import { connect } from 'react-redux'
import {showMenu, hideMenu} from '../redux/actions'

function Hamburger({menu, showMenu, hideMenu}) {
    function toggleMenu(){
        if(menu){
            hideMenu()
        }else{
            showMenu()
        }
    }
    return (
        <div id="hamburger" onClick={toggleMenu}>
           <i className="fas fa-bars"></i>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        menu: state.menu
    }
}

const mapDispatchToProps = {
    showMenu,
    hideMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)
