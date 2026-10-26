// Cartify/models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Agar user model ke sath link karna ho
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;