import { PrismaClient } from '@prisma/client';
import Item from "../model/Item";

const prisma = new PrismaClient();

export async function addItem(item: Item) {
    try {
        return await prisma.item.create({
            data: {
                Name: item.name,
                Quantity: parseInt(item.qty),
                Price: parseFloat(item.price)
            }
        });
    } catch (error) {
        console.error(`Error adding item: ${error}`);
        throw error;
    }
}

export async function deleteItem(id: string) {
    try {
        return await prisma.item.delete({
            where: {
                ItemID: parseInt(id)
            }
        });
    } catch (error) {
        console.error(`Error deleting item: ${error}`);
        throw error;
    }
}

export function updateItem(id: string, item: Item) {
  try {
      return prisma.item.update({
          where: {
              ItemID: parseInt(id)
          },
          data: {
              Name: item.name,
              Quantity: parseInt(item.qty),
              Price: parseFloat(item.price)
          }
      });
  } catch (e) {
      console.error(`Error updating item: ${e}`);
        throw e;
  }
}

export async function getItems() {
    try {
        return await prisma.item.findMany();
    } catch (error) {
        console.error(`Error getting items: ${error}`);
        throw error;
    }
}