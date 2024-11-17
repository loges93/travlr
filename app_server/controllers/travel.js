var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
/* GET 'travel' page */
const travel = (req, res) => {
    res.render('travel', { title: "Travlr Getaways - Trips", trips });
};

module.exports = {
    travel
};
