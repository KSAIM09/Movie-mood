import { Link } from "react-router-dom"

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-500 p-10">
        <h1 className="text-2xl text-white font-black">
            
            <i className="ri-tv-fill text-[#6556CD] mr-1"></i>
            <span className="text-2xl">Movie APP</span>

        </h1>
        
        <nav className="flex flex-col text-zinc-300 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>
            <Link className="
                p-5 
                rounded-md 
                hover:bg-[#6556CD] 
                hover:text-white 
                duration-300"
            ><i className="ri-fire-fill mr-2"></i> Trending</Link>
            <Link className="
                p-5 
                rounded-md 
                hover:bg-[#6556CD] 
                hover:text-white 
                duration-300"
            ><i className="ri-bard-fill mr-2"></i> Popular</Link>
            <Link className="p-5 rounded-md hover:bg-[#6556CD] hover:text-white duration-300"><i className="ri-film-line mr-2"></i> Movies</Link>
            <Link className="p-5 rounded-md hover:bg-[#6556CD] hover:text-white duration-300"><i className="ri-tv-2-fill mr-2"></i> Tv Shows</Link>
            <Link className="p-5 rounded-md hover:bg-[#6556CD] hover:text-white duration-300"><i className="ri-star-fill mr-2"></i> People's Fav</Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-400 rounded-md" />

        <nav className="flex flex-col text-zinc-300 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-10 mb-5">Information</h1>
            <Link className="
                p-5 
                rounded-md 
                hover:bg-[#6556CD] 
                hover:text-white 
                duration-300"
            ><i className="ri-file-info-fill mr-2"></i> About</Link>
            <Link className="
                p-5 
                rounded-md 
                hover:bg-[#6556CD] 
                hover:text-white 
                duration-300"
            ><i className="ri-phone-fill mr-2"></i> Contact</Link>
        </nav>
            
    </div>
  )
}

export default Sidenav
