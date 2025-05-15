import Products from "../models/product.model.js";
import mongoose from "mongoose";

export const getproduct = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "couldn't get the products" });
  }
};

export const createproduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.image || !product.price) {
    return res
      .status(400)
      .json({ success: false, message: "PLEASE PROVIDE ALL THE FIEALDS " });
  }
  const newproduct = new Products(product);

  try {
    await newproduct.save();
    res.status(201).json({ success: true, data: newproduct });
  } catch (error) {
    console.error(`errorr in creating products ${error}`);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const updateproduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ success: false, message: "invalid id" });
  }
  try {
    const updatedproduct = await Products.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedproduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteproduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ success: false, message: "invalid id" });
  }
  try {
    await Products.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "item deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
  //console.log("deleted succesfully");
};
