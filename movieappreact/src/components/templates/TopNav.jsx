import { Link } from "react-router-dom"
import { useState } from "react";

const TopNav = () => {

    const [query, setQuery] = useState('')


    return (
        <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
            <i className="ri-search-line text-3xl text-zinc-400"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200" type="text" placeholder="Search anything"
            />
            {query.length > 0 && <i onClick={() => setQuery("")} className="ri-close-fill text-3xl text-zinc-400"></i>
            }

            <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded-lg shadow-md">
                {/* <Link className="w-full p-8 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-700 font-semibold hover:text-black hover:bg-zinc-400 duration-300">
                    <img src="" alt="" />
                    <span>Hello Everyone</span>
                </Link> */}
                
            </div>
        </div>
    )
}

export default TopNav
