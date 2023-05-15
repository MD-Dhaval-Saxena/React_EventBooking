import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function Movies() {
  const context = useContext(DataContext);
  const { getMovies} = context;

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>

    <h2>movies here</h2>
      
     {/* {events.map((event, eventId) => {

       return <div key={eventId} className="card-group mt-3">
            <div className="card">
              <div className="card-body">
                <i>#{event.eventId}</i>
                <h5 className="card-title">{event.EventName}</h5>
                <p className="card-text"> Booking starts {event.Date}.</p>
                <p className="card-text">
                  <small className="text-muted">
                    EventTotal {events.length}
                  </small>
                </p>
                <button className="btn btn-outline-success">Book</button>
              </div>
            </div>
          </div> 


        })}
         */}
    </>
  );
}
