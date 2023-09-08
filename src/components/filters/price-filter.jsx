"use client";

import {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";
import {useLocation, useNavigate} from "react-router-dom";
import qsString from "query-string";

import "./filters.css"


const PriceFilter = () => {
    const initMaxPrice = 600;
    const initStep = 1;

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(initMaxPrice);
    const navigate = useNavigate();
    const { search } = useLocation()

    const handleInput = (e) => {
        setMinPrice(e.minValue);
        setMaxPrice(e.maxValue);
    };

    const handleClick = () => {

        const current = qsString.parse(search);

        const query = {
            ...current,
            min_price: minPrice,
            max_price: maxPrice
        }

        const url = qsString.stringifyUrl({
            url: '',
            query,
        }, { skipNull: true });

        return navigate(url);
    };

    return (
        <div className="">
            <div className="relative flex flex-col">
                <div className="flex justify-between items-ceter"><span>${minPrice}</span><span>${maxPrice}</span></div>
                <MultiRangeSlider
                    className="custom"
                    min={0}
                    max={initMaxPrice}
                    step={initStep}
                    minValue={minPrice}
                    maxValue={maxPrice}
                    onInput={(e) => handleInput(e)}
                    label={false}
                    ruler={false}
                    barLeftColor="#94a3b8"
                    barInnerColor="black"
                    barRightColor="#94a3b8"
                    thumbLeftColor="white"
                    thumbRightColor="white"
                />

                <button
                    onClick={handleClick}
                    className="flex items-center justify-center text-[#2264D1] text-lg border-solid border rounded-[4px] border-[#9DC2FF] transition h-10 px-4 hover:bg-[#2264D1] hover:text-white"
                >
                    Apply
                </button>

            </div>
        </div>
    );
};

export default PriceFilter;