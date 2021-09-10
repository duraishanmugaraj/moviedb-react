import React, { useEffect, useState } from 'react'
import Cardlist from './components/Cards/Cardlist'
import SearchField from './components/SearchField'


function App() {
    const [searchValue, setSearchValue] = useState("Iron Man")
    const [movieList, setMovieList] = useState([])


    const handleSearchValue = (value) => {
        setSearchValue(value)
    }

    const movieData = async () => {
        const url = await fetch("http://www.omdbapi.com/?apikey=56bb3b76&s=" + searchValue)
        const res = await url.json()
        setMovieList(await res.Search)
    }

    useEffect(() => {
        movieData()
    }, [searchValue])

    return (
        <div >
            <SearchField searchData={handleSearchValue} />

            <Cardlist moviez={movieList} />
        </div>

    )
}

export default App