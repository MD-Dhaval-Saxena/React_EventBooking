import React, { useState, useEffect, useContext ,useCallback} from "react";
import DataContext from "../Context/dataContext";

export default function AddTicketCategory() {
  const context = useContext(DataContext);
  const { addCategory } = context;

  const [category, setCategory] = useState({
    eventId: 5,
    _category: 0,
    price: 0,
    tickets:0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(
      parseInt(category.eventId),
      parseInt(category._category),
      parseFloat(category.price),
      parseInt(category.tickets),
    );
    console.log("Calling handleSubmit.......");
  };

  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  return (
    <>
      <center>
        <h3>Add Tciket Categories here</h3>
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
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="_category"
              name="_category"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter category"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter price"
            />
          </div>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="tickets"
              name="tickets"
              onChange={onChange}
              aria-describedby="emailHelp"
              placeholder="Enter tickets"
            />
          </div>

          <button type="submit" onClick={handleSubmit} className="btn btn-dark">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
