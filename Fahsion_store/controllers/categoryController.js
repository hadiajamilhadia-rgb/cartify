import Category from "../models/categoryModel.js";

// ADD CATEGORY
export const addCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);

        res.status(201).json({
            message: "Category added",
            category
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET CATEGORIES
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.json(categories);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE CATEGORY
export const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);

        res.json({
            message: "Category deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};