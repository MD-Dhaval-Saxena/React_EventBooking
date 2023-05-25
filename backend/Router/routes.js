const express = require("express");
const app = express();
const router = express.Router();

const DataController = require("../Controller/EventController");

router.get("/", async (req, res) => {
  res.send("Welcome TO Event Booking");
});

router.get("/ViewEvent/:id", DataController.ViewEvent);
router.get("/ViewAllEvent", DataController.ViewAllEvent);
router.post("/ViewTicket", DataController.ViewTicket);
router.get("/ViewMyTicket", DataController.ViewMyTicket);

router.post("/CreateEvent", DataController.CreateEvent);
router.post("/add_Ticket_Category", DataController.add_Ticket_Category);
router.post("/bookTicket", DataController.bookTicket);
router.post("/VerifyTicket", DataController.VerifyTicket);

router.post("/cancelTicket", DataController.cancelTicket);
router.post("/Cancel_event", DataController.Cancel_event);
router.post("/claimRefund", DataController.claimRefund);
router.post("/PaymentToOWner", DataController.PaymentToOWner);
router.post("/setApprovalForAll", DataController.setApprovalForAll);

// Mongo
// router.post("/bookingMongo", DataController.bookingMongo);
module.exports = router;
