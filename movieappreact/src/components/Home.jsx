import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";
import axios from '../utils/axios';
import Header from "./templates/Header";
const Home = () => {


    // Page Title
    document.title = 'Home';

    // Wallpaper
    const [wallpaper, setWallpaper] = useState(null);

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
  
  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    // eslint-disable-next-line
  }, [])

  return wallpaper ? (
    <>
    <Sidenav />
    <div className="w-[80%] h-full">
      <TopNav />
      <Header data={wallpaper} />
    </div>
    </>
  ): <h1>Loading...</h1>
}

export default Home
