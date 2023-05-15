import React, { useState, useEffect, useContext, useCallback } from "react";
import DataContext from "../Context/dataContext";
import Loader from "../Components/Loader";

export default function CreateEvent() {
  const context = useContext(DataContext);
  const { events,searchEvent, loading } = context;

  const [event, setEvents] = useState({
    eventId: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    searchEvent(event.eventId);
  };

  const onChange = (e) => {
    setEvents({ ...event, [e.target.name]: e.target.value });
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

            <div>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {events.map((event) => {
                    return <div class="col-md-12 mt-5">
                      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                          <strong class="d-inline-block mb-2 text-primary">
                            {event.eventId}
                          </strong>
                          <h3 class="mb-0"> {event.EventName}</h3>
                          <div class="mb-1 text-body-secondary">
                          {event.Date}
                          </div>
                          <p class="card-text mb-auto">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.
                          </p>
                          <a href="#" class="stretched-link">
                            View More
                          </a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                          <svg
                            class="bd-placeholder-img"
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
                    </div>;
                  })}
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
