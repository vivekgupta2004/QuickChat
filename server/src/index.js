import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

import authRoutes from './routes/auth.route.js'
import { connectDB } from './lib/db.js';
import messageRoutes from './routes/message.route.js'

import cors from 'cors'
import { app,server } from './lib/socket.js';



dotenv.config()




const PORT = process.env.PORT
const __dirname = path.resolve


app.use(cors({
    origin: 'http://localhost:5173',  // Allow frontend origin
    credentials: true                // Allow cookies, if you're using them
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../client/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../client", "dist", "index.html"));
    })
}


connectDB().then(() => {
    server.listen(PORT, () => {
        console.log("Server is running on port: " + PORT);
    });
}).catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1); // exit with failure
});