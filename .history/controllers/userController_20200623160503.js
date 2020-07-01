const User = require("../models/user")

exports.createUser = async(req, res, next) => {
    try {
        const newUser = await User.create({...req.body })
        res.json({
            "status": "success",
            "data": newUser
        })
    } catch (error) {
        res.json({
            status: "fail",
            message: error.message
        })
    }
}

exports.readUser = async(req, res, next) => {
    try {
        const allUsers = await User.find({})
        res.json({
            status: "success",
            dasta: allUsers
        })
    } catch (error) {

    }
}