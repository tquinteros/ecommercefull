"use client"
import React, { useState } from "react";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import { DeleteProduct } from "../Buttons/Buttons";

const ProductCardAdmin = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex px-8 justify-between items-center gap-2 border">
            <div className="flex items-center gap-2">
                <Image
                    src="https://acdn.mitiendanube.com/stores/001/177/291/products/washedclassic-4c581f4a8737d8bf2f16976550258842-640-0.webp"
                    width={100}
                    height={100}
                    className="object-cover"
                    alt={product.name}
                />
                <div className="p-3 flex flex-col gap-1.5">
                    <h3 className="uppercase">{product.name}</h3>
                    <h3 className="uppercase">${product.price}</h3>
                    <div className="flex justify-center gap-2">
                        {product.sizes}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button>Edit</button>
                <DeleteProduct id={product.id} />
            </div>
        </div>
    )
};

export default ProductCardAdmin;
