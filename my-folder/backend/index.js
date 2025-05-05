const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const franchiseRoutes = require("./routes/franchiseRoutes");
const affiliateRoutes = require("./routes/affiliateRoutes");
const sqlRoutes = require("./routes/sqlRoutes");
const orderRoutes = require("./routes/orderRoutes");        // ✅ NEW
const complaintRoutes = require("./routes/complaintRoutes"); // ✅ NEW
const revenueRoutes = require("./routes/revenueRoutes");     // ✅ NEW

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", productRoutes);
app.use("/api/franchise", franchiseRoutes);
app.use("/api/affiliate", affiliateRoutes);
app.use("/api/sql", sqlRoutes);
app.use("/api/orders", orderRoutes);           // ✅ NEW
app.use("/api/complaints", complaintRoutes);   // ✅ NEW
app.use("/api/revenue", revenueRoutes);        // ✅ NEW

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
