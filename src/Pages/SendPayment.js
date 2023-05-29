import React, { useState, useEffect,useContext,useRef } from "react";
import DataContext from '../Context/dataContext';
const ethers = require("ethers");

export default function SendPayment() {
  const formRef = useRef();

  document.title="EventGO ~ Send Payment";

    const context = useContext(DataContext);
    const { contract } = context;
     const host = process.env.REACT_APP_Backend_Host;

     const [event, setEvents] = useState({
        eventId: 5,
      });

     const handleSubmit = (e) => {
        e.preventDefault();
        PaymentToOWner(event.eventId);
        formRef.current.reset();

        
      };
    
      const onChange = (e) => {
        setEvents({ ...event, [e.target.name]: e.target.value });
      };
    
      const PaymentToOWner = async (eventId) => {
        console.log(`loading PaymentToOWner ${eventId} `);
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        let tempSigner = tempProvider.getSigner();
        try {
            let tx = await contract
            .connect(tempSigner)
            .PaymentToOWner(eventId);
            await tx.wait()
            alert(`Payment Send to Owner Succefully:${eventId}`)
        } catch (error) {
        alert(error)
      }
      }


return(
    <>
    <h3 class="m-3 text-center" >Send Payment to Event Originizer</h3>
    {/* Condition here */}
    <hr/>
    <div className="container" class="flex justify-center items-center">
        <form ref={formRef}>
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
              className="btn btn-success"
            >
              Send 
            </button>
        </div>
            </form>
    </div>
    </>
)

}