import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

function Card(props) {
    return (
        <div className="zoom">
            <Link to={"/" + props.id} style={{ textDecoration: "none", color: "black" }}>
                <div className="col">
                    <div className="card shadow-sm" style={{ width: "15rem" }}>
                        <img width="150" height="300" src={props.img} className="card-img-top" alt={props.title} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card