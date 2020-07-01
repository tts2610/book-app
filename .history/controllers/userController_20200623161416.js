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

exports.updateUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user)
            throw new Error("there is no such user");
    } catch (error) {
        res.json({
            status: "fail",
            message: error.message
        })
    }
}