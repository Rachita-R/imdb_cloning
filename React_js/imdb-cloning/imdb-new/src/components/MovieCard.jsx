import React from 'react'
import Watchlist from './Watchlist'

function MovieCard({ movieObj, poster_path, name, handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) {

    function doesContain(movieObj) {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id === movieObj.id) {
                return true
            }
        }
        return false
    }
    return (
        <div className='h-[50vh] mr-4 mb-5 w-[170px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 
        hover:cursor-pointer flex flex-col justify-end relative'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

            {doesContain(movieObj) ? (
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveFromWatchlist(movieObj)
                    }}
                    className='absolute top-2 right-2 flex justify-center h-8 w-8 items-center rounded-lg 
                    bg-black bg-opacity-60'
                >
                    &#10060;
                </div>
            ) : (
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        handleAddtoWatchlist(movieObj)
                    }}
                    className='absolute top-2 right-2 flex justify-center h-8 w-8 items-center rounded-lg 
                    bg-black bg-opacity-60'
                >
                    &#128525;
                </div>
            )}

            <div className='text-white text-1xl w-full p-2 text-center bg-gray-900 bg-opacity-70 rounded-b-2xl'>
                {name}
            </div>
        </div>
    )
}

export default MovieCard