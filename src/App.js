import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import NavbarOne from "./Components/NavbarOne";
import "./App.css";
import Home from "./Components/Home";
import Sample from "./Components/Sample";
import ViewEvents from "./Components/ViewEvents";
import DataState from "./Context/dataState";
import CreateEvent from "./Components/CreateEvent";
import AddTicketCategory from "./Components/AddTicketCategory";
import EventTotal from "./Components/EventTotal";
function App() {
  return (
    <>
      <DataState>
        <BrowserRouter>
          <NavbarOne />
        <div className="container"> 
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/link" element={<Sample/>} />
          </Routes>
          <Routes>
            <Route path="/EventTotal" element={<EventTotal/>} />
          </Routes>
          {/* <Routes>
            <Route path="/ViewEvents" element={<ViewEvents/>} />
          </Routes> */}
          <Routes>
            <Route path="/CreateEvent" element={<CreateEvent/>} />
          </Routes>
          <Routes>
            <Route path="/addCategory" element={<AddTicketCategory/>} />
          </Routes>
          </div>
        </BrowserRouter>
      </DataState>
    </>
  );
}

export default App;
