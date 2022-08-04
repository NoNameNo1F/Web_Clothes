const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
//const stripeRoute = require('./routes/stripe');
dotenv.config();
//CONNECT TO DATABASE
mongoose
    .connect(
        (process.env.MONGODB_URL)
    )
    .then(() => console.log("DB Connection Successfull!"))
    .catch((error) => {
        console.log(error);
    });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
//app.use('/api/checkout', stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running...!");
});