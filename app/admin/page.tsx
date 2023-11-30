import { fetchProducts } from "../lib/data";
import ProductsTemplate from "../src/components/ProductsTemplate/ProductsTemplate";

export default async function Page() {
    
    const products = await fetchProducts();
    
    return (
        <div>
            ADMIN
        </div>
    )
}