import React, { useState, useEffect, useContext ,useCallback} from "react";
import { Link } from "react-router-dom";
import DataContext from "../Context/dataContext";
import abi from "../ABI/abi.json";
const ethers = require("ethers");
const toEth = (value) => ethers.utils.formatEther(value);
const toWei = (value) => ethers.utils.parseEther(value.toString());

export default function CreateEvent() {

  const context = useContext(DataContext);
  const { contract } = context;
  
  const contract_address = process.env.REACT_APP_contract_address;

  const addEvent = async (
    eventId,
    EventName,
    Date,
    startBooking,
    endBooking,
    tickets
  ) => {
    console.log(" addEvent hitting api");

    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    let tx = await contract
      .connect(tempSigner)
      .createEvent(eventId, EventName, Date, startBooking, endBooking, tickets);
    console.log("🚀 ----------------------🚀");
    console.log("🚀 ~ addEvent ~ tx:", tx);
    console.log("🚀 ----------------------🚀");
    // setEvents(events.concat(event));
  };

  const [event, setEvents] = useState({
    eventId: "7",
    EventName: "Demo",
    Date: "1111111111",
    startBooking: "2222222222",
    endBooking: "3333333333",
    tickets:"99",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(
      parseInt(event.eventId),
      event.EventName,
      toUnixDate(event.Date),
      toUnixDate(event.startBooking),
      toUnixDate(event.endBooking),
      parseInt(event.tickets)
    );
    console.log("Calling handleSubmit.......");
    // For Clearing Fields
  //   setEvents({ eventId: "",
  //   eventId: "",
  //   EventName: " ",
  //   Date: "",
  //   startBooking: "",
  //   endBooking: "",
  //   tickets:""
  // })
  console.log("Clear event Calling..");
  
    
  };
  const toUnixDate = (dateString) => {
    const dateObject = new Date(dateString);
    const unixTimestamp = Math.floor(dateObject.getTime() / 1000);
    return unixTimestamp;
  };
  const onChange = (e) => {
    
    
    setEvents({ ...event, [e.target.name]: e.target.value });
    // setDisabled(values.trim()==="");
  };
  return (
    <>
      <center>
        <h3 class="my-3 ">CreateEvent here</h3>
      </center>
      <div className="container">
        <form>
          <div className="form-group">
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
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="EventName"
              name="EventName"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter EventName"
            />
          </div>
          <div className="form-group">
            <input
              type="Date"
              className="form-control"
              id="Date"
              name="Date"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter Date"
            />
          </div>
          <div className="form-group">
            <input
              type="Date"
              className="form-control"
              id="startBooking"
              name="startBooking"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter startBooking"
            />
          </div>
          <div className="form-group">
            <input
              type="Date"
              className="form-control"
              id="endBooking"
              name="endBooking"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter endBooking"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="tickets"
              name="tickets"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter tickets"
            />
          </div>
          <div className="flex items-start justify-start space-x-42">
          <button type="submit" onClick={handleSubmit}  className="bg-pink-700 rounded text-white p-2 px-4">
            Create
          </button>
          <Link class="ml-20 rounded bg-blue-900 p-2 text-white" to="/addCategory"> Want To Add Category??</Link>
          </div>
        </form>
      </div>
    </>
  );
}
