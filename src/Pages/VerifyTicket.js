import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';
const ethers = require("ethers");

export default function VerifyTicket() {
    const context = useContext(DataContext);
    const { contract } = context;
     const host = process.env.REACT_APP_Backend_Host;

     const [event, setEvents] = useState({
        eventId: 5,
        category: 5,
      });

     const handleSubmit = (e) => {
        e.preventDefault();
        VerifyTicket(event.eventId,event.category);
        
      };
    
      const onChange = (e) => {
        setEvents({ ...event, [e.target.name]: e.target.value });
      };
    
      const VerifyTicket = async (eventId, category) => {
        console.log(`loading VerifyTicket ${eventId} ${category}`);
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        let tempSigner = tempProvider.getSigner();
        try {
            let tx = await contract
            .connect(tempSigner)
            .VerifyTicket(eventId, `${eventId}00${category}`);
            await tx.wait()
            // if(tx.value)
            // alert("Ticket Verif  ied..${})
        } catch (error) {
        alert(error)
      }
      }


return(
    <>
    <h3 class="m-3 text-center" >Verify Your Ticket Here</h3>
     <div className="text-center italic">
    <p class="text-sm text-red-100 font-bold text-xl">Only Access At Event Venue</p>
    <p class="text-sm text-white">Entry in screen will be given Verify your ticket before 5 min of the show time.</p>
    <p class="text-sm text-white">Once You Verify ticket,Ticket Will be Burned.</p>

     </div>

    <hr/>
    <div className="container" class="flex justify-center items-center">
        <form>
          <div className="form-group" class="flex space-x-4 ">
            <input
              type="text"
              className="form-control"
              id="eventId"
              name="eventId"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter Event Id"
            />
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter Event Category"
            />
          </div>

          <div className="text-center" class="mt-5 text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-dark "
            >
              Search
            </button>
        </div>
            </form>
    </div>
    </>
)

}