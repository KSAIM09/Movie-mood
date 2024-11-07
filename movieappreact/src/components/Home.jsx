import Sidenav from "./templates/Sidenav";

const Home = () => {


    // Page Title
    document.title = 'Home';
  return (
    <>
    <Sidenav />
    <div className="w-[80%] h-full"></div>
    </>
  )
}

export default Home
