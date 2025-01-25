// import mongoose from "mongoose";

// export const ConnectDB = async () => {
//   await mongoose.connect(
//     "mongodb+srv://Jhay:Jhay123456@cluster0.0t2jw.mongodb.net/blog-app"
//   );
//   console.log("DB Connected");
// };

import mongoose from "mongoose";

const connectWithRetry = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Jhay:Jhay123456@cluster0.0t2jw.mongodb.net/blog-app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected");
  } catch (err) {
    console.error("DB connection error:", err);
    setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
  }
};

export const ConnectDB = connectWithRetry;
