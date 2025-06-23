import mongoose from "mongoose";

async function connectToDB(db_name) {
  try {

    const URI=process.env.MONGODB_URI;
    await mongoose.connect(URI);
    console.log("MONGODB CONNECTED :: SUCCESSFULLY");
  } catch (error) {
    console.error("MONGODB CONNECTION :: ERROR", error);
    throw error;
  }
}

export default connectToDB;