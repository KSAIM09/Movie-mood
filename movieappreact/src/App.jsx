import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'
import People from './components/People'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'


const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/trending' element={<Trending />}/>
        <Route path='/popular' element={<Popular />}/>

        <Route path='/movie' element={<Movie />} />
        <Route path='/movie/details/:id' element={<MovieDetails />} />
          
        <Route path='/tv' element={<TvShows />} />
        <Route path='/tv/details/:id' element={<TvDetails />} />
          
        <Route path='/person' element={<People />} />
        <Route path='/person/details/:id' element={<PersonDetails />} />


        {/* just for checking loader */}
        <Route path='/l' element={<Loading />}/>
      </Routes>
    </div>
  )
}

export default App
