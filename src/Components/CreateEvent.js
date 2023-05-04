import React, { useState, useEffect, useContext ,useCallback} from "react";
import DataContext from "../Context/dataContext";

export default function CreateEvent() {
  const context = useContext(DataContext);
  const { addEvent } = context;

  const [event, setEvents] = useState({
    eventId: 5,
    EventName: " ",
    Date: 0,
    startBooking: 0,
    endBooking: 0,
    tickets:0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(
      parseInt(event.eventId),
      event.EventName,
      parseInt(event.Date),
      parseInt(event.startBooking),
      parseInt(event.endBooking),
      parseInt(event.tickets)
    );
    console.log("Calling handleSubmit.......");
  };

  const onChange = (e) => {
    setEvents({ ...event, [e.target.name]: e.target.value });
  };
  return (
    <>
      <center>
        <h3>CreateEvent here</h3>
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
              type="text"
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
              type="text"
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
              type="text"
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
              aria-describedby="emailHelp"
              placeholder="Enter tickets"
            />
          </div>

          <button type="submit" onClick={handleSubmit} className="btn btn-dark">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
