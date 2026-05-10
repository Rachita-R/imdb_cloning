import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Pagination from './Pagination'

function Movies({ handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if (pageNo == 1){
      setPageNo(1)
    }
    else {
      setPageNo(pageNo - 1)
    }
  }

  const handleNext = () => {
    setPageNo(pageNo + 1)
  }



  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ab30607b84e238e1ca18490d124b367c&language=en-US&page=${pageNo}`).then(function (res) {
      setMovies(res.data.results)
    })
  }, [pageNo])


  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movieObj) => {
          return <MovieCard key = {movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} 
          name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} 
          handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
        })}
      </div>

      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=ab30607b84e238e1ca18490d124b367c&language=en-US&page=1