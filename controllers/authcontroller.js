import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // Check if user already exists
        const user_exist = await User.findOne({
            email: email
        });

        if (user_exist) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        await User.create({
            email: email,
            name: name,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User created successfully"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};