import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB(); // Connect to MongoDB

      const { email, password } = req.body;

      // Validate email and password
      if (!email || !password) {
        return res.status(400).json({ msg: "Email and password required !" });
      }
      const emailExists = await User.findOne({ email });
      if (!emailExists) {
        return res.status(400).json({ msg: "Please Register first !" });
      }
      const passwordMatched = await bcrypt.compare(
        password,
        emailExists.password
      );
      if (passwordMatched) {
        const token = jwt.sign({ userId: emailExists._id }, 'YourSecretKey', {
          expiresIn: "30d",
        });
        return res.status(200).json({ msg: "Logged in successfully !", token });
      }
      return res.status(400).json({ msg: "Invalid Credentials !" });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}
