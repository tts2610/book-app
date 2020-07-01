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
            data: allUsers
        })
    } catch (error) {

    }
}

exports.updateUser = async(req, res, next) => {
    // try {
    //     const user = await User.findById(req.params.id)
    //     if (!user)
    //         throw new Error("there is no such user");
    //     const fields = Object.keys(req.body)
    //     fields.map(field => user[field] = req.body[field])

    //     res.json({
    //         status: "success",
    //         data: user
    //     })

    //     user.save();

    //     next();
    // } catch (error) {
    //     res.json({
    //         status: "fail",
    //         message: error.message
    //     })
    // }
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body)
        await user.save()
        res.status(201).json({
            data: { user },
            "status": "success"
        })

    } catch (error) {

    }
}