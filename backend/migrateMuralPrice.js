const mongoose = require("mongoose");
const Product = require("./models/Product"); // adjust path if needed

const MONGO_URI = "mongodb+srv://2021pcecsranawat133:sX1ti9AXXKhhKwMY@cluster0.c1ynlgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const migrate = async () => {
  try {
    // Find all murals that don't have a muralPrice field
    const murals = await Product.find({ type: "mural", muralPrice: { $exists: false } });

    for (let mural of murals) {
      mural.muralPrice = "50000"; // ✅ Set default price
      await mural.save();
      console.log(`Updated mural: ${mural._id}`);
    }

    console.log("Migration completed. All murals now have a default price of 50000.");
    process.exit(0);
  } catch (err) {
    console.error("Migration error:", err);
    process.exit(1);
  }
};

migrate();
