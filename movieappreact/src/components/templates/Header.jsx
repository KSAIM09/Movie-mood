/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Header = ({data}) => {
    // console.log(data);
  return (
    <div className="w-full h-[50vh] flex flex-col justify-end p-[5%] items-start"
        style={{
            background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5), rgba(0,0,0,.7)), 
            url(
                https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.profile_path
                })`, 
            backgroundPosition: 'center',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
    >
      <h1
        className="text-5xl font-bold text-white  w-[70%]"
      >{data.name || data.title || data.original_name || data.original_title}</h1>
      <p className="w-[60%] text-white mt-3 mb-2">{data.overview.slice(0, 150)}...<Link className="text-blue-400"> More</Link></p>
      <p className="text-white">
      <i className="ri-calendar-fill text-blue-400"></i> {data.release_date || 'NaN'}
      <i className="ri-film-fill text-blue-400 ml-5"></i> {data.media_type.toUpperCase() || 'NaN'}
      </p>
      <Link className="p-3 rounded-md bg-blue-500 text-white font-semibold mt-4">
        {" "}
        Watch Trailer
      </Link>
    </div>
  )
}

export default Header
