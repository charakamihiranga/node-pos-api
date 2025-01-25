import {PrismaClient} from '@prisma/client';
import Customer from "../model/Customer";

const prisma = new PrismaClient();
export async function addCustomer(customer: Customer) {
    console.log(customer)
    try {
        return await prisma.customer.create({
            data: {
                Name: customer.name,
                Nic: customer.nic,
                Email: customer.email,
                Phone: parseInt(customer.phone)
            }
        });
    } catch (error) {
        console.error(`Error adding customer: ${error}`);
        throw error;
    }
}