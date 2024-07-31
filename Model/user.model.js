const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        admin_type: {
            type: Number,
            required: true,
            enum: [1, 2]  // 1 for Admin, 2 for User
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const user = mongoose.model("user", userSchema);
module.exports = user;
