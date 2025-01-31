import {PrismaClient} from '@prisma/client';
import Customer from "../model/Customer";

const prisma = new PrismaClient();
export async function addCustomer(customer: Customer) {
    try {
        return await prisma.customer.create({
            data: {
                name: customer.name,
                nic: customer.nic,
                email: customer.email,
                phone: parseInt(customer.phone)
            }
        });
    } catch (error) {
        console.error(`Error adding customer: ${error}`);
        throw error;
    }
}
export async function deleteCustomer(id: number) {
    try {
        return await prisma.customer.delete({
            where: {
                id: id
            }
        });
    } catch (error) {
        console.error(`Error deleting customer: ${error}`);
        throw error;
    }
}

export async function updateCustomer( id: number, customer: Customer) {
    try {
        return await prisma.customer.update({
            where: {
                id: id
            },
            data: {
                name: customer.name,
                nic: customer.nic,
                email: customer.email,
                phone: parseInt(customer.phone)
            }
        });
    } catch (error) {
        console.error(`Error updating customer: ${error}`);
        throw error;
    }
}

export async function getCustomers() {
    try {
        return await prisma.customer.findMany();
    } catch (error) {
        console.error(`Error getting customers: ${error}`);
        throw error;
    }
}