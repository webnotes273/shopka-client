"use client";

import {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";

import "./filters.css"
import {debounce} from "debounce";


const PriceFilter = ({ setSearch }) => {
    const initMaxPrice = 600;
    const initStep = 1;

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(initMaxPrice);

    const handleInput = debounce((e) => {
        setMinPrice(e.minValue);
        setMaxPrice(e.maxValue);
        setSearch(`?min_price=${e.minValue}&max_price=${e.maxValue}`)
}, 700);

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
            </div>
        </div>
    );
};

export default PriceFilter;