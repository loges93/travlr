const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Import the Trip model
const Model = mongoose.model('trips');    // Create a model from the Trip schema

const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });
}

const tripsList = async (req, res) => {
    const q = await Model
        .find({})
        .exec();

    if(!q){
        res
            .status(404)
            .json({"message": "Trips not found"});
        return;
    }
    else{
        res
            .status(200)
            .json(q);
    };
};

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();

    if(!q){
        res
            .status(404)
            .json({"message": "Trips not found"});
        return;
    }
    else{
        res
            .status(200)
            .json(q);
    };
};

const tripsUpdateTrip = async (req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);
  
    try {
      const q = await Model.findOneAndUpdate(
        { code: req.params.tripCode }, // Filter condition
        {
          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description
        },
        { new: true } // Option to return the updated document
      ).exec();
  
      if (!q) {
        // Database returned no data
        return res.status(400).json({ error: 'Trip not found or update failed' });
      } else {
        // Return the resulting updated trip
        return res.status(200).json(q);
      }
    } catch (err) {
      // Handle errors
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  
    // Uncomment the following line to show results of the operation on the console
    // console.log(q);
  };
  

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
