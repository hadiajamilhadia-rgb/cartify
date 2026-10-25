// Cartify/controllers/userController.js
const User = require('../models/user');

// Naya User Add karne ka Controller (POST)
const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Save new user in database
        const newUser = new User({
            name,
            email,
            password
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User successfully added!",
            user: savedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding user",
            error: error.message
        });
    }
};

module.exports = { addUser };