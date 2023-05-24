import React, { useState, useEffect, useContext } from "react";
import ViewEvents from "../Components/ViewEvents";
import CreateEvent from "../Components/CreateEvent";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";

export default function Mytickets() {
  const host = process.env.REACT_APP_Backend_Host;

  const context = useContext(DataContext);
  const { ticketData, setTicketData } = context;

  useEffect(() => {
    ViewMyTicket();
  }, []);

  const ViewMyTicket = async () => {
    try {
      const response = await fetch(`${host}ViewMyTicket`, {
        method: "GET",
      });
      /* eslint-disable */
      const json = await response.json();
      console.log(json);
      setTicketData(json);
    } catch (error) {
      console.error("While fetching Notes Something went wrong");
    }
  };
  return (
    <>
      <h3 className="mt-5 text-center ">View Myticket</h3>
      <div class="main flex justify-center items-center">
        {ticketData.map((category, tickets) => {
          console.log(`Here is category ${category.category}`);
          console.log(`Here is tickets  ${category.tickets}`);
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
                    <p>Ticket :{category.tickets}Silver 1 Seats and Bar</p>
                    <p>seats are first come first serve basis</p>
                  </section>
                  <section className="ticket__section">
                    <h3>Pallidum Mall</h3>
                    <p>Near cross road Thaletej,Ahmedabad </p>
                    <p>India</p>
                  </section>
                </div>
                <footer className="ticket__footer">
                  <span>Total Paid</span>
                  <span>173.20</span>
                  <button class="bg-slate-600 text-white text-sm px-2">
                    Cancel
                  </button>
                </footer>
              </article>
            </div>
          );
        })}
      </div>
    </>
  );
}
