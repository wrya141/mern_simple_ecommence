import express from "express";
import mongoose from "mongoose";
import Products from "../models/product.model.js";
import {
  getproduct,
  createproduct,
  updateproduct,
  deleteproduct,
} from "../controllers/producct.controller.js";

const router = express.Router();

router.get("/", getproduct);
router.post("/", createproduct);
router.put("/:id", updateproduct);
router.delete("/:id", deleteproduct);

export default router;
