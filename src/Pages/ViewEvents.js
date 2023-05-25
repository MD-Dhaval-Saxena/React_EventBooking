import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import EventTotal from "./EventTotal";

export default function ViewEvents() {
  const context = useContext(DataContext);
  const { events, setEvents } = context;

  return (
    <>
      <center>
        <h3>View Events data here</h3>

       {/* {events.map((event) => { 
           return <EventTotal {...{event}}/>; 
       })} */}
        {/* <EventTotal ...{object}/> */}
        
      </center>
    </>
  );
}
