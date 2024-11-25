import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";
import axios from '../utils/axios';
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import DropDown from "./templates/DropDown";
import Loading from "./Loading";
const Home = () => {


  // Page Title
  document.title = 'Home';

  // Wallpaper
  const [wallpaper, setWallpaper] = useState(null);
  // Trending
  const [trending, setTrending] = useState(null);
  // Filter Categories
  const [category, setCategory] = useState("all");

  // --------------------------------------x-------------------------------------x--------------------------------
  // Fetch Header Wallpaper
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log(data)
      let randomData = data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.error(error, "Error Getting Searches")
    }
  }

  // Fetch trending cards with category
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/week`);
      // console.log(data)
      setTrending(data.results)
    } catch (error) {
      console.error(error, "Error Getting Searches")
    }
  }




  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
    // eslint-disable-next-line
  }, [category])

  // console.log(trending)

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />

        <div className="flex justify-between items-center px-7 mt-4">
          <h1 className="text-3xl text-zinc-300 font-semibold hover:text-blue-300">TRENDING</h1>

          {/* Filter */}
          <DropDown 
            title="Filter" 
            options={['tv', 'movie', 'all']}  
            func={(e) => setCategory(e.target.value)}/>
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : <Loading />
}

export default Home
