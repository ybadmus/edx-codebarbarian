var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
	firstname = "";
	for (var i = 0; i < this.name.length; i++) {
		if (this.name[i] === " ") break;
		firstname += this.name[i];
	}
    return firstname;
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
	lastname = "";
    lastnamereversed = "";
    for (var j = (this.name.length - 1); j > 0; j--) {
		lastnamereversed += this.name[j]
        if (this.name[j] === " ") break;
	};
	for (var k = (lastnamereversed.length - 1); k >= 0; k--) {
        lastname += lastnamereversed[k];
    };
	return lastname.trim();
});

schema.set('toObject', {virtuals: true});
schema.set('toJSON', {virtuals: true});

module.exports = schema;
