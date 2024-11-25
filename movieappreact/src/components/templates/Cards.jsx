/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Cards = ({ data }) => {
    return (
        <div className="w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-10 mt-5 px-[2%] bg-[#1F1E24] ">
            {data.map((c, i) => (
                <Link key={i} className="w-[230px] xl:h-[400px] rounded-lg lg:h-[300px] relative">
                    <img className="h-[40vh] object-cover rounded-lg shadow-xl hover:scale-95 duration-200" src={`
                        https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path || c.profile_path}`
                    } alt=""
                    />
                    <h1 className="text-lg text-zinc-200 mt-2 text-center font-semibold hover:text-blue-400 hover:text-xl duration-200">
                        {c.name || c.title || c.original_name || c.original_title}
                        
                    </h1>
                    {c.vote_average && (
                    <div className="absolute right-[-10%] bottom-[25%] text-white font-semibold rounded-full bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center">
                        {(c.vote_average * 1).toFixed(1)}<sup>/10</sup>
                    </div>
                    )}
                </Link>
            ))}
        </div>
    )
}

export default Cards
