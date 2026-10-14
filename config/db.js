import mongoose from "mongoose";

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MongoDB_URI);
        console;e.log("mongodb connected successfully");
    }
    catch (error) {
        console.error("Error: ${error.message}");
    }

}
export default connectdb;