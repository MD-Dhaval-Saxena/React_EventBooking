import React, { useState, useEffect, useContext } from "react";
import ViewEvents from "../Components/ViewEvents";
import CreateEvent from "../Components/CreateEvent";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";
 
export default function EventTotal() {
  const context = useContext(DataContext);
  const { events, setEvents, addNote , getData } = context;
  useEffect(() => {
    getData()
  },[])
  return (
    <>
    {/* <CreateEvent/> */}
      {/* <h4> {event.EventName}</h4>;   */}
         {events.map((event,eventId) => { 
           return <div key={eventId} className="card-group mt-3">
           <div  className="card">
             <div  className="card-body">
            <i >#{event.eventId}</i>
               <h5  className="card-title">{event.EventName}</h5>
               <p  className="card-text">  Booking starts {event.Date}.</p>
               <p  className="card-text"><small  className="text-muted">EventTotal {events.length}</small></p>
               <button className="btn btn-outline-success">Book</button>
             </div>
           </div>
           </div>


           
        //    <div  className="card"style={{ width: '18rem' }}>
        //   <div  className="card-body">
        //     <i>{event.eventId}</i>
        //     <h6  className="card-title">{event.EventName}</h6>
        //     <p  className="card-text">
        //     Booking starts {event.Date}
        //     Date starts {event.startBooking}
        //     </p>
        //     <Link to="#"  className="btn btn-primary">
        //      Book
        //     </Link>
        //   </div>
        // </div>
        })}
    </>
  );
}
