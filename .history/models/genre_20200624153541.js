const mongoose = require("mongoose")

const genreSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, "please input your name!"]
    },
}, {
    timestamps: true
})
const Genre = mongoose.model("Genre", genreSchema)

module.exports = Genre