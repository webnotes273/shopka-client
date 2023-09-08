import React from 'react';
import ProductCard from "../components/products/product-card";
import PriceFilter from "../components/filters/price-filter";
import { useFetchAllProductsQuery } from "../store/services/ProductService";
import Preloader from "../components/ui/preloader/Preloader";
import {useLocation} from "react-router-dom";
import NoResults from "../components/ui/no-results";

const Home = () => {
    console.log('home')
    const { search } = useLocation();
    // Let's assume that we have user authentication
    const fakeCurrentUser = {
        id: 1,
        name: "Anton",
        email: "anton@gmail.com"
    };
    const { data: products, isLoading } = useFetchAllProductsQuery(search);

    if (isLoading) return <Preloader />

    return (
        <div className="mx-auto max-w-[1350px] px-4">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                <div className="pt-20">
                    <p className="mb-3 text-lg font-bold">Price Range Selected</p>
                    <div className="border-2 border-[#EDEDF0] p-2">
                        <PriceFilter />
                    </div>
                </div>

                <div className="mt-4 lg:col-span-4 shadow-custom-2 rounded-[8px] p-4">
                    <div className="mb-4 flex gap-x-4 flex-wrap items-center">
                        <span className="text-xxs font-medium text-[#19191D] mb-2">Related</span>
                        <span className="text-xxs py-[6px] px-3 rounded-[99px] text-[#4A4B57] bg-[#EDEDF0] mb-2">worldwide shipping</span>
                        <span className="text-xxs py-[6px] px-3 rounded-[99px] text-[#4A4B57] bg-[#EDEDF0] mb-2">under $50</span>
                        <span className="text-xxs py-[6px] px-3 rounded-[99px] text-[#4A4B57] bg-[#EDEDF0] mb-2">kitten</span>
                        <span className="text-xxs py-[6px] px-3 rounded-[99px] text-[#4A4B57] bg-[#EDEDF0] mb-2">plastic plugs</span>
                        <span className="text-xxs py-[6px] px-3 rounded-[99px] text-[#4A4B57] bg-[#EDEDF0] mb-2">pucker shoes</span>
                        <span className="text-xxs py-[6px] px-3 rounded-[99px] text-[#4A4B57] bg-[#EDEDF0] mb-2">vintage typewriter</span>

                    </div>
                    {
                        products && products.length > 0
                        ?
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {
                                    products.map(product =>
                                        <ProductCard key={product.id} product={product} currentUser={fakeCurrentUser} />
                                    )
                                }
                            </div>
                        : <NoResults />
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;