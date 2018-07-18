var mongoose = require('mongoose');
var footballSchema = mongoose.Schema({
	name:{type: String},
	position:{type: String},
	appearences:{type: String},
	goals:{type: String},
	shot_accuracy:{type: String},
	chances_created:{type: String},
	pass_accuracy:{type: String},
	duels_won:{type: String},
	defensive_actions:{type: String},
	defensive_errors:{type: String}
});

var Football = module.exports = mongoose.model('football_db', footballSchema);