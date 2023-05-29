import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import Loader from "../Components/Loader";
import BookModal from "../Components/BookModal";
const ethers = require("ethers");
const ABI=require('../ABI/abi.json')
  


export default function ViewEvents() {
  document.title="EventGO ~ View Events";

  const context = useContext(DataContext);
  const host = process.env.REACT_APP_Backend_Host;
  const { events, setEvents, Book, BookId,setBookId } = context;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();

  }, []);
 
    let eventss = [
      {
        eventId: 1,
        EventName: "yoyo honey",
        Owner: "0x0fadb24C9A7ac088c329C4Fa87730D3B2df2f525",
        Date: "May 23, 2023 at 3:33\u202fPM",
        startBooking: "May 23, 2023 at 3:33\u202fPM",
        endBooking: "May 24, 2023 at 3:33\u202fPM",
        tickets: 499,
      },
      {
        categoryID: "1001",
        price: 100000000000000000,
        totalTickets: 99,
      },
      {
        categoryID: "1002",
        price: 200000000000000000,
        totalTickets: 100,
      },
      {
        categoryID: "1003",
        price: 500000000000000000,
        totalTickets: 300,
      },
      {
        eventId: 2,
        EventName: "badshah live",
        Owner: "0x0fadb24C9A7ac088c329C4Fa87730D3B2df2f525",
        Date: "May 23, 2023 at 3:52\u202fPM",
        startBooking: "May 23, 2023 at 3:53\u202fPM",
        endBooking: "May 23, 2023 at 3:52\u202fPM",
        tickets: 300,
      },
      {
        categoryID: "2001",
        price: 100000000000000000,
        totalTickets: 100,
      },
      {
        eventId: 3,
        EventName: "Ritviz live",
        Owner: "0x0fadb24C9A7ac088c329C4Fa87730D3B2df2f525",
        Date: "May 23, 2023 at 3:52\u202fPM",
        startBooking: "May 23, 2023 at 3:53\u202fPM",
        endBooking: "May 23, 2023 at 3:52\u202fPM",
        tickets: 300,
      },
    ];
    

    const getData = async () => {
      setLoading(true);

    try {
      const response = await fetch(`${host}ViewAllEvent`, {
        method: "GET",
      });
      /* eslint-disable */
      const json = await response.json();
      console.log(json);
      setEvents(json);
    // setEvents(eventss);
    setLoading(false);
    } catch (error) {
      console.error("While fetching Events Something went wrong");
    }
  };
  const [Booking, setBooking] = useState({
    category: 0,
    quantity: 0,
  });

  const handleBook = (e) => {
    setBookId(e);
  };

  const handleModal = () => {
    console.log(`Booking EventId ${BookId}`);
    const selectElement = document.getElementById("ddlViewBy");
    const selectedValue = selectElement.value;

    // console.log({BookId,...Booking});
    Book(BookId, parseInt(Booking.category), parseInt(Booking.quantity));
  
  };
  const handleOnchange = (e) => {
    setBooking({ ...Booking, [e.target.name]: e.target.value });
    // console.log({...Booking, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3 class="text-center mt-2 underline text-white">Ongoing Events</h3>

      {/* <div>{loading ? <Loader /> : <>{events.map((event) => {

                
            })}</>}</div> */}
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            {events.map((event, eventId) => {
             
               if(event.categoryID>=0){
                // return <h1>NO event Found </h1>
                console.log("hello");
              }
              else{

              return (
               
                <div className="container">
                  <div className="grid-cols-2">
                  <div key={eventId} className="card-group mt-3 ">
                    <div className="card">
                      <div className="card-body bg-white">
                        <i>#{event.eventId}</i>
                        <h5 className="card-title">{event.EventName}</h5>
                        <p className="card-text">
                          Booking starts:{event.Date}
                        </p>
                        <p className="card-text">
                          Booking Ends: {event.endBooking}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Event tickets : {event.tickets}
                          </small>
                        </p>
                        <BookModal/>

                        <button
                          className="flex btn btn-outline-success"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => handleBook(event.eventId)}
                          // onClick={()=>handleBook()}
                        >
                          Book
                        </button>

                        {/*  */}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              );
            }
            }
            )}
          </>
        )}
      </div>
    </>
  );
}
