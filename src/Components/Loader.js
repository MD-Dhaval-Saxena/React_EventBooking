import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";

export default function Loader() {
  const data = useContext(DataContext);
  return (
    <div className="loader">
      <i className="loader-el"></i>
      <i className="loader-el"></i>
    </div>
  );
}
