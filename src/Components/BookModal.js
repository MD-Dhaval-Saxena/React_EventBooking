import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";

export default function BookModal(props) {
  const data = useContext(DataContext);
  const { Book ,BookId} = data;
  const { eventId } = props;
  
  const [Booking, setBooking] = useState({
    category: 0,
    quantity: 0,
  });


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
  return (<>


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
                                  Book Now {BookId}
                                  {/* Book Now  */}
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
                                      <option value="1">Silver </option>
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
                        {/* Modal */}
  </>);
}
