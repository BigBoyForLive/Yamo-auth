const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserOtpVerificationSchema = new Schema({
    userId: String,
    otp : String,
    createdAt: Date,
    expiresAt: Date
})

const userOtpVerification = mongoose.model(
    "UserOTPVerification",
    UserOtpVerificationSchema
)

module.exports = userOtpVerification;