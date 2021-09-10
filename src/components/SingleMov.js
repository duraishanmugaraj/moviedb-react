import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Movie from './Movie';



const SingleMov = (props) => {
    const id = useParams().id

    const [mov, setMov] = useState({})

    useEffect(() => {
        movData(id)
    }, [])

    const movData = async (id) => {
        const url = await fetch("http://www.omdbapi.com/?apikey=56bb3b76&i=" + id)
        const res = await url.json()
        setMov(res)
    }

    return <Movie movie={mov} />
}

export default SingleMov