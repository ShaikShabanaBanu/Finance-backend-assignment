
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/finance", require("./routes/financeRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.listen(5000, ()=>console.log("Server running on 5000"));
