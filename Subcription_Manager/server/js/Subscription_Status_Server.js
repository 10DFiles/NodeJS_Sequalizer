/*var db = require('../../db');

module.exports.add = function(req, res) {
	console.log("server hitted", req.body);
	var testDetails = req.body;
	db.query('INSERT INTO test SET ?', testDetails, function(err, res) {
		if (err)
			throw err;
		console.log('Last insert ID:', res.insertId);
	});
	res.send('student added successfully');
}*/

/*module.exports.add = function(req, res) {
	console.log("i am in server", req.body);
	var Sequelize = require("sequelize");
	var sequelize = new Sequelize('testnode', 'root', 'admin', {
		host : 'localhost',
		dialect : 'mysql'
	});

	var test = sequelize.define("test", {
		name : Sequelize.STRING
	});

	sequelize.sync({
		force : false
	}).then(function(err) {
		test.create({
			name : req.body.name
		}).then(function(tests) {
			console.log("sucess part", tests.id);
			res.send((tests.id).toString());
		});
	});
}
*/

module.exports.subcription_status=function(req,res){
	console.log("To check Subscription  status");
	console.log("Id u have passed---",req.body.id);
	res.send("true");
}    