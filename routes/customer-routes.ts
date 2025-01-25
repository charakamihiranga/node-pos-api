import express from "express";
import Customer from "../model/Customer";
import {addCustomer} from "../database/customer-data-store";

// use the express.Router class to create modular, mountable route handlers
const router = express.Router();

router.post("/add",async (req, res) => {
    const customer: Customer = req.body as Customer;
    try {
        const addedCustomer = await addCustomer(customer);
        res.status(201).json(addedCustomer);
    } catch (error) {
        console.log(`Error adding customer: ${error}`);
        res.status(500).send("Error adding customer");
    }
});

export default router;