const user = require("../models/user.model")

const CreateUser = async (req, res) => {
    try {
        const newUser = new user(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

const GetAllUser = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = CreateUser