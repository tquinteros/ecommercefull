"use client"
import React, { useState } from "react";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-span-3 flex flex-col gap-2 border">
            <div
                className="relative w-full h-[400px] transition-transform duration-300 transform-gpu"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    className={`w-full h-full ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    src="https://acdn.mitiendanube.com/stores/001/177/291/products/washedclassic-4c581f4a8737d8bf2f16976550258842-640-0.webp"
                    layout="fill"
                    objectFit="cover"
                    alt={product.name}
                />
                <Image
                    className={`w-full h-full absolute top-0 left-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    src="https://acdn.mitiendanube.com/stores/001/177/291/products/tabla-de-talle-0800-gr-oil1-e823caf49ce33b971416847969500139-1024-1024-69aafed9c5405eb23316976550120975-640-0.webp"
                    layout="fill"
                    objectFit="cover"
                    alt={product.name}
                />
            </div>
            <div className="p-3 flex flex-col gap-1.5">
                <h3 className="uppercase">{product.name}</h3>
                <h3 className="uppercase">{product.price}</h3>
                <div className="flex justify-center gap-2">
                    {
                        product.sizes.map((size) => {
                            return (
                                <span className="uppercase border p-1 px-3" key={size}>{size}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default ProductCard;
