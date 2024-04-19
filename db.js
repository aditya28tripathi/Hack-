import mongoose from "mongoose";

const URI ="mongodb+srv://aditya28tripathi:gallery123@cluster0.fmtnxyh.mongodb.net/virtualgallery"

const connectDB = async () => {
  await mongoose.connect(URI,{

    useNewUrlParser: true,
    useUnifiedTopology: true,
   
   
  });
  console.log("db cONNECTED")
  
 
};

export default connectDB;