
const express = require('express')
const router = express.Router()
const {getHealthy, postRides, getRides, getRidesById} = require("../controller/rideController")


// Rides APIs
router.get("/healthy",getHealthy)
router.post("/rides", postRides)
router.get("/rides",getRides)
router.get("/rides/:rideId",getRidesById)

// if api is invalid OR wrong URL
router.all("/*", function (req, res) {
    res
      .status(404)
      .send({ status: false, message: "The api you requested is not available" });
  });
  
module.exports =router