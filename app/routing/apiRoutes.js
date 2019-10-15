//pull in data from friendsArray
var friendsData = require("../data/friends");

module.exports = function(app){
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res){
    res.json(friendsData);
});

//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
function totalDifference(friend1, newFriend){
    var totalDifference = 0;
    for(var i=0; i < friend1.scores.length; i++){
        totalDifference += Math.abs(friend1.scores[i] - newFriend.scores[i]);
    } return totalDifference;
}

//
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var mostCompatibleIndex = 0;
    var lowDifference = Number.MAX_SAFE_INTEGER
    friendsData.push(req.body);
    console.log("I'm in the friends post!");
})
}