var fs = require('fs');
var room_list = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));
/* GET 'rooms' page */
const rooms = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways - Rooms", room_list });
};

module.exports = {
    rooms
};