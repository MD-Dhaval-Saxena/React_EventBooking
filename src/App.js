import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import DataState from "./Context/dataState";
import CreateEvent from "./Pages/CreateEvent";
import AddTicketCategory from "./Pages/AddTicketCategory";
import VerifyTicket from "./Pages/VerifyTicket";
import ViewEvents from "./Pages/ViewEvents";
import Mytickets from "./Pages/Mytickets";
import SearchEvent from "./Pages/SearchEvent";
import Nav from "./Components/Nav";
import ClaimRefund from "./Pages/ClaimRefund";
import CancelEvent from "./Pages/CancelEvent";
import SendPayment from "./Pages/SendPayment";



function App() {
  return (
    <>
      <DataState>
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/ViewEvents" element={<ViewEvents/>} />
          </Routes>
         

          <Routes>
            <Route path="/CreateEvent" element={<CreateEvent />} />
          </Routes>
          <Routes>
            <Route path="/Mytickets" element={<Mytickets />} />
          </Routes>
          <Routes>
            <Route path="/addCategory" element={<AddTicketCategory />} />
          </Routes>

          <Routes>
            <Route path="/search" element={<SearchEvent />} />
          </Routes>

          <Routes>
            <Route path="/VerifyTicket" element={<VerifyTicket />} />
          </Routes>
          <Routes>
            <Route path="/claimRefund" element={<ClaimRefund />} />
          </Routes>
          <Routes>
            <Route path="/cancelEvent" element={<CancelEvent />} />
          </Routes>
          <Routes>
            <Route path="/sendPayment" element={<SendPayment />} />
          </Routes>
          {/* </div> */}
        </BrowserRouter>
      </DataState>
    </>
  );
}

export default App;
