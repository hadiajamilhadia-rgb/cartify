import Review from '../models/review.js';

export const addReview = async (req, res) => {
    try {
        const { userId, productId, rating, comment } = req.body;
        const newReview = new Review({ userId, productId, rating, comment });
        const savedReview = await newReview.save();

        res.status(201).json({
            success: true,
            message: "Review added successfully",
            data: savedReview
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
