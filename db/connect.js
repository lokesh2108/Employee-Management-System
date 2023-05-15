import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;

// mongoose.connect(process.env.DB).then(()=>console.log('connected to the database....')).catch((err)=> console.log(err))
