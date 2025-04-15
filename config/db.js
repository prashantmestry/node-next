import mongoose from "mongoose";

// export const connectDB = () => {
//   mongoose.connect(process.env.MONGO_URL);
// };

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("DB connection failed ❌", err);
    process.exit(1);
  }
};

export default connectDB;
