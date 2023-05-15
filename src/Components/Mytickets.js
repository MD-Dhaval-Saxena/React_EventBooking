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
      <hr/>
      
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
            <p>Silver 1 Seats and Bar</p>
            <p>Block 406 Row D-E</p>
            <p>seats are first come first serve basis</p>
          </section>
          <section className="ticket__section">
            <h3>Pallidum Mall</h3>
            <p>Near cross road Thaletej,Ahmedabad </p>
            <p>India</p>
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
