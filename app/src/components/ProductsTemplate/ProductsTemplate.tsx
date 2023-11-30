import React from "react"
import { Product } from "@/app/lib/definitions"
import ProductCard from "../ProductCard/ProductCard"
import { fetchFilteredProducts } from "@/app/lib/data";

export default async function ProductsTemplate ({ query, currentPage }: { query: string; currentPage: number; }) {

    const products = await fetchFilteredProducts(query, currentPage);

    if (products.length === 0 && query) {
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
            <div className="grid grid-cols-12 gap-6">
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}
