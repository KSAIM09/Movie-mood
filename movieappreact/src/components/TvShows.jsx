/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Cards from "./templates/Cards";
import DropDown from "./templates/DropDown";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component"
const TvShows = () => {


    // to navigate back
    const navigate = useNavigate();

    // For category tvShows
    const [category, setCategory] = useState('airing_today');



    // for tvShows
    const [tvShows, setTvShows] = useState([]);

    // for infinite scroll
    const [page, setPage] = useState(1);

    // has more for infinite scroll
    const [hasMore, setHasMore] = useState(true)

    document.title = 'Tv Shows ' + category.toUpperCase();

    const GetTvShows = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            // console.log(data)
            // setTvShows(data.results)
            // For infinite scrolling with new data set
            if (data.results.length > 0) {
                setTvShows((prevState) => [...prevState, ...data.results])
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
        if (tvShows.length === 0) {
            GetTvShows()
        } else {
            setPage(1)
            setTvShows([])
            GetTvShows()
        }
    }

    // UseEffect
    useEffect(() => {
        refreshHandler()
    }, [category])

    // console.log(tvShows)

  return tvShows.length > 0 ? (
    <div className="w-full h-screen py-[1%] ">
        <div className="w-full flex items-center justify-center px-[3%]">

            <h1 className="text-2xl text-zinc-400 font-semibold drop-shadow-lg">
                <i onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-blue-400 cursor-pointer p-2"></i>TV
            </h1>
            <TopNav />
            <DropDown title="Category" options={["popular", "top_rated", "on_the_air", "airing_today"]} func={((e) => setCategory(e.target.value))} />
            <div className="w-[2%]"></div>

        </div>

        {/* To use infinite scroll */}
        <InfiniteScroll
            loader={<h1>Loading...</h1>}
            next={GetTvShows}
            hasMore={hasMore}
            dataLength={tvShows.length}
        >
            <Cards data={tvShows} title={category} />
        </InfiniteScroll>


    </div>
) : <Loading />
}

export default TvShows
