import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';

export default function Modal(props) {
    const data=useContext(DataContext);

    const {eventId} =props;
return(
    <>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Book Now</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            {/* <label htmlFor="recipient-name" className="col-form-label">select Event</label>
            <input type="text" className="form-control" id="recipient-name"/> */}
            <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose Category
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Silver</a>
            <a className="dropdown-item" href="#">Gold</a>
            <a className="dropdown-item" href="#">Diamond</a>
        </div>
</div>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Quantity   :</label>
            <input type="number" className="form-control" id="input1" placeholder="enter amount"/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" >Book Ticket</button>
        {/* <button type="button" className="btn btn-primary"  >Book Ticket</button> */}
      </div>
    </div>
  </div>
</div>
    
    
    
    </>
)

}