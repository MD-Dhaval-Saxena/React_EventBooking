import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";

export default function Alert(props) {
  const data = useContext(DataContext);
  return (
    <div
      class="mb-4 rounded-lg text-white px-2 py-2 text-base"
      role="alert"
    >
      A simple info alert—check it out!
    </div>
  );
}
