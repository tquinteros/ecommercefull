import Search from "@/app/src/components/Search/Search";
// import { fetchProducts } from "../../lib/data";
import ProductsTemplate from "../../src/components/ProductsTemplate/ProductsTemplate";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    // const products = await fetchProducts();

    return (
        <div className="py-4 flex flex-col gap-4">
            <Search placeholder="Search products..." />
            <ProductsTemplate query={query} currentPage={currentPage} />
        </div>
    )
}