import mongoose, { Types } from "mongoose";

const productschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Products = mongoose.model("Product", productschema);
export default Products;
