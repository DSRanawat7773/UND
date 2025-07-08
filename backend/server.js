const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Allow only your frontend origin
app.use(cors({
  origin: 'https://urbannestdesigns.in',
  credentials: true
}));

app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
