import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
const ethers = require("ethers");

export default function Mytickets() {
  document.title="EventGO ~ My tickets";

  const host = process.env.REACT_APP_Backend_Host;
  let check=[];
  const context = useContext(DataContext);
  const { ticketData, contract, setTicketData } = context;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ViewMyTicket();
    window.ethereum.on("accountsChanged", function () {
      ViewMyTicket();
    });
  }, []);
  const [event, setEvents] = useState({
    eventId: 5,
    category: 5,
    quantity: 5,
  });

  const ViewMyTicket = async () => {
    console.log("loading viewMYticket");
    setLoading(true);

    let Alldata = [];
    let data;
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
   
    let getTickets = await contract.connect(tempSigner).returnCats();
    for (let i = 0; i < getTickets.length; i++) {
      let No = getTickets[i];
      const tx = await contract.connect(tempSigner).ViewTicket(No);
      data = {
        category: parseInt(No),
        tickets: parseInt(tx),
      };

      Alldata.push(data);
      check.push(data);
    }
    setTicketData(Alldata);
    setLoading(false);
    if (Alldata.length == 0) {
      let nullData = [
        {
          category: 0,
          tickets: 0,
        },
      ];
      setTicketData(nullData);
      setLoading(false);
      console.log("🚀 ~ ViewMyTicket ~ nullData:", nullData);
      console.log("No ticketsfound");
    }
  };

  // console.log(`loading ViewMyTicket ${eventId} ${category}`);
  //     let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  //     let tempSigner = tempProvider.getSigner();
  //     try {
  //         let tx = await contract
  //         .connect(tempSigner)
  //         .claimRefund(eventId, `${eventId}00${category}`);
  //         await tx.wait()
  //         // if(tx.value)
  //         // alert("Ticket Verif  ied..${})
  //     } catch (error) {
  //     alert(error)
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    CancelTicket(event.eventId, event.category, event.quantity);
  };
  const handleOnchange = (e) => {
    setEvents({ ...event, [e.target.name]: e.target.value });
  };
  const CancelTicket = async (eventId, category, quantity) => {
    console.log(`loading CancelTicket ${eventId} ${category} ${quantity}`);
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    try {
      let tx = await contract
        .connect(tempSigner)
        .cancelTicket(eventId, `${eventId}00${category}`, quantity);
      await tx.wait();
      alert(`Ticket Cancelled ID: ${category}`);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <h3 className="mt-5 text-center ">View Myticket</h3>
      <div class="main flex justify-center items-center">
        {loading ? (
          <Loader />
        ) : (
          <>
            {ticketData.map((category) => {
              if (category.category == 0) {
                return (
                  <>
                    <article className="ticket mt-20">
                      <header className="ticket__wrapper">
                        {/* <div className="ticket__header">{ticket} 🎟</div> */}
                      </header>
                      <div className="ticket__divider">
                        <div className="ticket__notch"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                      </div>
                      <div className="ticket__body">
                        <section className="ticket__section">
                          <h3>Your have No Ticket to Show</h3>
                          <p>Ticket: {category.tickets} 🎟</p>
                          <hr />
                          <Link to="/ViewEvents">Buy Ticktes Now</Link>
                        </section>
                      </div>
                    </article>
                  </>
                );
              }

              return (
                <div className="m-2">
                  <hr />

                  <article className="ticket">
                    <header className="ticket__wrapper">
                      {/* <div className="ticket__header">{ticket} 🎟</div> */}
                    </header>
                    <div className="ticket__divider">
                      <div className="ticket__notch"></div>
                      <div className="ticket__notch ticket__notch--right"></div>
                    </div>
                    <div className="ticket__body">
                      <section className="ticket__section">
                        <h3>Your Ticket Category: {category.category}</h3>
                        <p>Ticket Quantity: {category.tickets} 🎟</p>
                        <p>seats are first come first serve basis</p>
                      </section>
                      <section className="ticket__section">
                        <h3>Pallidum Mall</h3>
                        <p>Near cross road Thaletej,Ahmedabad </p>
                        <p>India</p>
                      </section>
                    </div>
                    <footer className="ticket__footer">
                      <button
                        class="bg-slate-600 text-white text-lg ml-12 px-4"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Cancel
                      </button>
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
                                Cancel Ticket
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
                                <div className="form-group"></div>
                                <div className="form-group">
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Event Id :
                                  </label>
                                  <input
                                    type="number"
                                    name="eventId"
                                    className="form-control"
                                    id="input1"
                                    onChange={handleOnchange}
                                    placeholder="Enter Event Id"
                                  />
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Category :
                                  </label>
                                  <input
                                    type="number"
                                    name="category"
                                    className="form-control"
                                    id="input1"
                                    onChange={handleOnchange}
                                    placeholder="Enter Category"
                                  />
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Quantity :
                                  </label>
                                  <input
                                    type="number"
                                    name="quantity"
                                    className="form-control"
                                    id="input1"
                                    onChange={handleOnchange}
                                    placeholder="Enter Quantity"
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
                                onClick={handleSubmit}
                                className="btn btn-primary"
                              >
                                Cancel Ticket
                              </button>
                              {/* <button type="button" className="btn btn-primary"  >Book Ticket</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </article>
                </div>
              );
            }
            )}
          </>
        )}
      </div>
    </>
  );
}
