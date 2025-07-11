import { config } from "dotenv";
import { connectDB } from '../lib/db.js'
import User from "../models/user.model.js"



config()

const seedUsers = [
    {
        email: "john.doe@example.com",
        fullName: "John Doe",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=1"
    },
    {
        email: "jane.smith@example.com",
        fullName: "Jane Smith",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=2"
    },
    {
        email: "michael.brown@example.com",
        fullName: "Michael Brown",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=3"
    },
    {
        email: "emily.jones@example.com",
        fullName: "Emily Jones",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=4"
    },
    {
        email: "william.taylor@example.com",
        fullName: "William Taylor",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=5"
    },
    {
        email: "olivia.wilson@example.com",
        fullName: "Olivia Wilson",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=6"
    },
    {
        email: "james.moore@example.com",
        fullName: "James Moore",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=7"
    },
    {
        email: "sophia.miller@example.com",
        fullName: "Sophia Miller",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=8"
    },
    {
        email: "alex.johnson@example.com",
        fullName: "Alex Johnson",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=9"
    },
    {
        email: "chloe.davis@example.com",
        fullName: "Chloe Davis",
        password: "password123",
        profilePic: "https://i.pravatar.cc/150?img=10"
    }
];


const seedDatabase = async () => {
    try {
        await connectDB();
        await User.insertMany(seedUsers);
        console.log("Database seeded successfully")
    }
    catch (error) {
        console.log("Error seeding databse", error);
    }
}

seedDatabase();

