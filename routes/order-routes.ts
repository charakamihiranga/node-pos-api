import express from "express";
import {addOrder} from "../database/order-data-store";

const router = express.Router();

router.post("/place-order", (req, res) => {
   const order = req.body;
   try {
       const savedOrder = addOrder(order);
       res.status(201).json(savedOrder);
   } catch (e) {
       res.status(500).json('Failed to place order!');
   }
});

export default router;