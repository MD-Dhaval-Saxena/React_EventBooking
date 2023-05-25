import React, { useState, useEffect, useContext, useCallback } from "react";
import DataContext from "../Context/dataContext";
import Loader from "../Components/Loader";

export default function CreateEvent() {
  const host = process.env.REACT_APP_Backend_Host;
  console.log("🚀 -----------------------------🚀");
  console.log("🚀 ~ CreateEvent ~ host:", host);
  console.log("🚀 -----------------------------🚀");

  // const context = useContext(DataContext);
  // const { events } = context;
  const [events, setEveData] = useState([]);

  const [event, setEvents] = useState({
    eventId: 5,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchEvent(event.eventId);
    
  };

  const onChange = (e) => {
    setEvents({ ...event, [e.target.name]: e.target.value });
  };

  const searchEvent = async (eventId) => {
    console.log(`loading searchEvent ${eventId}`);

    setLoading(true);
    try {
      const response = await fetch(`${host}ViewEvent/${eventId}`, {
        method: "GET",
      });
      /* eslint-disable */
      const json = await response.json();
      console.log(json);
      setEveData(json);
      setLoading(false);
    } catch (error) {
      console.error("While fetching Notes Something went wrong");
    }
  };
  return (
    <>
      <center>
        <h3>Search here</h3>
      </center>
      <div className="container">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="eventId"
              name="eventId"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter Event Id"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-dark "
            >
              Search
            </button>

            {/* <div> */}
              {loading ? (
                <Loader />
              ) : (
                <>
                  {events.map((event) => {
                    if(event.categoryID>=0){
                      // console.log("hello");
                    }
                   
                    else{

                    return (
                      <div className="col-md-12 mt-5">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                          <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">
                              {event.eventId}
                            </strong>
                            <h3 className="mb-0"> {event.EventName}</h3>
                            <div className="mb-1 text-body-secondary">
                              {event.Date}
                            </div>
                            <p className="card-text mb-auto">
                              Seats are based on a first come first serve basis
                            </p>
                            <a href="#" className="stretched-link">
                              View More
                            </a>
                          </div>
                          <div className="col-auto d-none d-lg-block">
                            <svg
                              className="bd-placeholder-img"
                              width="200"
                              height="250"
                              xmlns=""
                              aria-label="Placeholder: Thumbnail"
                              preserveAspectRatio="xMidYMid slice"
                              focusable="false"
                            >
                              <title>Placeholder</title>
                              <rect
                                width="100%"
                                height="100%"
                                fill="#55595c"
                              ></rect>
                              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                Thumbnail
                              </text>
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  })}
                </>
              )}
            {/* </div> */}
          </div>
        </form>
      </div>
    </>
  );
}
