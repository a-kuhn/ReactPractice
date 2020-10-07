const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
}, {timestamps: true}); // {timestamps: true} tells mongoose to auto-manage createdAt and updatedAt fields as Date objects

const User = mongoose.model("User", UserSchema);

module.exports = User;