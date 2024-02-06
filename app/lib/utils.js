import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;

    // Replace the placeholder with your actual MongoDB connection string
    const db = await mongoose.connect("mongodb+srv://erickomee:erickomee254@cluster0.axyzbpk.mongodb.net/dashboard?retryWrites=true&w=majority");

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
