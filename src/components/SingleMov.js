import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Movie from './Movie';
import Loader from "react-loader-spinner";
import "./SingleMov.css"


const SingleMov = (props) => {
    const id = useParams().id

    const [mov, setMov] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        movData(id)
    }, [])

    const movData = async (id) => {
        const url = await fetch("https://www.omdbapi.com/?apikey=56bb3b76&i=" + id)
        const res = await url.json()
        setMov(res)
        setIsLoading(false)
    }

    return <div>
        {isLoading ?
            <Loader
                className="center"
                type="Puff"
                color="#000"
                height={100}
                width={100}
            /> :
            <Movie movie={mov} />}
    </div>
}

export default SingleMov