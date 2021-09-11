import React from 'react';
import "./Movie.css"

const Movie = (props) => {

    const url = "https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg"
    const m = props.movie
    const img = m.Poster
    let rat = "Not Yet Released"
    if (m.Ratings.length > 0) {
        rat = m.Ratings[0].Value
    }
    return <div id="root" className="container">

        <div className="row mt-5">
            <div className="col-lg-4">
                <img width={img === "N/A" ? "300" : ""} height={img === "N/A" ? "400" : ""} src={img === "N/A" ? url : img} alt={m.Title} />

                <div className="cent">
                    <h1 className="mt-4"> <i className="bi bi-star-fill"> </i>{rat && rat}</h1>
                </div>
            </div>
            <div className="col-lg-8 bot">
                <h2 >{m.Title}</h2>
                <h3>Directed by : {m.Director}</h3>


                <h4 className="mt-4">{m.Year} <span className="space"></span> {m.Runtime}</h4>
                <h4 >{m.Genre}</h4>

                <div className="containter">
                    <div className="row">
                        <p className="mt-4 col-8">{m.Plot}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Movie