import express from "express";
import Customer from "../model/Customer";
import {addCustomer, deleteCustomer, getCustomers, updateCustomer} from "../database/customer-data-store";

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

router.delete("/remove/:email", async (req, res) => {
    const email: string = req.params.email;
    try {
        const deletedCustomer = await deleteCustomer(email);
        res.status(200).json(deletedCustomer);
    } catch (e) {
        console.log(`Error deleting customer: ${e}`);
        res.status(500).send("Error deleting customer");
    }
});

router.put("/update/:id", async (req, res) => {
    const id: number = parseInt(req.params.id);
    const customer: Customer = req.body as Customer;
    try {
        const updatedCustomer = await updateCustomer(id, customer);
        res.status(200).json(updatedCustomer);
    } catch (e) {
        console.log(`Error updating customer: ${e}`);
        res.status(500).send("Error updating customer");
    }
});

router.get("/all", async (req, res) => {
    try {
        const customers = await getCustomers();
        res.status(200).json(customers);
    } catch (e) {
        console.log(`Error getting customers: ${e}`);
        res.status(500).send("Error getting customers");
    }
});
export default router;