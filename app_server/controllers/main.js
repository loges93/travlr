/* GET homepage */

const index = (req, res) => {
    console.log("Rendering index view"); // Debugging log
    res.render('index', { title: "Travlr Getaways"});
};

module.exports = {
    index
};