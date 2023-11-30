import { sql } from '@vercel/postgres';
import {
    Product,
    Customer
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts() {
    noStore();
    try {
        console.log('Fetching products data...');
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const data = await sql<Product>`SELECT * FROM products`;
        console.log('Data fetch completed after 3 seconds.');
        // console.log('Fetched products data:', data.rows);
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products data.');
    }
}

export async function fetchCustomers() {
    try {
        const data = await sql<Customer>`SELECT * FROM customers`;
        // console.log('Fetched customers data:', data.rows);
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch customers data.');
    }
}