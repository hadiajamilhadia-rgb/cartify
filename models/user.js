// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Yeh ensure karein ke 'export default' ho:
const User = mongoose.model('User', userSchema);
export default User;