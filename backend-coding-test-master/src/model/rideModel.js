const mongoose = require("mongoose")

const rideSchema = new mongoose.Schema({
    startLat: {type:Number, required:true, trim:true},
    startLong: {type:Number, required:true, unique:true, trim:true},
    endLat: {type:Number, required:true, trim:true},
    riderName: {type:String, required:true, trim:true}, 
    driverName: {type:String, required:true, trim:true},
    driverVehicle: {type:String, required:true, trim:true}
},{timestamps:true})

module.exports = mongoose.model("Ride",rideSchema)