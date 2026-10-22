import express from "express";
import "dotenv/config";
import cors from "cors";
import chatRoutes from "./routes/chat.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

const startServer = async () => {
    try {
        // console.log("MONGO_URI:", process.env.MONGODB_URI);

        await connectDB();

        app.listen(PORT, () => {
            console.log(`✅ Server running on ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
    }
};

startServer();