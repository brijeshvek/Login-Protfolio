const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/myportfolio", require("./routes/projectRoutes"));
app.use("/api/contact", require("./routes/contactRouter"));
app.use("/api/auth", require("./routes/authRouter"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
