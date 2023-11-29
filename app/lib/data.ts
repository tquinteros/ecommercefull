import { sql } from '@vercel/postgres';
import {
    Product,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts() {
    try {
        const data = await sql<Product>`SELECT * FROM products`;
        // console.log('Fetched products data:', data.rows);
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}