import { sql } from '@vercel/postgres';
import {
    Product,
    Customer
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts() {
    noStore();
    try {
        // console.log('Fetching products data...');
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        const data = await sql<Product>`SELECT * FROM products`;
        // console.log('Data fetch completed after 3 seconds.');
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


export async function fetchRandomProducts() {
    try {
        const data = await sql<Product>`SELECT * FROM products ORDER BY RANDOM() LIMIT 4`;
        // console.log('Fetched random products data:', data.rows);
        console.log('Fetched random products data:', data.rows);
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch random products data.');
    }
}

const ITEMS_PER_PAGE = 15;

export async function fetchFilteredProducts(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const products = await sql<Product>`
        SELECT
          id,
          name,
          description,
          sizes,
          category,
          image,
          stock,
          price,
          discount_percentage
        FROM products
        WHERE
          name ILIKE ${`%${query}%`} OR
          description ILIKE ${`%${query}%`} OR
          category ILIKE ${`%${query}%`}
        ORDER BY name
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
  
      return products.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch products.');
    }
  }