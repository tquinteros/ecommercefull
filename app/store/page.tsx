import { fetchProducts } from "../lib/data";
import ProductsTemplate from "../src/components/ProductsTemplate/ProductsTemplate";
import ProductSkeleton from "../src/components/Skeletons/StoreSkeleton";

export default async function Page() {
    
    const products = await fetchProducts();
    
    return (
        <div className="flex flex-col gap-32">
            <ProductsTemplate products={products} />
        </div>
    )
}