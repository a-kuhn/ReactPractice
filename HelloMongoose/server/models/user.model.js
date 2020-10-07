const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [2, "{PATH} must be at least 2 characters long."]
	},
	last_name: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [2, "{PATH} must be at least 2 characters long."]
	},
	user_name: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [6, "{PATH} must be at least 6 characters long."]
	},
	email: {
		type: String,
		required: [true, "{PATH} is required."],
		//todo: make a custom email validator
	},
	pw: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [8, "{PATH} must be at least 8 characters long."]
	}
}, {timestamps: true}); // {timestamps: true} tells mongoose to auto-manage createdAt and updatedAt fields as Date objects

const User = mongoose.model("User", UserSchema);

module.exports = User;