import React from 'react'
import {useState} from 'react'
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Background from './Background'

function Home({posts}) {
  const [begin, setBegin] = useState(0)
  const [end, setEnd] = useState(3)
  function changePage(e){
    const el = document.querySelector('.articles');
    if(e.target.className==='prev'){
      setBegin(end-6)
      setEnd(end-3)
      window.scrollTo(0, el.offsetTop)
    }else if(e.target.className==='next'){
      setBegin(end)
      setEnd(end+3)
      window.scrollTo(0, el.offsetTop)
    }
  }
  return (
    <div id="home">
      <Helmet>
        <title>MAS | Home</title>
      </Helmet>
      <Background title="MAS" paragraph="MAS is the online business based blog that takes into the view the subject of buying things in the internet business stores by folks. We help genuine tricksters with what, when, and how to purchase on the web. To accomplish the top rating of your online acquirings, perused our blog on the every day matter." class="main" />
      <section className="articles">
          <div className="container">
              <div className="articles-container">
                {
                    posts.slice(begin, end).map(item=>(
                        <div className="item wow animate__animated animate__fadeInUp" key={item.title}>
                          <div className="description">
                          <h3><Link to={"/posts/"+item.path}>{item.title}</Link></h3>
                          <p>{item.descrip}</p>
                          <p><Link  className="learn-more" to={"/posts/"+item.path}>Learn more</Link></p>
                          </div>
                          <img src={item.image} alt="post"/>
                        </div>
                    ))
                }
              </div>
              <div className={"pagination "+((begin!==0)? 'both-sides':null)} onClick={changePage}>
                {(begin<=0) ? null : <button className="prev"><i className="fas fa-arrow-left"></i> Prev</button>} 
                {(end>=posts.length) ? null : <button className="next">Next <i className="fas fa-arrow-right"></i></button> } 
              </div>
          </div>
      </section>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        posts: state.postsRev
    }
}

export default connect(mapStateToProps, null)(Home)
