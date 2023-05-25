import DataContext from "./dataContext";
import { useCallback, useState, useEffect } from "react";
import abi from "../ABI/abi.json";
const ethers = require("ethers");
const toEth = (value) => ethers.utils.formatEther(value);
const toWei = (value) => ethers.utils.parseEther(value.toString());

const DataState = (props) => {
  const contract_address = process.env.REACT_APP_contract_address;

  const host = process.env.REACT_APP_Backend_Host;
  const eventIntial = [];
  const [events, setEvents] = useState(eventIntial);
  const [ticketData, setTicketData] = useState([]);

  const [ticket, setTicket] = useState(0);

  // Metamask
  const [errMsg, seterrMsg] = useState("");
  const [defaultAccount, setdefaultAccount] = useState("Connect");
  const [provider, setprovider] = useState(null);
  const [connectBtn, setconnectBtn] = useState("Connect Wallet");
  const [name, setname] = useState("");
  const [To, setTo] = useState("");
  const [Amount, setAmount] = useState(0);

  const [signer, setsigner] = useState(null);
  const [contract, setcontract] = useState("emptyContract");
  useEffect(() => {
    checIfWalletIsConnected();
    send();
    window.ethereum.on('accountsChanged', function () {
      if (window.ethereum) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((result) => {
            accountHandler(result[0]);
            setconnectBtn("Connected");
          });
      } else {
        seterrMsg("Please Install Metamask Extention");
      }
    })
   
    
  }, []);

  const checIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setdefaultAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const accountHandler = (setAccount) => {
    setdefaultAccount(setAccount);
    send();
  };
  const send = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setprovider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    console.log("🚀 ----------------------------------🚀");
    console.log("🚀Metamask Connected");
    console.log("🚀 ----------------------------------🚀");
    setsigner(tempSigner);

    const tempContract = new ethers.Contract(contract_address, abi, tempSigner);
    setcontract(tempContract);
  };

  const ConnectWalletHandler = (e) => {
    e.preventDefault();
    console.log("metamask");
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountHandler(result[0]);
          setconnectBtn("Connected");
        });
    } else {
      seterrMsg("Please Install Metamask Extention");
    }
  };



  return (
    <DataContext.Provider
      value={{
        events,
        setEvents,
        ticket,
        contract,
        ConnectWalletHandler,
        defaultAccount,
        toEth,
        toWei,
        ticketData,
        setTicketData
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
