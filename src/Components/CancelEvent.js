import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';
const ethers = require("ethers");

export default function CancelEvent() {
    const context = useContext(DataContext);
    const { contract } = context;
     const host = process.env.REACT_APP_Backend_Host;

     const [event, setEvents] = useState({
        eventId: 5,
        category: 5,
      });

     const handleSubmit = (e) => {
        e.preventDefault();
        Cancel_event(event.eventId);
        
      };
    
      const onChange = (e) => {
        setEvents({ ...event, [e.target.name]: e.target.value });
      };
    
      const Cancel_event = async (eventId) => {
        console.log(`loading Cancel_event ${eventId} `);
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        let tempSigner = tempProvider.getSigner();
        try {
            let tx = await contract
            .connect(tempSigner)
            .Cancel_event(eventId);
            await tx.wait()
            alert(`Event Cancelled Succefully:${eventId}`)
        } catch (error) {
        alert(error)
      }
      }


return(
    <>
    <h3 class="m-3 text-center" >Cancel Event (Only Originizer)</h3>
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
            
          </div>

          <div className="text-center" class="mt-5 text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-danger"
            >
              Cancel Event
            </button>
        </div>
            </form>
    </div>
    </>
)

}