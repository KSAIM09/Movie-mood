/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Cards from "./templates/Cards";
import DropDown from "./templates/DropDown";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component"

const Movie = () => {

    // to navigate back
    const navigate = useNavigate();

    // For category movies
    const [category, setCategory] = useState('now_playing');



    // for movie
    const [movie, setMovie] = useState([]);

    // for infinite scroll
    const [page, setPage] = useState(1);

    // has more for infinite scroll
    const [hasMore, setHasMore] = useState(true)

    document.title = 'Movie-Mood | Movie ' + category.toUpperCase();

    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            // console.log(data)
            // setMovie(data.results)
            // For infinite scrolling with new data set
            if (data.results.length > 0) {
                setMovie((prevState) => [...prevState, ...data.results])
                setPage(page + 1)
            } else {
                setHasMore(false)
            }

        } catch (error) {
            console.error(error, "Error Getting Searches")
        }
    }

    // for not to get same page again
    const refreshHandler = () => {
        if (movie.length === 0) {
            GetMovie()
        } else {
            setPage(1)
            setMovie([])
            GetMovie()
        }
    }

    // UseEffect
    useEffect(() => {
        refreshHandler()
    }, [category])

    // console.log(movie)

    return movie.length > 0 ? (
        <div className="w-full h-screen py-[1%] ">
            <div className="w-full flex items-center justify-center px-[3%]">

                <h1 className="text-2xl text-zinc-400 font-semibold drop-shadow-lg">
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-blue-400 cursor-pointer p-2"></i>Movie
                </h1>
                <TopNav />
                <DropDown title="Category" options={["popular", "top_rated", "upcoming", "now_playing"]} func={((e) => setCategory(e.target.value))} />
                <div className="w-[2%]"></div>

            </div>

            {/* To use infinite scroll */}
            <InfiniteScroll
                loader={<h1>Loading...</h1>}
                next={GetMovie}
                hasMore={hasMore}
                dataLength={movie.length}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>


        </div>
    ) : <Loading />
}

export default Movie
