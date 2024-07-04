import { config } from "dotenv";
config();
import express from "express";
import mongoose from "mongoose";
import errorHandler from "./middlewares/error.js";
import notFoundMiddleWare from "./middlewares/notFound.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home");
});
// routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

app.all("*", notFoundMiddleWare);

app.use(errorHandler);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
