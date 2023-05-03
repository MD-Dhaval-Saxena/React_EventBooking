import DataContext from "./dataContext";
import { useState } from "react";

const DataState = (props) => {

  const eventIntial=[{
    "eventId": 1,
    "EventName": "Samay Raina Unfiltered - India Tour",
    "Date": 1683022226,
    "startBooking": 1682919935,
    "endBooking": 1683022226,
    "tickets": 100
  },
  {
    "eventId": 2,
    "EventName": "Ritviz live in Concert - Ahmedabad",
    "Date": 1683022226,
    "startBooking": 1682919935,
    "endBooking": 1683022226,
    "tickets": 100
  }
  ]
  const [events,setEvents]= useState(eventIntial);
  return (
    <DataContext.Provider value={{events,setEvents}}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataState;
