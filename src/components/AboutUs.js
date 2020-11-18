import React from 'react'
import { Helmet } from 'react-helmet'
import Background from './Background'

function AboutUs() {
    return (
        <div id="about-us">
            <Helmet>
            <meta name="description" content="We complement on the chance of giving the connected articles in specific portrayals, manner of speaking and reasonable humor. The articles and substance on this blog may be made in an aesthetic manner and may incorporate substance with standout additional significance. " />
            <title>MAS | About us</title>
            </Helmet>
            <Background title="About us" />
            <div className="container">
                <p>MAS is the online business based blog that takes into the view the subject of buying things in the internet business stores by folks. We help genuine tricksters with what, when, and how to purchase on the web. To accomplish the top rating of your online acquirings, perused our blog on the every day matter.</p>
                <p>We complement on the chance of giving the connected articles in specific portrayals, manner of speaking and reasonable humor. The articles and substance on this blog may be made in an aesthetic manner and may incorporate substance with standout additional significance. </p>
                <p>For publicizing accomplices and associates, the MAS is a site with customary updates that happen day by day. We convey a wide range of substance identified with purchasing on the web, the webpage may contain different web materials, including yet not confined to audits and articles, video-promotions, spring up warnings, message pop-ups, etc.</p>
                <p>We may get outsider installments in a few structures from intrigued sides with outside references on the site. As it goes in the present About Us article, our evaluations or disclosures communicated on our site rely upon our own personal studies and examination of the particular items and administrations.</p>
            </div>
        </div>
    )
}

export default AboutUs
