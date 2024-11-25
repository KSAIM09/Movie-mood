/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
// import axios from '../../utils/axios';
// import { useEffect } from "react";
const Sidenav = () => {


    

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-600 p-10 overflow-auto no-scrollbar">
        <h1 className="text-2xl text-white font-black">
            
            <i className="ri-tv-fill text-blue-500 mr-1"></i>
            <span className="text-2xl">Movie APP</span>

        </h1>
        
        <nav className="flex flex-col text-zinc-300 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>
            <Link to="/trending" className="
                p-5 
                rounded-md 
                hover:bg-blue-500 
                hover:text-white 
                duration-300"
            ><i className="ri-fire-fill mr-2"></i> Trending</Link>
            <Link to="/popular" className="
                p-5 
                rounded-md 
                hover:bg-blue-500 
                hover:text-white 
                duration-300"
            ><i className="ri-bard-fill mr-2"></i> Popular</Link>
            <Link to="/movie" className="p-5 rounded-md hover:bg-blue-500  hover:text-white duration-300"><i className="ri-film-line mr-2"></i> Movies</Link>
            <Link to="/tvShows" className="p-5 rounded-md hover:bg-blue-500  hover:text-white duration-300"><i className="ri-tv-2-fill mr-2"></i> Tv Shows</Link>
            <Link to="/person" className="p-5 rounded-md hover:bg-blue-500  hover:text-white duration-300"><i className="ri-star-fill mr-2"></i> People's Fav</Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-600 rounded-md mt-4" />

        <nav className="flex flex-col text-zinc-300 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-10 mb-5">Information</h1>
            <Link className="
                p-5 
                rounded-md 
                hover:bg-blue-500  
                hover:text-white 
                duration-300"
            ><i className="ri-file-info-fill mr-2"></i> About</Link>
            <Link className="
                p-5 
                rounded-md 
                hover:bg-blue-500 
                hover:text-white 
                duration-300"
            ><i className="ri-phone-fill mr-2"></i> Contact</Link>
        </nav>
            
    </div>
  )
}

export default Sidenav
