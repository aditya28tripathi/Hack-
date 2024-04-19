import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB(); // Connect to MongoDB Atlas
      
      const { name, email, password } = req.body;
      
      // Validate name, email, and password
      if (!name || !email || !password) {
        return res.status(400).json({ msg: "All Fields are Mandatory !" });
      }
      if (name.length < 2 || name.length > 50) {
        return res.status(400).json({ msg: "Name must be between 2 and 50 characters long." });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ msg: "Invalid email address." });
      }
      if (password.length < 8) {
        return res.status(400).json({ msg: "Password must be at least 8 characters long." });
      }
      
      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: "User already Registered !" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      const result = await newUser.save();

      // Sign JWT token with user ID as payload
      const token = jwt.sign({ userId: result._id }, 'YourSecretKey', {
        expiresIn: "30d",
      });

      return res
        .status(201)
        .json({ msg: "Registered Succesfully !", token });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}
