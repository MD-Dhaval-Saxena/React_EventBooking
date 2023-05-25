const mongoose=require('mongoose')
const { Schema } = mongoose;



// Solution - In connection string, change localhost to 127.0.0.1.
const dataSchema = new Schema({
    account:String,
    BookingDetails:{
      eventId:Number,
      EventName: String,
      Date: Number,
      BookedOn: Number,
      quanity: Number,
      price: Number
    }
});

module.exports = mongoose.model("Booking", dataSchema);
