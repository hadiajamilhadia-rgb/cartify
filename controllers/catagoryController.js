import Catagory from '../models/catagory.js';

export const addCatagory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCatagory = new Catagory({ name, description });
        const savedCatagory = await newCatagory.save();

        res.status(201).json({
            success: true,
            message: "Catagory added successfully",
            data: savedCatagory
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};