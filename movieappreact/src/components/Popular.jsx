/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Cards from "./templates/Cards";
import DropDown from "./templates/DropDown";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component"
const Popular = () => {

   

    // to navigate back
    const navigate = useNavigate();

    // For category movies
    const [category, setCategory] = useState('movie');



    // for popular
    const [popular, setPopular] = useState([]);

    // for infinite scroll
    const [page, setPage] = useState(1);

    // has more for infinite scroll
    const [hasMore, setHasMore] = useState(true)

    document.title = 'Popular ' + category.toUpperCase();

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`/${category}/popular?page=${page}`);
            // console.log(data)
            // setPopular(data.results)
            // For infinite scrolling with new data set
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results])
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
        if (popular.length === 0) {
            GetPopular()
        } else {
            setPage(1)
            setPopular([])
            GetPopular()
        }
    }

    // UseEffect
    useEffect(() => {
        refreshHandler()
    }, [category])

    // console.log(popular)

    return popular.length > 0 ? (
        <div className="w-full h-screen py-[1%] ">
            <div className="w-full flex items-center justify-center px-[3%]">

                <h1 className="text-2xl text-zinc-400 font-semibold drop-shadow-lg">
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-blue-400 cursor-pointer p-2"></i>Popular
                </h1>
                <TopNav />
                <DropDown title="Category" options={["movie", "tv"]} func={((e) => setCategory(e.target.value))} />
                <div className="w-[2%]"></div>
                
            </div>

            {/* To use infinite scroll */}
            <InfiniteScroll
                loader={<h1>Loading...</h1>}
                next={GetPopular}
                hasMore={hasMore}
                dataLength={popular.length}
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>


        </div>
    ) : <Loading />
}

export default Popular
