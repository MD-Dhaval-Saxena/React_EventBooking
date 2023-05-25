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
    <div class="main bg-blue-200 w-1/2 m-auto rounded ">
    <h4 class="mt-20 text-center p-10" >ClaimRefund Your Ticket Refund</h4>
    <div className="text-center">
    <h6 id="cat ">Conditions</h6>
        <p class="text-sm text-gray-600">IF event is Cancelled due to some Reason then you can Claim Refund</p>
        </div>
    <hr/>
    <div className="container" class="flex justify-center items-center">
        <form>
          <div className="form-group" class="flex space-x-4 p-4">
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
              class="w-66 rounded text-center "
              id="category"
              name="category"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter Event Category"
            />
          </div>

          <div className="text-center" class="mt-5 m-4 text-center">
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
    </div>
    </>
)

}