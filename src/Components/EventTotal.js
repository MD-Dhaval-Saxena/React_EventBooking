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
  
  let BookId=0;
  const handleBook=(e)=>{
    BookId=e;
    console.log("🚀 --------------------------------🚀")
    console.log("🚀 ~ handleBook ~ BookId:", BookId)
    console.log("🚀 --------------------------------🚀")
    
  }

  const handleModal=()=>{
    console.log(`Booking EventId ${BookId}`);
    // const selectElement = document.getElementById("ddlViewBy");
    // const selectedValue = selectElement.value;

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
                          EventTotal {events.length}
                        </small>
                      </p>
                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Book Now</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          {/* <label for="recipient-name" class="col-form-label">select Event</label>
                          <input type="text" class="form-control" id="recipient-name"/> */}
                      <select id="ddlViewBy" onChange={handleOnchange} name="category">
                        <option value="1" selected="selected">Silver</option>
                        <option value="2"  >Gold</option>
                        <option value="3"  >Dimond</option>
                      </select>
             
                 
                        </div>
                        <div class="form-group">
                           <label for="message-text" class="col-form-label">Quantity   :</label>
                          <input type="number" name="quantity"  min="1" class="form-control" onChange={handleOnchange} id="input1" placeholder="enter amount"/>
                          

                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" onClick={handleModal}>Book Ticket</button>
                      {/* <button type="button" class="btn btn-primary"  >Book Ticket</button> */}
                    </div>
                  </div>
                </div>
              </div>
    


                    {/* Modal */}
                      
                      <button
                      
                        className="btn btn-outline-success"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={()=>handleBook(event.eventId)}
                        // onClick={()=>handleBook()}
                        
                      >
                        Book
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
