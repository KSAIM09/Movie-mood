import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";

const Home = () => {


    // Page Title
    document.title = 'Home';
  return (
    <>
    <Sidenav />
    <div className="w-[80%] h-full">
      <TopNav />
    </div>
    </>
  )
}

export default Home
