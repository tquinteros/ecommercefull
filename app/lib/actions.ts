"use server"
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    stock: z.coerce.number(),
    price: z.coerce.number(),
    discount_percentage: z.coerce.number(),
    sizes: z.string(),
});


export async function createInvoice(formData: FormData) {

    const { id, name, description, category, image, stock, price, discount_percentage, sizes } = FormSchema.parse({
        id: uuidv4(),
        name: formData.get('name'),
        description: formData.get('description'),
        category: formData.get('category'),
        image: formData.get('image'),
        stock: formData.get('stock'),
        price: formData.get('price'),
        discount_percentage: formData.get('discount_percentage'),
        sizes: formData.get('sizes'),
    });

    try {
        await sql`
            INSERT INTO products
                (id, name, description, category, image, stock, price, discount_percentage, sizes)
            VALUES
                (${id}, ${name}, ${description}, ${category}, ${image}, ${stock}, ${price}, ${discount_percentage}, ${sizes})
        `;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to create product.');
    }

    revalidatePath('/store');
    redirect('/store');
}
