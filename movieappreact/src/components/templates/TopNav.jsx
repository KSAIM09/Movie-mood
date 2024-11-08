import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "../../utils/axios";

import nopic from '/no-pic.png'

const TopNav = () => {

    // Search bar Query
    const [query, setQuery] = useState('')

    // Search Bar Query Results
    const [searches, setSearches] = useState([]);

    const GetSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            // console.log(data)
            setSearches(data.results);
        } catch (error) {
            console.error(error, "Error Getting Searches")
        }
    }

    useEffect(() => {
        GetSearches();
    }, [query])


    return (
        <div className="w-[80%] h-[10vh] relative flex justify-start items-center ml-[15%]">
            <i className="ri-search-line text-3xl text-blue-400"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-[50%] mx-10 p-3 text-xl outline-none border-none bg-transparent text-zinc-200" type="text" placeholder="Search anything"
            />
            {query.length > 0 && <i onClick={() => setQuery("")} className="ri-close-fill text-3xl text-red-400"></i>
            }

            <div className="w-[50%] max-h-[50vh] bg-zinc-950 absolute top-[100%] left-[5%] overflow-auto rounded-b-lg shadow-md">

                {/* searches */}
                {searches?.map((s, i) => (
                    <Link key={i} className="w-full p-8 flex justify-start items-center border-b-2 border-zinc-600 text-zinc-200 font-semibold hover:text-black hover:bg-blue-300 duration-300">
                        <img
                        className="w-[20vh] h-[10vh] object-cover rounded-md mr-10 shadow-lg"
                        src={
                            s.backdrop_path ||
                            s.profile_path? `https://image.tmdb.org/t/p/original/${
                                s.backdrop_path || s.profile_path
                            }` : nopic
                        } alt="" />
                        <span>{s.original_title || s.name || s.title || s.original_name}</span>
                    </Link>
                ))}



            </div>
        </div>
    )
}

export default TopNav
