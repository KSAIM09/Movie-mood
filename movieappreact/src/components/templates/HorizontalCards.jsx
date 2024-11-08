/* eslint-disable react/prop-types */


// import { Link } from "react-router-dom"

const HorizontalCards = ({ data }) => {
    return (
        <div className="w-full h-[40vh] p-5">
            

            

            <div className="w-full flex overflow-x-auto rounded-md">

                {data.map((d, i) => (
                    <div key={i} className="min-w-[15%] mr-5 bg-black/30 hover:bg-black/50 rounded-md text-start mb-5">
                        <img 
                            className="rounded-t-md w-full object-cover "
                            src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path
                            }`} alt="" />
                        <h1
                            className="text-xl font-semibold text-white mt-2 hover:text-blue-300 px-4"
                        >
                            {d.name || d.title || d.original_name || d.original_title}
                        </h1>

                        <p className="text-sm px-4 text-white mt-3 mb-2">{d.overview.slice(0, 50)}...<span className="text-blue-300"> More</span></p>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default HorizontalCards
