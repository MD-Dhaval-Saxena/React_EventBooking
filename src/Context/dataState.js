import DataContext from "./dataContext";
import { useCallback, useState } from "react";

const DataState = (props) => {
  const host="http://127.0.0.1:8000/";
  const eventIntial = [
    // {
    //   eventId: 1,
    //   EventName: "Samay Raina Unfiltered - India Tour",
    //   Date: 1683022226,
    //   startBooking: 1682919935,
    //   endBooking: 1683022226,
    //   tickets: 100,
    // },
    // {
    //   eventId: 2,
    //   EventName: "Ritviz live in Concert - Ahmedabad",
    //   Date: 1683022226,
    //   startBooking: 1682919935,
    //   endBooking: 1683022226,
    //   tickets: 100,
    // },
  ];
  const [events, setEvents] = useState(eventIntial);
  const [ticket, setTicket] = useState(0);

  const getData = async () => {
    try {
      const response = await fetch(`${host}ViewAllEvent`, {
        method: "GET",
        
      });
      /* eslint-disable */
      const json = await response.json();
      console.log(json);
      setEvents(json);
    } catch (error) {
      console.error("While fetching Notes Something went wrong");
    }
  };

  const addEvent = async (eventId, EventName,Date, startBooking,endBooking,tickets) => {
    console.log("hitting api");

      const response = await fetch(`${host}CreateEvent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Provide all values to createEvent
        body: JSON.stringify({eventId, EventName,Date, startBooking,endBooking,tickets}),
        // body: {...eventdata}
      });
      const event =await response.json();
      console.log("🚀 ----------------------------🚀")
      console.log("🚀 ~ addEvent ~ event:", event)
      console.log("🚀 ----------------------------🚀")
      setEvents(events.concat(event));
  };

  const myTicket = async () => {
    
    try {
      const response = await fetch(`${host}ViewTicket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({category:6001}),
        });
      /* eslint-disable */
        const json = await response.json();
          // console.log(json.category);
          let ticket=json["Category Ticket balance"];
          
      setTicket(ticket);
    } catch (error) {
      console.error("While fetching Notes Something went wrong");
    }
  };


  return (
    <DataContext.Provider value={{ events, setEvents, addEvent,getData,ticket,myTicket }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
