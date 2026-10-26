import Product from '../models/product.js';

// Add Product Controller (POST)
export const addProduct = async (req, res) => {
    try {
        const { title, price, description, stock } = req.body;

        const newProduct = new Product({
            title,
            price,
            description,
            stock
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error adding product",
            error: error.message
        });
    }
};