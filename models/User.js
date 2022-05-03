const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      default: "user",
    },
    phoneNumber: {
      type: String,
      minlength: 10,
      maxlength:20
    },
    fullName: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "/images/profile/user-member-avatar-default.jpg",
    },
  },
  { timestamps: true }
);

// Add plugins
user.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Users", user);