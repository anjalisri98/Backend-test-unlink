const rideModel = require("../model/rideModel");

const getHealthy = async function (req, res) {
  try {
    return res.status(200).send({ status: true, message: "Healthy" });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const postRides = async function (req, res) {
  try {
    const startLatitude = req.body.start_lat;
    const startLongitude = req.body.start_long;
    const endLatitude = req.body.end_lat;
    const endLongitude = req.body.end_long;
    const riderName = req.body.rider_name;
    const driverName = req.body.driver_name;
    const driverVehicle = req.body.driver_vehicle;

    if (
      startLatitude < -90 ||
      startLatitude > 90 ||
      startLongitude < -180 ||
      startLongitude > 180
    ) {
      return res.send({
        error_code: "VALIDATION_ERROR",
        message:
          "Start latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively",
      });
    }

    if (
      endLatitude < -90 ||
      endLatitude > 90 ||
      endLongitude < -180 ||
      endLongitude > 180
    ) {
      return res.send({
        error_code: "VALIDATION_ERROR",
        message:
          "End latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively",
      });
    }

    if (typeof riderName !== "string" || riderName.length < 1) {
      return res.send({
        error_code: "VALIDATION_ERROR",
        message: "Rider name must be a non empty string",
      });
    }

    if (typeof driverName !== "string" || driverName.length < 1) {
      return res.send({
        error_code: "VALIDATION_ERROR",
        message: "Rider name must be a non empty string",
      });
    }

    if (typeof driverVehicle !== "string" || driverVehicle.length < 1) {
      return res.send({
        error_code: "VALIDATION_ERROR",
        message: "Rider name must be a non empty string",
      });
    }

    var values = [
      req.body.start_lat,
      req.body.start_long,
      req.body.end_lat,
      req.body.end_long,
      req.body.rider_name,
      req.body.driver_name,
      req.body.driver_vehicle,
    ];
    const ride = await rideModel.create(values);
    return res
      .status(201)
      .send({ status: true, message: "ride created successfully", data: ride });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};
const getRides = async function (req, res) {
  try {
    const rides = await rideModel.find({});
    if(rides.length===0){
        return res.status(404).send({ status: false, message: "ride not found"});
    }
    return res
      .status(201)
      .send({ status: true, message: "rides found successfully", data:ride  });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const getRidesById = async function (req, res) {
  try {
    let rideId = req.params.rideId;
    const isValidObjectId = function (objectId) {
        return mongoose.Types.ObjectId.isValid(objectId); // returns a boolean
      };
    if (!isValidObjectId(rideId)) {
        return res
          .status(400)
          .send({ status: true, message: "bookId is required in params" });
      }
  
      let findrides = await bookModel.find({_id:bookId}).select({ _v: 0 });
      logger.info('~ file: rideController:112 ~ --find rides', ride)
  
      if (!findrides)
        return res.status(404).send({
          status: false,
          message: `no rides found by this RideID: ${rideId}`,
        });
  

  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports={ getHealthy, postRides, getRides, getRidesById }