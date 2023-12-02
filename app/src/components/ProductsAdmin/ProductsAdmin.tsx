import React from "react"
import { Product } from "@/app/lib/definitions"
import { fetchFilteredProducts } from "@/app/lib/data";
import ProductCardAdmin from "../ProductCardAdmin/ProductCard";

export default async function ProductsAdmin ({products}: { products: Product[]; }) {


    if (products.length === 0) {
        return (
            <div>
                <div className="grid grid-cols-12 gap-6">
                    <h1>No products found</h1>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-col mt-8 gap-6">
                {
                    products.map((product) => {
                        return (
                            <ProductCardAdmin key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}
