import React, { useState, useEffect, useContext } from "react";
import ViewEvents from "../Components/ViewEvents";
import CreateEvent from "../Components/CreateEvent";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Modal from "./Modal";

export default function EventTotal() {
  const context = useContext(DataContext);
 

  const {
    events,
    setEvents,
    addNote,
    getData,
    loading,
    setLoading,
    defaultAccount,
    Book,
    seteId
  } = context;

  useEffect(() => {
    getData();
    
  }, []);
  const [Booking, setBooking] = useState({
    category:0,
    quantity:0
  })
  
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
      <h4>Account: {defaultAccount}</h4>

      {/* <div>{loading ? <Loader /> : <>{events.map((event) => {

                
            })}</>}</div> */}
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            {events.map((event, eventId) => {
              return (
                <div key={eventId} className="card-group mt-3">
                    <div className="card">
                      <div className="card-body">
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
                          <option value="1" selected="selected">Silver</option>
                          <option value="2"  >Gold</option>
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
                      
                        className="btn btn-outline-success"
                        data-toggle="modal"
                        accessKey="b"
                        data-target="#exampleModal"
                        onClick={()=>handleBook(event.eventId)}
                        // onClick={()=>handleBook()}
                        
                      >
                        Book
                      </button>

                      <button
                      
                        className="btn btn-outline-grey ml-5"
                        data-toggle="modal"
                        accessKey="b"
                        // data-target="#exampleModal"
                        // onClick={()=>handleBook(event.eventId)}
                        // onClick={()=>handleBook()}
                      >
                        Silver
                        ${event.price}
                      </button>
                      <button
                      
                        className="btn btn-outline-warning ml-3"
                        data-toggle="modal"
                        accessKey="b"
                        // data-target="#exampleModal"
                        // onClick={()=>handleBook(event.eventId)}
                        // onClick={()=>handleBook()}
                      >
                        Gold
                        ${event.price}
                      </button>
                      <button
                      
                        className="btn btn-outline-danger ml-3"
                        data-toggle="modal"
                        accessKey="b"
                        // data-target="#exampleModal"
                        // onClick={()=>handleBook(event.eventId)}
                        // onClick={()=>handleBook()}
                      >
                        Dimond
                        ${event.price}

                      </button>
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
