import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import abi from "../ABI/abi.json";
import { useLocation, Link } from "react-router-dom";
const ethers = require("ethers");

export default function Nav() {
  const context = useContext(DataContext);
  const { ConnectWalletHandler, defaultAccount } = context;

  const contract_address = process.env.REACT_APP_contract_address;

  let location = useLocation();

  useEffect(
    () => {
      
    }, [location]
    );

  const handleConnect = () => {
    console.log("metmask connecting");

    ConnectWalletHandler();
  };
  return (
    <>
      <nav class="bg-blue-900 py-2 text-white flex justify-between">
        <img
          src="music.png"
          class="h-9 px-10 ml-8 rounded-2xl"
          alt=""
          srcset=""
        />

        <ul class="px-28 flex items-center space-x-20 justify-start font-ui-monospace">
          <Link
            class="text-white  decoration-black  hover:rounded  mx-2 cursor-pointer"
            to="/"
          >
            Home
          </Link>
          <Link
            class="text-white  decoration-black  hover:rounded  mx-2 cursor-pointer"
            to="/CreateEvent"
          >
            Create Event
          </Link>
          <Link
            class="text-white  decoration-black  hover:rounded  mx-2 cursor-pointer"
            to="/search"
          >
            Search Event
          </Link>
          <Link
            class="text-white  decoration-black  hover:rounded  mx-2 cursor-pointer"
            to="/EventTotal"
          >
            View Events
          </Link>
        </ul>
        <div className="dropdown"> 
         
      <a className="nav-link dropdown-toggle" class="bg-white text-sm p-2 text-black rounded" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My Profile
        </a>
        
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/Mytickets">My tickets</Link>
          <Link className="dropdown-item" to="/VerifyTicket">Verify Ticket</Link>
          <Link className="dropdown-item" to="/claimRefund">Claim Refund</Link>
          <hr />
          <p class="ml-4 font-bold"> Admin only</p>
          <hr />
          <Link className="dropdown-item" to="/cancelEvent">Cancel Event</Link>
          <Link className="dropdown-item" to="/sendPayment">Send Payment</Link>
          <hr />
          <Link className="dropdown-item"   to="/">Log Out</Link>

          <Link className="dropdown-divider"></Link>
        </div>
    </div> 
   
        <li
          class="mx-20  text-center cursor-pointer bg-white list-none hover:bg-blue-700 text-black w-[7rem]  rounded-lg px-2 pt-1"
          onClick={ConnectWalletHandler}
        >
          {defaultAccount.length > 10
            ? defaultAccount.substr(0, 5) + "..." + defaultAccount.substr(37, 42)
            : "Connect Wallet"}
        </li>
      </nav>
    </>
  );
}
