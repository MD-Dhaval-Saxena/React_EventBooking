import React, { useState, useEffect, useContext } from "react";
import ViewEvents from "../Components/ViewEvents";
import CreateEvent from "../Components/CreateEvent";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Modal from "./Modal";
const ethers = require("ethers");

export default function EventTotal() {
  const context = useContext(DataContext);
  const host = process.env.REACT_APP_Backend_Host;
  const {
    events,
    setEvents,
    contract,
    toEth,
    toWei
  } = context;
  
  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    getData();
  
    
  }, []);
  const getData = async () => {
    setLoading(true);
    let events = [
      {
        eventId: 1,
        EventName: "ArRehman live in Concert - Ahmedabad",
        Date: 1683022226,
        startBooking: 1682919935,
        endBooking: 1683022226,
        tickets: 100,
      },
      {
        eventId: 2,
        EventName: "Ritviz live in Concert - Ahmedabad",
        Date: 1683022226,
        startBooking: 1682919935,
        endBooking: 1683022226,
        tickets: 300,
      },
      {
        eventId: 3,
        EventName: "badshah",
        Date: 1683022226,
        startBooking: 1682919935,
        endBooking: 1683022226,
        tickets: 200,
      },
    ];

    try {
      const response = await fetch(`${host}ViewAllEvent`, {
        method: "GET",
      });
      /* eslint-disable */
      const json = await response.json();
      setEvents(json);
      setLoading(false);
    } catch (error) {
      console.error("While fetching Events Something went wrong");
    }
  };
  const [Booking, setBooking] = useState({
    category:0,
    quantity:0
  })
  const Book = async (eventId, category, quantity) => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();

    let tx = await contract
      .connect(tempSigner)
      .eventTicketCategories(eventId, `${eventId}00${category}`);

      console.log("🚀 ----------------------------------------------------------------🚀")
      console.log("🚀 ~ Book ~ `${eventId}00${category}`:", `${eventId}00${category}`)
      console.log("🚀 ----------------------------------------------------------------🚀")
    let val=toEth(tx.price) * quantity;
   

    let valueAmount = { value: toWei(val) };
    try {
      let book = await contract
        .connect(tempSigner)
        .bookTicket(eventId, `${eventId}00${category}`, quantity, valueAmount);
    } catch (error) {
      console.log(error);
    }
  };
  
  const [BookId, setBookId] = useState(0);

  const handleBook=(e)=>{
    setBookId(e);
    
  }

  const handleModal=()=>{
    console.log(`Booking EventId ${BookId}`);
    const selectElement = document.getElementById("ddlViewBy");
    const selectedValue = selectElement.value;

    // console.log({BookId,...Booking});
    Book(BookId,parseInt(Booking.category),parseInt(Booking.quantity));
  }
  const handleOnchange=(e)=>{
    setBooking({...Booking, [e.target.name]: e.target.value });
    // console.log({...Booking, [e.target.name]: e.target.value });
  }
  
  
  
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
              return (
                <div className="container ">
                <div key={eventId} className="card-group mt-3 ">
                    <div className="card">
                      <div className="card-body bg-[#badfff]">
                        <i>#{event.eventId}</i>
                        <h5 className="card-title">{event.EventName}</h5>
                        <p className="card-text"> Booking starts {event.Date}.</p>
                        <p className="card-text">
                          <small className="text-muted">
                            Event tickets:{event.tickets}
                          </small>
                        </p>
                      {/* Modal */}
                      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Book Now {event.eventId}</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            {/* <label htmlFor="recipient-name" className="col-form-label">select Event</label>
                            <input type="text" className="form-control" id="recipient-name"/> */}
                        <select id="ddlViewBy" onChange={handleOnchange} name="category">
                          <option value="0"  selected="selected">Choose</option>
                          <option value="1" >Silver</option>
                          <option value="2"   >Gold</option>
                          <option value="3"  >Dimond</option>
                        </select>
              
                  
                          </div>
                          <div className="form-group">
                            <label htmlFor="message-text" className="col-form-label">Quantity   :</label>
                            <input type="number" name="quantity"  min="1" className="form-control" onChange={handleOnchange} id="input1" placeholder="enter amount"/>
                            

                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"  onClick={handleModal}>Book Ticket</button>
                        
                      </div>
                    </div>
                    </div>
                 </div>
    


                      <button
                      
                        className="flex btn btn-outline-success"
                        data-toggle="modal"
                        accessKey="b"
                        data-target="#exampleModal"
                        onClick={()=>handleBook(event.eventId)}
                        // onClick={()=>handleBook()}
                        
                      >
                        Book
                      </button>

                      {/*  */}
                    </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
