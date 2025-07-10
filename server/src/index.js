import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import authRoutes from './routes/auth.route.js'
import { connectDB } from './lib/db.js';
import messageRoutes from './routes/message.route.js'



dotenv.config()
const app = express();

const PORT = process.env.PORT
app.use(express.json());

app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)




connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port: " + PORT);
    });
}).catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1); // exit with failure
});