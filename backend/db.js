const mongoose = require("mongoose");
const con =
  "mongodb+srv://maruf170102:OxkUG6XNTwBZznis@cluster0.nteo5v0.mongodb.net/gofood?retryWrites=true&w=majority";
const mongodb = async () => {
  try {
    await mongoose.connect(con);
    console.log("Connected to the database");

    const fetch_data = mongoose.connection.db.collection("food_items");

    // Log the count of documents in the collection
    const count = await fetch_data.countDocuments({});
    console.log(`Number of documents in 'food_items': ${count}`);

    const data = await fetch_data.find({}).toArray();
    // console.log("Fetched data:");
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
};
module.exports = mongodb;
