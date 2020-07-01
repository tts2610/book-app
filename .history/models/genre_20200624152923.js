const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please input your name!"]
    },
    email: {
        type: String,
        required: [true, "please input your email"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "please input your password"],
        trim: true
    }
}, {
    timestamps: true
})

// userSchema.pre("save", async function(next) {
//     if (!this.isModified("password")) {
//         return next();
//     }
//     throw new Error("you cannot modify password!")
// })

const User = mongoose.model("User", userSchema)

module.exports = User