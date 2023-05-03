import React, { useState, useEffect, useContext } from "react";
import ViewEvents from "../Components/ViewEvents";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";

export default function EventTotal({ object }) {
  const context = useContext(DataContext);
  const { events, setEvents } = context;

  return (
    <>
      {/* <h4> {event.EventName}</h4>;   */}
         {events.map((event) => { 
           return <div class="card-group mt-3">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">{event.EventName}</h5>
               <p class="card-text">  Booking starts {event.Date}.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
               <button className="btn btn-outline-success">Book</button>
             </div>
           </div>
           </div>


           
        //    <div class="card"style={{ width: '18rem' }}>
        //   <div class="card-body">
        //     <i>{event.eventId}</i>
        //     <h6 class="card-title">{event.EventName}</h6>
        //     <p class="card-text">
        //     Booking starts {event.Date}
        //     Date starts {event.startBooking}
        //     </p>
        //     <Link to="#" class="btn btn-primary">
        //      Book
        //     </Link>
        //   </div>
        // </div>
        })}
    </>
  );
}
