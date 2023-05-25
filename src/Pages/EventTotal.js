import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import Loader from "../Components/Loader";
const ethers = require("ethers");
  


export default function EventTotal() {
  const context = useContext(DataContext);
  const host = process.env.REACT_APP_Backend_Host;
  const { events, setEvents, contract, toEth, toWei } = context;
  
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
        endBookin: "May 23, 2023 at 3:52\u202fPM",
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
        endBookin: "May 23, 2023 at 3:52\u202fPM",
        tickets: 300,
      },
    ];
    const getData = async () => {
      setLoading(true);

    // try {
    //   const response = await fetch(`${host}ViewAllEvent`, {
    //     method: "GET",
    //   });
    //   /* eslint-disable */
    //   const json = await response.json();
    //   console.log(json);
      // setEvents(json);
    setEvents(eventss);
    setLoading(false);
    // } catch (error) {
    //   console.error("While fetching Events Something went wrong");
    // }
  };
  const [Booking, setBooking] = useState({
    category: 0,
    quantity: 0,
  });
  const Book = async (eventId, category, quantity) => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();

    let tx = await contract
      .connect(tempSigner)
      .eventTicketCategories(eventId, `${eventId}00${category}`);

    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ Book ~ `${eventId}00${category}`:",
      `${eventId}00${category}`
    );
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    let val = toEth(tx.price) * quantity;

    let valueAmount = { value: toWei(val) };
    try {
      let book = await contract
        .connect(tempSigner)
        .bookTicket(eventId, `${eventId}00${category}`, quantity, valueAmount);
        await book.wait()

        alert(`"Status": "Ticket Booked Succefully ID: ${eventId}00${category}"`)
      
    } catch (error) {
      console.log(error);
      alert(error)
      // alert("User Rejected Booking")

    }
    
    
        
  };

  const [BookId, setBookId] = useState(0);

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
                  <div key={eventId} className="card-group mt-3 ">
                    <div className="card">
                      <div className="card-body bg-[#badfff]">
                        <i>#{event.eventId}</i>
                        <h5 className="card-title">{event.EventName}</h5>
                        <p className="card-text">
                          {" "}
                          Booking starts {event.Date}.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Event tickets:{event.tickets}
                          </small>
                        </p>
                        {/* Modal */}
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Book Now {event.eventId}
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="form-group">
                                    {/* <label htmlFor="recipient-name" className="col-form-label">select Event</label>
                            <input type="text" className="form-control" id="recipient-name"/> */}
                                    <div class="condition bg-gray-100 italic">
                                    <h6 id="cat ">Conditions</h6>
                                    <p class="text-sm text-gray-600">Entry in screen will be given Verify your ticket before 5 min of the show time.</p>
                                    <p class="text-sm text-gray-600">If there is any show breakdown or cancellation due to technical reasons, your money will be refunded.</p>
                                    <p class="text-sm text-gray-600">Ticket cancellation charge is 10%</p>
                                    </div>
                                    <select
                                      id="ddlViewBy"
                                      onChange={handleOnchange}
                                      name="category"
                                    >
                                      <option value="0" selected="selected">
                                        Choose
                                      </option>
                                      <option value="1">Silver {event.price}</option>
                                      <option value="2">Gold</option>
                                      <option value="3">Dimond</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label
                                      htmlFor="message-text"
                                      className="col-form-label"
                                    >
                                      Quantity :
                                    </label>
                                    <input
                                      type="number"
                                      name="quantity"
                                      min="1"
                                      className="form-control"
                                      onChange={handleOnchange}
                                      id="input1"
                                      placeholder="enter amount"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={handleModal}
                                >
                                  Book Ticket
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          className="flex btn btn-outline-success"
                          data-toggle="modal"
                          accessKey="b"
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
