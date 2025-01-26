import express from 'express';
import Item from "../model/Item";
import {addItem, deleteItem, getItems, updateItem} from "../database/item-data-store";

const router = express.Router();

router.post('/add',async (req, res) => {
    const item: Item = req.body as Item;
    try {
        const addedItem = await addItem(item);
        res.status(201).json(addedItem);
    } catch (error) {
        console.log(`Error adding item: ${error}`);
        res.status(500).send("Error adding item");
    }
});

router.delete('/remove/:id', async (req, res) => {
    const id: string = req.params.id;
    try {
        const deletedItem = await deleteItem(id);
        res.status(200).json(deletedItem);
    } catch (e) {
        console.log(`Error deleting item: ${e}`);
        res.status(500).send("Error deleting item ");
    }
});

router.put('/update/:id', async (req, res) => {
    const id: string = req.params.id;
    const item: Item = req.body as Item;
    try {
        const updatedItem = await updateItem(id, item);
        res.status(200).json(updatedItem);
    } catch (e) {
        console.log(`Error updating item: ${e}`);
        res.status(500).send("Error updating item");
    }
});

router.get('/all', async (req, res) => {
    try {
        const items = await getItems();
        res.status(200).json(items);
    } catch (e) {
        console.log(`Error getting items: ${e}`);
        res.status(500).send("Error getting items");
    }
});

export default router;