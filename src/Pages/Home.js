import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';
import { useNavigate  } from "react-router-dom";

export default function Home() {
  document.title="EventGO ~ Home";

  const navigate = useNavigate();
return(
    <>
   
      <div class="main flex px-10 py-10 h-110 justify-between">
    <div class="text ml-18 px-8">
        <div class="text-2xl  text-white font-mono ">Celebrate. Indulge. Recharge.</div>
        <div class="text-white text-5xl font-extrabold w-[22rem]">
          <p>The Best Amazing Sound Quality</p>
        </div>
        <div class="pt-1">
          <p class="py-2 text-white  w-[29rem] font-initial">
          Join us at our event and let the entertainment take your worries away. Book your tickets today!
          </p>

        </div>
        <div>
          <button
            class="bg-gradient-to-tr from-purple-600 via-violet-600 to-indigo-600 rounded-md py-3 px-7 ml-1 text-center text-white"
            onClick={()=>navigate("/ViewEvents")}
          >
            Book Now
          </button>
          <button
            class="bg-black rounded-md border-2 border-indigo-300 py-3 px-6 ml-4 text-center text-white"
            onClick={()=>navigate("/ViewEvents")}

          > 
            Explore More
          </button>
        </div>
      </div>
      <div class="image">
            <img class="w-[29rem]" src="img1.png" alt="" />
      </div>
    </div>
    </>
)

}