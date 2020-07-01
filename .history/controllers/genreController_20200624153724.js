const Genre = require("../models/genre")

exports.readGenre = async(req, res, next) => {
    try {
        const allGenre = await Genre.find({})
        res.json({
            status: "success",
            data: allGenre
        })
    } catch (error) {

    }
}