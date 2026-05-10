import React, { useEffect } from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar"
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  let [watchlist, setWatchlist] = React.useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filterWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    localStorage.setItem('moviesApp', JSON.stringify(filterWatchlist))
    setWatchlist(filterWatchlist)
    console.log(filterWatchlist)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage) {
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home / Default Route */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          {/* Movies Page */}
          <Route
            path="/Movies"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          {/* Watchlist Page */}
          <Route
            path="/Watchlist"
            element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
