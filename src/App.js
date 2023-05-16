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
import EventTotal from "./Components/EventTotal";
import Mytickets from "./Components/Mytickets";
import Loader from "./Components/Loader";
import Movies from "./Components/Movies";
import SearchEvent from "./Components/SearchEvent";
import User from "./Components/User";

function App() {

  

  return (
    <>
      <DataState>
        <BrowserRouter>
          <NavbarOne />
        <div className="container"> 
          <Routes>
            <Route  path="/home" element={<Home />} />
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
            <Route path="/movies" element={<Movies/>} />
          </Routes>
          <Routes>
            <Route path="/search" element={<SearchEvent/>} />
          </Routes>
          <Routes>
            <Route path="/user/:name" element={<User/> } />
          </Routes>
          </div>
        </BrowserRouter>
      </DataState>
    </>
  );
}

export default App;
