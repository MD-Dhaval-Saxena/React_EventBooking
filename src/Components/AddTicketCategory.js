import React, { useState, useEffect, useContext ,useCallback} from "react";
import DataContext from "../Context/dataContext";
const ethers = require("ethers");
const toEth = (value) => ethers.utils.formatEther(value);
const toWei = (value) => ethers.utils.parseEther(value.toString());

export default function AddTicketCategory() {
  const context = useContext(DataContext);
  const { contract } = context;
 

  const [category, setCategory] = useState({
    eventId: "",
    _category: "",
    price: "",
    tickets:"",
  });

  const addCategory = async (eventId, category, price, tickets) => {
    console.log("hitting addCategory api");

    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    try {
      
      
      let tx = await contract
      .connect(tempSigner)
      .add_Ticket_Category(eventId, `${eventId}00${category}`, toWei(price), tickets);
      await tx.wait()
      alert("Ticket Category Added")
    } 
      catch (error) {
        alert(error)
      }
  
    // setEvents(events.concat(event));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(
      parseInt(category.eventId),
      parseInt(category._category),
      parseFloat(category.price),
      parseInt(category.tickets),
    );
    
    
    console.log("Calling handleSubmit.......");
    // setCategory({eventId:"",_category:"",price:"",tickets:""});
  };

  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });

  };
  return (
    <>
      <center>
        <h3 class="my-3">Add Ticket Categories here</h3>
      </center>
      <div className="container">
        <form >
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
