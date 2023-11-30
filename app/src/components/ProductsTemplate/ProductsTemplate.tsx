"use client"
import React from "react"
import { Product } from "@/app/lib/definitions"
import ProductCard from "../ProductCard/ProductCard"


const ProductsTemplate = ({ products }: { products: Product[] }) => {

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

export default ProductsTemplate;