// Cartify/controllers/orderController.js
import Order from '../models/order.js';

// Add Order Controller (POST)
export const createOrder = async (req, res) => {
    try {
        const { productName, quantity, totalPrice } = req.body;

        const newOrder = new Order({
            productName,
            quantity,
            totalPrice
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: savedOrder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating order",
            error: error.message
        });
    }
};