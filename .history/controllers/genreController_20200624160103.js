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

exports.createGenre = async(req, res, next) => {
    try {
        const newGenre = await Genre.create({...req.body })
        res.json({
            "status": "success",
            "data": newGenre
        })
    } catch (error) {
        res.json({
            status: "fail",
            message: error.message
        })
    }
}