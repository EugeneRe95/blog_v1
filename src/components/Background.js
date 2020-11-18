import React from 'react'

function Background(props) {
    return (
        <section className={"page-background " + ((props.class) ? props.class : null)}>
            <div className="container">
            <h1 className="animate__animated animate__fadeIn">{props.title}</h1>
            {(props.paragraph) ? <p>{props.paragraph}</p> : null }
            </div>
        </section>
    )
}

export default Background
