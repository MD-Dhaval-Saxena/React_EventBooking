import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavbarOne from "./Components/NavbarOne";
import "./App.css";
import Home from "./Components/Home";
import Sample from "./Components/Sample";
import ViewEvents from "./Components/ViewEvents";
import DataState from "./Context/dataState";
import CreateEvent from "./Components/CreateEvent";
import AddTicketCategory from "./Components/AddTicketCategory";
import VerifyTicket from "./Components/VerifyTicket";
import EventTotal from "./Components/EventTotal";
import Mytickets from "./Components/Mytickets";
import Loader from "./Components/Loader";
import SearchEvent from "./Components/SearchEvent";
import User from "./Components/User";
import Nav from "./Components/Nav";
import ClaimRefund from "./Components/ClaimRefund";
import CancelEvent from "./Components/CancelEvent";

function App() {

  

  return (
    <>
      <DataState>
        <BrowserRouter>
          <Nav />
          
        {/* <div className="container">  */}
          <Routes>
            <Route  path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/link" element={<Sample/>} />
          </Routes>
        {/* IMplement Loader here */}
          <Routes>
            <Route  path="/EventTotal" 
            element={<EventTotal/>} />
          </Routes>
        
          <Routes>
            <Route path="/CreateEvent" element={<CreateEvent/>} />
          </Routes>
          <Routes>
            <Route path="/Mytickets" element={<Mytickets/>} />
          </Routes>
          <Routes>
            <Route path="/addCategory" element={<AddTicketCategory/>} />
          </Routes>
          
          <Routes>
            <Route path="/search" element={<SearchEvent/>} />
          </Routes>
          <Routes>
            <Route path="/user/:name" element={<User/> } />
          </Routes>
          <Routes>
            <Route path="/VerifyTicket" element={<VerifyTicket/> } />
          </Routes>
          <Routes>
            <Route path="/claimRefund" element={<ClaimRefund/> } />
          </Routes>
          <Routes>
            <Route path="/cancelEvent" element={<CancelEvent/> } />
          </Routes>
          {/* </div> */}
        </BrowserRouter>
      </DataState>
    </>
  );
}

export default App;
