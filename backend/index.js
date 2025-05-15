import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/product.routes.js";
import path from "path";
const app = express();
app.use(express.json());
const __dirname = path.resolve();
const port = process.env.PORT;
app.use("/api/products", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`app started at port ${port}`);
  connectDB();
});
