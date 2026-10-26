import Cart from '../models/cart.js';

export const addToCart = async (req, res) => {
    try {
        const { userId, items } = req.body;
        const newCart = new Cart({ userId, items });
        const savedCart = await newCart.save();

        res.status(201).json({
            success: true,
            message: "Item added to cart successfully",
            data: savedCart
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};