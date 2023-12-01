'use client';

import { CustomerField, Product } from '@/app/lib/definitions';
import Link from 'next/link';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
// import { createInvoice } from '@/app/lib/action';
import { useFormState } from 'react-dom';
import { createInvoice } from '@/app/lib/actions';
import { useState } from 'react';

export default function Form({ products }: { products: Product[] }) {
    const initialState = { message: null, errors: {} };
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    
    //   const [state, dispatch] = useFormState(createInvoice, initialState);

    // create a string of sizes separated by commas
    const sizes = selectedSizes.join(',');

    return (
        <form action={createInvoice}>
            <div className="rounded-md p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Choose a name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                aria-describedby="name-error"
                                placeholder="Choose a name"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Choose a description
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="description"
                                name="description"
                                type="text"
                                aria-describedby="description-error"
                                placeholder="Choose a description"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="mb-2 block text-sm font-medium">
                        Choose a category
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="category"
                                name="category"
                                type="text"
                                aria-describedby="category-error"
                                placeholder="Choose a category"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="mb-2 block text-sm font-medium">
                        Choose a image
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="image"
                                name="image"
                                type="text"
                                aria-describedby="image-error"
                                placeholder="Choose a image"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="stock" className="mb-2 block text-sm font-medium">
                        Choose a stock
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="stock"
                                name="stock"
                                type="number"
                                inputMode="numeric"
                                step="1"
                                aria-describedby="stock-error"
                                placeholder="Choose a stock"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="mb-2 block text-sm font-medium">
                        Choose a price
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="price"
                                name="price"
                                type="number"
                                aria-describedby="price-error"
                                placeholder="Choose a price"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="discount_percentage" className="mb-2 block text-sm font-medium">
                        Choose a discount_percentage
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="discount_percentage"
                                name="discount_percentage"
                                type="number"
                                aria-describedby="discount_percentage-error"
                                placeholder="Choose a discount_percentage"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="sizes" className="mb-2 block text-sm font-medium">
                        Choose sizes
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="sizes"
                                name="sizes"
                                type="text"
                                aria-describedby="sizes-error"
                                placeholder="Choose a sizes"
                                className="peer block w-full rounded-md bg-black border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-6 flex justify-center gap-4">
                <Link
                    href="/store"
                    className="flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <button className='border text-white px-4 rounded-lg' type="submit">Create Product</button>
            </div>
        </form>
    );
}
