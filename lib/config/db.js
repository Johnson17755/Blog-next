import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Jhay:Jhay123456@cluster0.0t2jw.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
