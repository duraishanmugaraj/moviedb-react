import React, { useEffect, useRef, useState } from 'react'
import Cardlist from './components/Cards/Cardlist'
import SearchField from './components/SearchField'
import Loader from "react-loader-spinner";
import "./components/SingleMov.css"
import def from "./default"

function App() {
    let initial = useRef(true)
    const [searchValue, setSearchValue] = useState()
    const [movieList, setMovieList] = useState(def)
    const [isLoading, setIsLoading] = useState(true)
    const [movNotFound, setMovNotFound] = useState(false)

    const handleSearchValue = (value) => {
        setSearchValue(value)
        setIsLoading(true)

    }

    const movieData = async () => {
        const url = await fetch("https://www.omdbapi.com/?apikey=56bb3b76&s=" + searchValue)
        const res = await url.json()
        setMovieList(await res.Search)

        setIsLoading(false)

        if (res.Response === "False") {
            setMovNotFound(true)
        } else {
            setMovNotFound(false)
        }
    }

    useEffect(() => {
        if (initial.current) {
            initial.current = false
            setIsLoading(false)
        } else if (searchValue === "") {
            setMovieList(def)
            setIsLoading(false)
        } else {
            movieData()
        }


    }, [searchValue])

    return (
        <div >
            <SearchField searchData={handleSearchValue} />
            {isLoading ? <Loader className="center" type="Puff" color="#000" height={100} width={100} /> :
                (movNotFound && searchValue !== "" ? <h1 className="not"> Movie Not Found !</h1> : <Cardlist moviez={movieList} />)}
        </div>

    )
}

export default App