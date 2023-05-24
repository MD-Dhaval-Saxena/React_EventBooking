import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';
const ethers = require("ethers");

export default function ClaimRefund() {
    const context = useContext(DataContext);
    const { contract } = context;
     const host = process.env.REACT_APP_Backend_Host;

     const [event, setEvents] = useState({
        eventId: 5,
        category: 5,
      });

     const handleSubmit = (e) => {
        e.preventDefault();
        ClaimRefund(event.eventId,event.category);
        
      };
    
      const onChange = (e) => {
        setEvents({ ...event, [e.target.name]: e.target.value });
      };
    
      const ClaimRefund = async (eventId, category) => {
        console.log(`loading VerifyTicket ${eventId} ${category}`);
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        let tempSigner = tempProvider.getSigner();
        try {
            let tx = await contract
            .connect(tempSigner)
            .claimRefund(eventId, `${eventId}00${category}`);
            await tx.wait()
            // if(tx.value)
            // alert("Ticket Verif  ied..${})
        } catch (error) {
        alert(error)
      }
      }


return(
    <>
    <h3 class="m-3 text-center" >ClaimRefund Your Ticket Refund</h3>
    {/* Condition here */}
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