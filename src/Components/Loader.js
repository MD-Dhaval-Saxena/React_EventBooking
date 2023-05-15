import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";

export default function Loader() {
  const data = useContext(DataContext);
  return (
    <div class="loader">
      <i class="loader-el"></i>
      <i class="loader-el"></i>
    </div>
  );
}
