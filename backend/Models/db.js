const mongoose = require('mongoose');
const conn = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error:", err.message);
  }
};

conn();
