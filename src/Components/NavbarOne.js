import React, { useState, useEffect,useContext } from "react";
import DataContext from "../Context/dataContext";

import abi from "../ABI/abi.json";  
import {
  useLocation,
  Link
} from "react-router-dom";
const ethers = require("ethers");

function NavbarOne() {
  const context = useContext(DataContext);
  const { ConnectWalletHandler,defaultAccount } = context;

  const contract_address = process.env.REACT_APP_contract_address;

  // const [errMsg, seterrMsg] = useState("");
  // const [defaultAccount, setdefaultAccount] = useState("Connect");
  // const [provider, setprovider] = useState(null);
  // const [connectBtn, setconnectBtn] = useState("Connect Wallet");
  // const [name, setname] = useState("");
  // const [To, setTo] = useState("")
  // const [Amount, setAmount] = useState(0)


  // const [signer, setsigner] = useState(null);
  // const [contract, setcontract] = useState(null);

  let location = useLocation();
  
  useEffect(() => {
  }, [location]);

  const handleConnect=()=>{
    // e.preventDefault();
    console.log("metmask connecting");
    ConnectWalletHandler();
    
  }

  // const accountHandler = (setAccount) => {
  // setdefaultAccount(setAccount);
  // send()
  // }
  // const send = () => {
  //   let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  //   setprovider(tempProvider);

  //   let tempSigner = tempProvider.getSigner();
  //   console.log("🚀 ----------------------------------🚀")
  //   console.log("🚀 ~ send ~ tempSigner:", tempSigner)
  //   console.log("🚀 ----------------------------------🚀")
  //   setsigner(tempSigner);

  //   const tempContract = new ethers.Contract(contract_address, abi, tempSigner);
  //   setcontract(tempContract);


  // };

  // const ConnectWalletHandler = (e) => {
  //   e.preventDefault()
  //   console.log("metamask");
  //   if (window.ethereum) {
  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((result) => {
  //         accountHandler(result[0]);
  //         setconnectBtn("Connected");
  //       });
  //   } else {
  //     seterrMsg("Please Install Metamask Extention");
  //   }
  // };
  return(

    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/home">Event Booking</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
 <Link className={`nav-link ${location.pathname==="/home" ? "active": ""}`} to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/movies" ? "active": ""}`} to="/movies">Movies</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Functions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/CreateEvent">Create Event</Link>
          <Link className="dropdown-item"  to="/addCategory">Add Ticket Category</Link>
          <Link className="dropdown-divider"></Link>
          <Link className="dropdown-item" to="/search">Search Event</Link>
          <Link className="dropdown-item" to="/ViewEvents">Show Events </Link>
        </div>
      </li>
   

     
    </ul>
    
    <form className="form-inline my-2 my-lg-0">
    <div className="center">
  <div className="center left">
    <label>
      <input type="checkbox" value="false"/>
      <span className="switch">
        <span className="switch-button"></span>
      </span>
    </label>
  </div>
 
</div>


    <div className="dropdown">
         
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My Profile
        </a>
        
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/Mytickets">My tickets</Link>
          <Link className="dropdown-item"  to="/">Log Out</Link>
          <Link className="dropdown-divider"></Link>
        </div>
    </div>
      {/* <button  onClick={ConnectWalletHandler}>{connectBtn}</button> */}
      {/* <button className="btn btn-success" onClick={ConnectWalletHandler}>{defaultAccount.substr(32, 42)}</button> */}
      <button className="btn btn-success" onClick={ConnectWalletHandler}>{defaultAccount}</button>

    </form>
  </div>
</nav>
  </>
    )
}

export default NavbarOne;

