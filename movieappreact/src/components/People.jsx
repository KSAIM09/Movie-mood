/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Cards from "./templates/Cards";

import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component"
const People = () => {


     // to navigate back
     const navigate = useNavigate();

     // For category person
     const [category, setCategory] = useState('popular');
 
 
 
     // for person
     const [person, setperson] = useState([]);
 
     // for infinite scroll
     const [page, setPage] = useState(1);
 
     // has more for infinite scroll
     const [hasMore, setHasMore] = useState(true)
 
     document.title = 'Movie-Mood | People ' + category.toUpperCase();
 
     const GetPerson = async () => {
         try {
             const { data } = await axios.get(`/person/${category}?page=${page}`);
             // console.log(data)
             // setperson(data.results)
             // For infinite scrolling with new data set
             if (data.results.length > 0) {
                 setperson((prevState) => [...prevState, ...data.results])
                 setPage(page + 1)
             } else {
                 setHasMore(false)
             }
 
         } catch (error) {
             console.error(error, "Error Getting Searches")
         }
     }
 
     // for not to get same page again
     const refreshHandler = () => {
         if (person.length === 0) {
             GetPerson()
         } else {
             setPage(1)
             setperson([])
             GetPerson()
         }
     }
 
     // UseEffect
     useEffect(() => {
         refreshHandler()
     }, [category])
 
     // console.log(person)
  return person.length > 0 ? (
    <div className="w-full h-screen py-[1%] ">
        <div className="w-full flex items-center justify-center px-[3%]">

            <h1 className="text-2xl text-zinc-400 font-semibold drop-shadow-lg">
                <i onClick={() => navigate(-1)} className="ri-arrow-left-line hover:text-blue-400 cursor-pointer p-2"></i>People
            </h1>
            <TopNav />
            
            <div className="w-[2%]"></div>

        </div>

        {/* To use infinite scroll */}
        <InfiniteScroll
            loader={<h1>Loading...</h1>}
            next={GetPerson}
            hasMore={hasMore}
            dataLength={person.length}
        >
            <Cards data={person} title="person" />
        </InfiniteScroll>


    </div>
) : <Loading />
}

export default People
