import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected with Database!");
    } catch (err) {
        console.error("❌ Database Connection Error:", err);
    }
};

export default connectDB;