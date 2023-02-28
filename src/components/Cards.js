import React from 'react'

export default function Cards(props) {
  return (
    <div className="container my-3 card" style={{width: "18rem"}}>
        <img src={props.urlToImage} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="/" className="btn btn-sm btn-primary">Read More</a>
            </div>
    </div>
  )
}
