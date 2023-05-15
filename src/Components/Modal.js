import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';

export default function Modal(props) {
    const data=useContext(DataContext);

    const {eventId} =props;
return(
    <>
    <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Book Now</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            {/* <label for="recipient-name" class="col-form-label">select Event</label>
            <input type="text" class="form-control" id="recipient-name"/> */}
            <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose Category
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Silver</a>
            <a class="dropdown-item" href="#">Gold</a>
            <a class="dropdown-item" href="#">Diamond</a>
        </div>
</div>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Quantity   :</label>
            <input type="number" class="form-control" id="input1" placeholder="enter amount"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" >Book Ticket</button>
        {/* <button type="button" class="btn btn-primary"  >Book Ticket</button> */}
      </div>
    </div>
  </div>
</div>
    
    
    
    </>
)

}