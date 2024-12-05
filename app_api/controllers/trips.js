const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Import the Trip model
const Model = mongoose.model('trips');    // Create a model from the Trip schema

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

module.exports = {
    tripsList,
    tripsFindByCode
};
