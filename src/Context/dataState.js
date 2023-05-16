import DataContext from "./dataContext";
import { useCallback, useState } from "react";
import abi from "../ABI/abi.json";  
const ethers = require("ethers");
const toEth = (value) => ethers.utils.formatEther(value);
const toWei = (value) => ethers.utils.parseEther(value.toString());


const DataState = (props) => {
  const contract_address = process.env.REACT_APP_contract_address;

  const host="http://127.0.0.1:8000/";
  const eventIntial = [];
  const moviesIntial = [];
  const [events, setEvents] = useState(eventIntial);
  const [movies, setMovies] = useState(moviesIntial);
  const [ticket, setTicket] = useState(0);
  const [loading,setLoading] =useState(false);


  // Metamask
  const [errMsg, seterrMsg] = useState("");
  const [defaultAccount, setdefaultAccount] = useState("Connect Wallet");
  const [provider, setprovider] = useState(null);
  const [connectBtn, setconnectBtn] = useState("Connect Wallet");
  const [name, setname] = useState("");
  const [To, setTo] = useState("")
  const [Amount, setAmount] = useState(0)


  const [signer, setsigner] = useState(null);
  const [contract, setcontract] = useState(null);


  const accountHandler = (setAccount) => {
    setdefaultAccount(setAccount);
    send()
    }
    const send = () => {
      let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      setprovider(tempProvider);
  
      let tempSigner = tempProvider.getSigner();
      console.log("🚀 ----------------------------------🚀")
      console.log("🚀 ~ send ~ tempSigner:", tempSigner)
      console.log("🚀 ----------------------------------🚀")
      setsigner(tempSigner);
  
      const tempContract = new ethers.Contract(contract_address, abi, tempSigner);
      setcontract(tempContract);
  
  
    };
  
    const ConnectWalletHandler = (e) => {
      e.preventDefault()
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
  
  // --------------------------


  const getData = async () => {
    // setLoading(true);
    let events=[
    {
      "eventId": 1,
      "EventName": "ArRehman live in Concert - Ahmedabad",
      "Date": 1683022226,
      "startBooking": 1682919935,
      "endBooking": 1683022226,
      "tickets": 100
    },
    {
      "eventId": 2,
      "EventName": "Ritviz live in Concert - Ahmedabad",
      "Date": 1683022226,
      "startBooking": 1682919935,
      "endBooking": 1683022226,
      "tickets": 300
    },
    {
      "eventId": 3,
      "EventName": "badshah",
      "Date": 1683022226,
      "startBooking": 1682919935,
      "endBooking": 1683022226,
      "tickets": 200
    },
  ]
    
    
    // try {
    //   const response = await fetch(`${host}ViewAllEvent`, {
    //     method: "GET",
        
    //   });
    //   /* eslint-disable */
    //   const json = await response.json();
      setEvents(events);
    //   setEvents(json);
    //   setLoading(false);
    // } catch (error) {
    //   console.error("While fetching Notes Something went wrong");
    // }
  };
  
  const searchEvent = async (eventId) => {
    console.log(`loading searchEvent ${eventId}`);

    setLoading(true);
    try {
      const response = await fetch(`${host}ViewEvent/${eventId}`, {
        method: "GET",
        
      });
      /* eslint-disable */
      const json = await response.json();
      console.log(json);
      setEvents(json);
      setLoading(false);
    } catch (error) {
      console.error("While fetching Notes Something went wrong");
    }
  };

//Add Event Sign with metamsk 
  const addEvent = async (eventId, EventName,Date, startBooking,endBooking,tickets) => {
    console.log("🚀 --------------------------------🚀")
    console.log("🚀 ~ addEvent ~ tickets:", tickets)
    console.log("🚀 --------------------------------🚀")
    console.log("hitting api");

      // const response = await fetch(`${host}CreateEvent`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   // Provide all values to createEvent
      //   body: JSON.stringify({eventId, EventName,Date, startBooking,endBooking,tickets}),
      //   // body: {...eventdata}
      // });
      // const event =await response.json();
      // console.log("🚀 ----------------------------🚀")
      // console.log("🚀 ~ addEvent ~ event:", event)
      // console.log("🚀 ----------------------------🚀")

      let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      let tempSigner = tempProvider.getSigner();
      let tx=await contract.connect(tempSigner).createEvent(eventId, EventName,Date, startBooking,endBooking,tickets);
      console.log("🚀 ----------------------🚀")
      console.log("🚀 ~ addEvent ~ tx:", tx)
      console.log("🚀 ----------------------🚀")
      // setEvents(events.concat(event));
  };
  const addCategory = async (eventId, category,price,tickets) => {
   
   
      console.log("hitting addCategory api");

      let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      let tempSigner = tempProvider.getSigner();
      let tx=await contract.connect(tempSigner).add_Ticket_Category(eventId, category,toWei(price), tickets);
      console.log("🚀 ----------------------🚀")
      console.log("🚀 ~ addEvent ~ tx:", tx)
      console.log("🚀 ----------------------🚀")
      setEvents(events.concat(event));
  };

// Value of ticket Will autocalculate
  const Book=async(eventId,category,quantity)=>{    
    
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    
    let tx=await contract.connect(tempSigner).eventTicketCategories(eventId, `${eventId}00${category}`);

    let val=toEth(tx.price);
    console.log("🚀 --------------------🚀")
    console.log("🚀 ~ Book ~ val:", val)
    console.log("🚀 --------------------🚀")
   
    

    let valueAmount = { value: toWei(val) };
    let book=await contract.connect(tempSigner).bookTicket(eventId, `${eventId}00${category}`,quantity,valueAmount);


  }


  const myTicket = async () => {
    
    try {
      const response = await fetch(`${host}ViewTicket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({category:7001}),
        });

      // const response2 = await fetch(`${host}ViewTicket`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({category:6001}),
      //   });
      /* eslint-disable */
        const json = await response.json();
          // console.log(json.category);
          let ticket=json["Category Ticket balance"];
        
      setTicket(ticket);
    } catch (error) {
      console.error("While fetching Notes Something went wrong");
    }
  };

  const getMovies=async()=>{
    const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=hindi&type=movie&sort=latest&page=1';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1a405dee3amsh63d6f16eec0179ap1ef948jsn2b29b6bd885b',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setMovies(result)
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <DataContext.Provider value={{getMovies, events, setEvents, addEvent,getData,searchEvent,ticket,myTicket,loading,setLoading,ConnectWalletHandler,defaultAccount,Book,addCategory }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
