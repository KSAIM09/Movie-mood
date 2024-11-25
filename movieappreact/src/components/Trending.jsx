/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom"
import TopNav from "./templates/TopNav";
import DropDown from "./templates/DropDown";
import { useState, useEffect } from "react";
import axios from "../utils/axios"
import Cards from "./templates/Cards";
import Loading from "./Loading"
import InfiniteScroll from "react-infinite-scroll-component"

const Trending = () => {
    

    // to navigate back
    const navigate = useNavigate();

    // For category movies
    const [category, setCategory] = useState('all');

    // for duration
    const [duration, setDuration] = useState('day');

    // for trending
    const [trending, setTrending] = useState([]);

    // for infinite scroll
    const [page, setPage] = useState(1);

    // has more for infinite scroll
    const [hasMore, setHasMore] = useState(true)

    document.title = 'Trending ' + category.toUpperCase();

    // Get trending
    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            // console.log(data)
            // setTrending(data.results)
            // For infinite scrolling with new data set
            if(data.results.length > 0) {
                setTrending((prevState) =>[...prevState, ...data.results])
                setPage(page + 1)
            }else{
                setHasMore(false)
            }
            
        } catch (error) {
            console.error(error, "Error Getting Searches")
        }
    }

    // for not to get same page again
    const refreshHandler = () => {
        if(trending.length === 0) {
            GetTrending()
        }else{
            setPage(1)
            setTrending([])
            GetTrending()
        }
    } 

    // UseEffect
    useEffect(() => {
        refreshHandler()
    }, [category, duration])

    console.log(trending)

    return trending.length > 0 ? (
        <div className="w-full h-screen py-[1%] ">
            <div className="w-full flex items-center justify-center px-[3%]">

                <h1 className="text-2xl text-zinc-400 font-semibold drop-shadow-lg">
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-blue-400 cursor-pointer p-2"></i>Trending
                </h1>
                <TopNav />
                <DropDown title="Category" options={["movie", "tv", 'all']} func={((e) => setCategory(e.target.value))} />
                <div className="w-[2%]"></div>
                <DropDown title="Duration" options={["week", "day"]} func={((e) => setDuration(e.target.value))} />
            </div>

            {/* To use infinite scroll */}
            <InfiniteScroll
                loader={<h1>Loading...</h1>}
                next={GetTrending}
                hasMore={hasMore}
                dataLength={trending.length}
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>


        </div>
    ) : <Loading />
}

export default Trending
