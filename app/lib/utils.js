import mongoose from "mongoose";

const maxRetries = 5;
const maxTimeout = 30000; // Set the maximum timeout in milliseconds (e.g., 30 seconds)
let retries = 0;

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect("mongodb+srv://erickomee:erickomee254@cluster0.axyzbpk.mongodb.net/dashboard?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      poolSize: 10, // Adjust the pool size based on your needs
    });

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("MongoDB connection error:", error);

    if (retries < maxRetries) {
      const delay = Math.pow(2, retries) * 1000; // Exponential backoff in milliseconds
      console.log(`Retrying connection in ${delay / 1000} seconds (attempt ${retries + 1} of ${maxRetries})...`);
      retries++;
      setTimeout(connectToDB, Math.min(delay, maxTimeout));
    } else {
      throw new Error("Max retries reached. Unable to establish MongoDB connection.");
    }
  }
};
