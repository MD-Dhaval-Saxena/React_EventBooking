import React, { useState, useEffect, useContext } from "react";
import ViewEvents from "../Components/ViewEvents";
import CreateEvent from "../Components/CreateEvent";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";

export default function Mytickets() {
  const context = useContext(DataContext);
  const { ticket, setTicket, events, setEvents, myTicket } = context;

  useEffect(() => {
    myTicket();

  },[])
  console.log(`your ${ticket}`);
//   console.log(ticket);
  return (
    <>
      <h3 className="mt-5">View Myticket</h3>
      <hr />

      <article className="ticket">
        <header className="ticket__wrapper">
          <div className="ticket__header">{ticket} 🎟</div>
        </header>
        <div className="ticket__divider">
          <div className="ticket__notch"></div>
          <div className="ticket__notch ticket__notch--right"></div>
        </div>
        <div className="ticket__body">
          <section className="ticket__section">
            <h3>Your Tickets</h3>
            <p>Level 1 VIP Club Seats and Bar</p>
            <p>Block 406 Row Q Seats 34-35</p>
            <p>Your seats are together</p>
          </section>
          <section className="ticket__section">
            <h3>Venue Address</h3>
            <p>8 Joanne Lane, 2516 AC Den Haag</p>
            <p>Netherlands</p>
          </section>
          {/* <section className="ticket__section">
      <h3>Payment Method</h3>
      <p>Mastercard **** 8765</p>
    </section> */}
        </div>
        <footer className="ticket__footer">
          <span>Total Paid</span>
          <span>173.20</span>
        </footer>
      </article>
    </>
  );
}
