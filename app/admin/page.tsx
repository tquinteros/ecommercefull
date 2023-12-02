import Link from "next/link";
import { fetchProducts } from "../lib/data";
import ProductsAdmin from "../src/components/ProductsAdmin/ProductsAdmin";

export default async function Page() {
    
    const products = await fetchProducts();
    
    return (
        <div>
            <Link href="/admin/create">Create Product</Link>
            <ProductsAdmin products={products} />
        </div>
    )
}