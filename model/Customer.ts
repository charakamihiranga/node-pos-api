export default class Customer {
    id: number;
    name: string;
    nic: string;
    email: string;
    phone: number;

    constructor(id: number, name: string, nic: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.nic = nic;
        this.email = email;
        this.phone = phone;
    }
}