import React from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import ReactStars from 'react-rating-star-with-type'
import useWatch from "../../hooks/use-watch";


const ProductCard = ({
    product,
    currentUser
}) => {

    const { hasFavorited, toggleFavorite } = useWatch({productId: product.id, currentUser: currentUser});

    return (
        <div className="bg-white group cursor-pointer rounded-[8px] hover:shadow-custom p-4 space-y-4 transition-shadow">
            <div className="flex justify-center">
                <img
                    src={product.imageUrl}
                    alt="Product preview"
                    className="aspect-square object-cover rounded-md"
                />
            </div>
                <p className="text-[#19191D] mb-2 min-h-[74px]">{product.description}</p>
                <p className="font-bold text-2xl mb-2">${product.price  / 100}</p>
            <span className="text-[#787885] text-xxs leading-5">Eligible for Shipping To Mars or somewhere else</span>
            <div className="flex justify-between items-center flex-wrap">
                <div className="flex text-xxs mb-2 mr-1">
                    <ReactStars
                        value={product.rate / 100}
                        activeColor="#FB8200"
                        inactiveColor="#FB8200"
                    />
                    {product.rate  / 100}
                </div>
                <button
                    onClick={toggleFavorite}
                    className="flex items-center justify-between text-[#2264D1] border-solid border rounded-[4px] border-[#9DC2FF] h-8 px-2">
                    {
                        hasFavorited ? <AiFillHeart /> : <AiOutlineHeart />
                    }
                    Watch
                </button>
            </div>
        </div>
    );
};

export default ProductCard;