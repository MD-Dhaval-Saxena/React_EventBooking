import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';

export default function CreateEvent() {
    const data=useContext(DataContext);
return(
    <>
    <center>
    <h3>CreateEvent here</h3>
    </center>
    <div className="container">
    <form>
        
  <div class="form-group">
    <input type="email" class="form-control" id=" EventId" aria-describedby="emailHelp" placeholder="Enter Event Id"/>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="EventName" aria-describedby="emailHelp" placeholder="Enter EventName"/>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="Date" aria-describedby="emailHelp" placeholder="Enter Date"/>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="startBooking" aria-describedby="emailHelp" placeholder="Enter startBooking"/>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="endBooking" aria-describedby="emailHelp" placeholder="Enter endBooking"/>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="tickets" aria-describedby="emailHelp" placeholder="Enter tickets"/>
  </div>
 
 
  <button type="submit" class="btn btn-dark">Create</button>
</form>
</div>
    </>
)

}