var User = require('../../models/user');

//Get all timesheets
function index(req, res) {
	User.find({timesheet: {}}, function(err, timesheets){
		if (err) return res.status(500).json({message: "Something went wrong"});
		if (!users) return res.status(404).json({message: err});

		return res.status(200).json(timesheets);
	});
}

function createTimesheet(req, res){
	// console.log(req.body);
	User.findByIdAndUpdate(req.body.user_id, {$set: req.body.newTimesheet}, {new: true}, function(err, user){
		if(err) return res.status(500).json({message: "could not get user from database"});
		if(!user) return res.status(404).json({message: err});

		return res.status(200).json(user);
	})
}

module.exports = {
  index: index,
  create: createTimesheet
}