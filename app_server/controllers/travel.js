// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

const travel = async function (req, res, next) {
    try {
        const fetch = (await import('node-fetch')).default; // Dynamic import
        const response = await fetch(tripsEndpoint, options);
        const json = await response.json();
        res.render('travel', {
            title: 'Travel',
            trips: json
        });
    } catch (err) {
        console.error('Error fetching trips:', err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    travel
};

