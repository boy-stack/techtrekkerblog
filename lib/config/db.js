import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://TechTrekker:you12341234@cluster0.ta26y.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
