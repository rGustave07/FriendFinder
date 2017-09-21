const friend = require('../data/friends.js');

module.exports = function(app, path){
    app.get("/api/friends", (req, res) => {
        res.json(friend);
    })
}
